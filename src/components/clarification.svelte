<!--
  This component provides a consistent means for offering
  optional extra information to a piece of text. This is
  done using a Floating UI popover. We adopt their language
  for the "reference element" (the element to which the popover
  is attached), and use our own language for the 
  "clarification element" (the content inside of the popover).
-->
<!--
  This component has two known (minor) bugs:
  1. In development, ref text directly next to other text will briefly has a space inserted between the ref and the other text.
     I believe this happens because of the HTML comments (indicating components) injected by the dev server.
     This does not happen in production.
  2. If the page is loaded with the cursor on a refEl, and the cursor is not moved, and the cursor is clicked before
     the popover is initialized, that click is not detected.
<!-- 
  This module has no exports; it uses module context to coordinate popover state between component instances.
-->
<script context="module">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  // While these values could be given their own files in $constants,
  // they're only meaningful in the context established by this module.
  const POPOVER_STORE_KEY = Symbol("POPOVER_STORE_KEY");
  const NO_CLARIF = Symbol("NO_CLARIF");

  // clarifStore contains the ID symbol of the currently `SHOWN` clarif, or NO_CLARIF if none are `SHOWN`.
  // `HINTED` clarifs are not tracked by this system.
  const clarifStore = writable(NO_CLARIF);
  clarifStore.release = (id) => {
    if(visibleClarif === id) {
      clarifStore.set(NO_CLARIF);
    }
  };
  let visibleClarif = NO_CLARIF;
  clarifStore.subscribe((newVal) => {
    visibleClarif = newVal;
  });
</script>
<script>
  import { getContext, onMount, onDestroy } from 'svelte'
  import { computePosition, autoUpdate, shift, limitShift, flip, offset } from '@floating-ui/dom';
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

        clarifState = HIDDEN;
        updateClarif();
      });
    });
  });
  onDestroy(() => {
    if(popoverCleanupFn && !!refEl && !!clarifEl) popoverCleanupFn();
  });

  //// Clarification visibility state machine
  // clarifState may be HIDDEN (invisible), HINTED (translucent), or SHOWN (fully visible).
  // It starts UNINITIALIZED because floating-ui takes a noticeable amount of time to take effect,
  // and the Clarification element should not influence the flow of the page before that time.
  const HIDDEN = Symbol("HIDDEN");
  const HINTED = Symbol("HINTED");
  const SHOWN = Symbol("SHOWN");
  const UNINITIALIZED = Symbol("UNINITIALIZED");
  let clarifState = UNINITIALIZED;

  // "Hint" used as a verb here
  const hintClarif = () => {
    clarifState = HINTED;
  };
  const showClarif = () => {
    clarifState = SHOWN;
  };
  const hideClarif = () => {
    clarifState = HIDDEN;
  };
  const updateClarif = () => {
    // Any state changes that require an update will be handled immediately after initialization.
    if(clarifState === UNINITIALIZED) return;
    if(visibleClarif === thisClarif) {
      showClarif();
    } else {
      if(mouseOnRef && (visibleClarif === NO_CLARIF)) {
        hintClarif();
      } else {
        hideClarif();
      }
    }
  };
  const toggleClarif = () => {
    // Toggling a hinted clarification will make it fully visible.
    if(visibleClarif === thisClarif) {
      clarifStore.set(NO_CLARIF);
    } else {
      clarifStore.set(thisClarif);
    }
  };

  let mouseOnClarif = false;
  const clarifMouseover = () => { mouseOnClarif = true; };
  const clarifMouseout = () => { mouseOnClarif = false; };

  let mouseOnRef = false;
  const refMouseover = () => { mouseOnRef = true; };
  const refMouseout = () => { mouseOnRef = false; };

  const outClick = () => {
    if(visibleClarif === thisClarif) {
      clarifStore.release(thisClarif);
    }
  };

  //// Establishing exclusivity between clarifications
  // This exclusivity is very nearly achieved incidentally by the fact that 
  // clarifications hide themselves on outside click, meaning that clicking on another
  // clarification closes any that are open. This, though, prevents hint clarifications
  // from coexisting with shown clarifications.
  const thisClarif = Symbol();
  clarifStore.subscribe((newClarif) => {
    updateClarif();
  });

  //// Reactivity for the state machine
  let clarifClasses;
  let clarifZIndex;
  $: (mouseOnRef, updateClarif());
  $: clarifClasses = {
    [HIDDEN]: "floating below-content hidden opacity-100",
    [HINTED]: "floating over-content visible opacity-80",
    [SHOWN]: "floating over-hinted-clarifs visible opacity-100",
    [UNINITIALIZED]: "hidden",
  }[clarifState];

</script>
<span on:outclick={outClick} use:clickOutside>
  <span bind:this={refEl}>
    <span class="ref" on:mouseover={refMouseover} on:focus={refMouseover} on:blur={refMouseout} on:mouseout={refMouseout} on:click|stopPropagation={toggleClarif}><slot /></span>
  </span>
  <span bind:this={clarifEl} class={clarifClasses} on:mouseover={clarifMouseover} on:mouseout={clarifMouseout} on:focus={clarifMouseover} on:blur={clarifMouseout}>
    {#if clarifState !== UNINITIALIZED}
    <Card>
      <!-- TODO: Use <details> for SEO (must remove built-in styling) -->
      <div><slot name="clarification" /></div>
      <!-- May also need some affordance to let users know how to use the popover more intuitively. -->
    </Card>
    {/if}
  </span>
</span>
<style>
  /* Imitating `underline cursor-pointer select-none` in tailwind. */
  .ref {
    text-decoration-line: underline;
    cursor: pointer;
    user-select: none;
  }
  /* Imitating text-gray-300 in tailwind. */
  .ref:hover {
    color: rgb(209 213 219);
  }
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
