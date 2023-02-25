<!--
  This component provides a consistent means for offering
  optional extra information to a piece of text. This is
  done using a popper.js (v2) popover. We adopt Popper's
  language for the "reference element" (the element to which
  the popover is attached), and use our own language for the 
  "clarification element" (the content inside of the popover).
-->
<script>
  import { getContext, onMount } from 'svelte'
  import { popoverKey } from '$components/sdh-writing.svelte'
  import { createPopper } from '@popperjs/core';
  import { Card } from 'flowbite-svelte'
  import clickOutside from 'svelte-outside-click'

  //// Setting up Popper
  let refEl;
  let clarifEl;
  onMount(() => {
    createPopper(refEl, clarifEl, {
      placement: 'left',
      modifiers: [{name:"offset", options: { offset: [0, 8] }}]
    });
  });

  //// Clarification visibility state machine
  // clarifState may be HIDDEN (invisible), HINTED (translucent), or SHOWN (fully visible).
  const HIDDEN = Symbol();
  const HINTED = Symbol();
  const SHOWN = Symbol();
  let clarifState = HIDDEN;
  let clarifStyling;

  // "Hint" used as a verb here
  const hintClarif = () => {
    clarifState = HINTED;
    visiblePopoverId.set(thisPopoverId);
  };
  const showClarif = () => {
    clarifState = SHOWN;
    visiblePopoverId.set(thisPopoverId);
  };
  const hideClarif = () => {
    if(!mouseOnClarif || clarifState === HINTED) {
      clarifState = HIDDEN;
    }
  };
  const toggleClarif = () => {
    // Toggling a hinted clarification will make it fully visible.
    if(clarifState === SHOWN) {
      if(mouseOnRef) {
        hintClarif();
      } else {
        hideClarif();
      }
    } else {
      showClarif();
    }
  }

  let mouseOnClarif = false;
  const clarifMouseover = () => { mouseOnClarif = true };
  const clarifMouseout = () => { mouseOnClarif = false };

  let mouseOnRef = false;
  const refMouseover = () => { mouseOnRef = true; };
  const refMouseout = () => { mouseOnRef = false; };

  //// Establishing exclusivity between clarifications
  // This exclusivity is very nearly achieved incidentally by the fact that 
  // clarifications hide themselves on outside click, meaning that clicking on another
  // clarification closes any that are open. This, though, prevents hint clarifications
  // from coexisting with shown clarifications.
  const thisPopoverId = Symbol();
  let visiblePopoverId = getContext(popoverKey);
  visiblePopoverId.subscribe((newVal) => {
    if(newVal !== thisPopoverId && clarifState !== HIDDEN) hideClarif();
  });

  //// Reactivity for the state machine
  $: if(mouseOnRef) {
    if(clarifState !== SHOWN) hintClarif();
  } else if(clarifState === HINTED) {
    hideClarif();
  }
  $: clarifStyling = {
    /*
      The popper is hidden with "Invisible" instead of "hidden" because preserving 
       the size of the popper content means that the popper will be in the 
       correct place when revealed without needing to force a popper update.
     */
    [HIDDEN]: "invisible opacity-100",
    [HINTED]: "visible opacity-80",
    [SHOWN]: "visible opacity-100",
  }[clarifState];
</script>
<span bind:this={refEl}>
  <span class="underline" on:mouseover={refMouseover} on:mouseout={refMouseout} on:click={toggleClarif} use:clickOutside={hideClarif}><slot /></span>
</span>
<span bind:this={clarifEl} on:mouseover={clarifMouseover} on:mouseout={clarifMouseout}>
  <Card class={clarifStyling}>
    <!-- TODO: Use <details> for SEO (must remove built-in styling) -->
    <div><slot name="clarification" /></div>
    <!--<div>Click to anchor</div>-->
  </Card>
</span>
