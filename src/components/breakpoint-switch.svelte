<!--
  This component encapsulates the (surprisingly complicated) logic of selectively displaying content at different screen widths.

  There are two main details that complicate this:
  1. Hiding elements with CSS doesn't stop them from rendering, which causes performance problems (especially with nested components using breakpoints.)
  2. During server-side rendering, the screen size is unknowable,
    so template conditionals will not necessarily be showing the correct content.
    This results in a jarring, very visible, shift in the content about a quarter-second after the page loads.

  The availability of the screen width is only a problem on the initial page load.
  Subsequent navigations will have the information immediately, so the component should ideally support both.

  This situation is complicated even further by the fact that Svelte does not support dynamic slot names,
  so some duplicate code appears to be inevitable.

  Given that the tailwind config does not change during runtime, it seems feasible to generate this component dynamically.
  Something that should probably be done in flowbite-svelte, though, rather than here.

  The approach taken is to render all of the filled slots with dynamic CSS based on the other filled slots,
  then remove the unused slots from the page as soon as the breakpoints are available.
-->
<script>
  import breakpoints, { breakpointsInitialized } from '$stores/breakpoints.mjs'

  const slotsBySize = ["sm", "md", "lg", "xl", "2xl"];
  let filledSlotsBySize;
  $: filledSlotsBySize = slotsBySize.filter((slotName) => {
    return !!$$slots[slotName];
  });
  let largestSlot;
  $: largestSlot = filledSlotsBySize[filledSlotsBySize.length - 1];
  let largestActiveSlot;
  $: largestActiveSlot = slotsBySize.filter((slotName) => {
      return (!!$$slots[slotName] && $breakpoints[slotName]);
  }).pop() || slotsBySize[0];
  const shouldRenderSlot = (slotName) => {
    return (!$breakpointsInitialized && $$slots[slotName]) || ($breakpointsInitialized && (largestActiveSlot === slotName));
  };
  let renderedSlots;
  $: renderedSlots = ($breakpoints, $$slots, Object.fromEntries(slotsBySize.map((slotName) => {
    return [slotName, shouldRenderSlot(slotName)];
  })));

  // CSS logic
  const prevSlot = (slotName) => {
    const slotIdx = filledSlotsBySize.indexOf(slotName);
    if(slotIdx === 0) {
      return null;
    } else {
      return filledSlotsBySize[slotIdx - 1];
    }
  };
  const nextSlot = (slotName) => {
    const slotIdx = filledSlotsBySize.indexOf(slotName);
    if(slotIdx === (filledSlotsBySize.length - 1)) {
      return null;
    } else {
      return filledSlotsBySize[slotIdx + 1];
    }
  };
  const classListForSlot = (slotName) => {
    if($breakpointsInitialized) return "inline";
    if(Object.keys($$slots).indexOf(slotName) === -1) return "hidden";
    let c = "";
    const next = nextSlot(slotName);
    const prev = prevSlot(slotName);
    if(!next && !prev) return c;
    if(!prev) {
      c += "inline ";
    } else {
      c += `hidden ${slotName}:inline `;
    }
    if(next) {
      c += `${next}:hidden`;
    }
    return c;
  };
</script>
<!-- This span ensures that all of the breakpoint classes we might need to use will be included in the build by Tailwind. -->
<span class="sm:hidden sm:inline md:hidden md:inline lg:inline lg:hidden xl:inline xl:hidden 2xl:inline 2xl:hidden" />
{#if Object.getOwnPropertyNames($$slots).length === 1}<!--
  --><slot name="sm" /><!--
  --><slot name="md" /><!--
  --><slot name="lg" /><!--
  --><slot name="xl" /><!--
  --><slot name="2xl" /><!--
-->{:else}<!--
  -->{#if renderedSlots.sm}<span class={classListForSlot("sm")}><slot name="sm" /></span>{/if}<!--
  -->{#if renderedSlots.md}<span class={classListForSlot("md")}><slot name="md" /></span>{/if}<!--
  -->{#if renderedSlots.lg}<span class={classListForSlot("lg")}><slot name="lg" /></span>{/if}<!--
  -->{#if renderedSlots.xl}<span class={classListForSlot("xl")}><slot name="xl" /></span>{/if}<!--
  -->{#if renderedSlots["2xl"]}<span class={classListForSlot("2xl")}><slot name="2xl" /></span>{/if}<!--
-->{/if}
