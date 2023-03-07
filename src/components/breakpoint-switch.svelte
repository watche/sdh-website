<script>
  import breakpoints, { breakpointsInitialized } from '$stores/breakpoints.mjs'
  const slotsBySize = ["2xl", "xl", "lg", "md", "sm"];

  let filledSlotsBySize;
  $: filledSlotsBySize = slotsBySize.filter((slotName) => {
    return !!$$slots[slotName];
  });
  let largestSlot;
  $: largestSlot = filledSlotsBySize[0];
  let largestActiveSlot;
  $: largestActiveSlot = slotsBySize.filter((slotName) => {
      return (!!$$slots[slotName] && $breakpoints[slotName]);
  })[0] || "sm";

  const classListForSlot = (slotName) => {
    if(filledSlotsBySize.length === 1) return "inline";
    const slotIdx = filledSlotsBySize.indexOf(slotName);
    if(slotIdx === (filledSlotsBySize.length - 1)) {// If slotName is the smallest filled slot...
      return `inline ${filledSlotsBySize[slotIdx-1]}:hidden`;
    }
    if(slotIdx === 0) {// If slotName is the largest filled slot...
      return `hidden ${slotName}:inline`;
    }
    return `hidden ${slotName}:max-${filledSlotsBySize[slotIdx - 1]}:inline`;
  };
</script>
{#if !$breakpointsInitialized}
  {#if !!$$slots.sm}
    <span class={classListForSlot("sm")}>
      <slot name="sm" />
    </span>
  {/if}
  {#if !!$$slots.md}
    <span class={classListForSlot("md")}>
      <slot name="md" />
    </span>
  {/if}
  {#if !!$$slots.lg}
    <span class={classListForSlot("lg")}>
      <slot name="lg" />
    </span>
  {/if}
  {#if !!$$slots.xl}
    <span class={classListForSlot("xl")}>
      <slot name="xl" />
    </span>
  {/if}
  {#if !!$$slots["2xl"]}
    <span class={classListForSlot("2xl")}>
      <slot name="2xl" />
    </span>
  {/if}
{:else}
  {#if largestActiveSlot === "sm"}
    <slot name="sm" />
  {/if}
  {#if largestActiveSlot === "md"}
    <slot name="md" />
  {/if}
  {#if largestActiveSlot === "lg"}
    <slot name="lg" />
  {/if}
  {#if largestActiveSlot === "xl"}
    <slot name="xl" />
  {/if}
  {#if largestActiveSlot === "2xl"}
    <slot name="2xl" />
  {/if}
{/if}
