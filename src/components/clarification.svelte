<!--
  This component provides a consistent means for offering
  optional extra information to a piece of text. This is
  done using a Floating UI popover. We adopt their language
  for the "reference element" (the element to which the popover
  is attached), and use our own language for the 
  "clarification element" (the content inside of the popover).

  TODO:
  The behavior for hovering over the reference element may need to 
  changed; it's unintuitive that a clicked clarification vanishes when hovering
  over a dormant clarification reference. 
-->
<script>
  import { getContext, onMount, onDestroy } from 'svelte'
  import { popoverKey } from '$components/sdh-writing.svelte'
  import {computePosition, autoUpdate, shift, limitShift, flip, offset} from '@floating-ui/dom';
  import { Card } from 'flowbite-svelte'
  import { clickOutside } from '$actions/click-outside.mjs'

  //// Setting up the popover
  let refEl;
  let clarifEl;
  let popoverCleanupFn;
  onMount(() => {
    popoverCleanupFn = autoUpdate(refEl, clarifEl, () => {
      computePosition(refEl, clarifEl, {
        placement: 'left',
        middleware: [
          flip(),
          shift({limiter: limitShift()}),
          offset(8)
        ],
      }).then(({x, y}) => {
        Object.assign(clarifEl.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  });
  onDestroy(() => {
    if(popoverCleanupFn) popoverCleanupFn();
  });

  //// Clarification visibility state machine
  // clarifState may be HIDDEN (invisible), HINTED (translucent), or SHOWN (fully visible).
  const HIDDEN = Symbol();
  const HINTED = Symbol();
  const SHOWN = Symbol();
  let clarifState = HIDDEN;

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
  let clarifStyling;
  let clarifZIndex;
  $: if(mouseOnRef) {
    if(clarifState !== SHOWN) hintClarif();
  } else if(clarifState === HINTED) {
    hideClarif();
  }
  $: clarifStyling = {
    [HIDDEN]: "floating below-content hidden opacity-100",
    [HINTED]: "floating over-content visible opacity-80",
    [SHOWN]: "floating over-hinted-clarifs visible opacity-100",
  }[clarifState];
</script>
<span bind:this={refEl}>
  <span class="underline" on:mouseover={refMouseover} on:mouseout={refMouseout} on:click|stopPropagation={toggleClarif} on:use:clickOutside={hideClarif}><slot /></span>
</span>
<div bind:this={clarifEl} class={clarifStyling} on:mouseover={clarifMouseover} on:mouseout={clarifMouseout}>
  <Card>
    <!-- TODO: Use <details> for SEO (must remove built-in styling) -->
    <div><slot name="clarification" /></div>
    <!-- May also need some affordance to let users know how to use the popover more intuitively. -->
  </Card>
</div>
<style>
  .floating {
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
  }

  .over-content {
    z-index: 8999;
  }
  
  .over-hinted-clarifs {
    z-index: 9000;
  }
  .below-content {
    z-index: -1;
  }
</style>
