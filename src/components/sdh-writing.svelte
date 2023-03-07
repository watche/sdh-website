<!-- 
  This component encapsulates the formatting for documents regarding SDH.
  It's named `SDHWriting` using "writing" as a noun. The "clean" words for this
  would have been "document" or "page", but given that the web was initially
  conceptualized as a network of document repositories, it stands to reason that
  no clean name would be available.
  
  Documents about SDH necessarily contain many clarifications and card references
  that require a popover to display the extra (optional) information. The ideal
  place to display this information on large screens (the primary audience 
  for this site) would be in the large margins on either side of the text.
  This makes this component considerably more complicated, as the content of the
  popovers would ideally be specified in a slot, but this component has no way to
  know what belongs in that slot, and managing that state in the parent component
  is very messy.

  The goals of this layout are as follow:
  1. To restrict text to an appropriate line length.
  2. To mostly center the text (with a small bias toward the left-hand side of the screen)
-->
<script>
  export let lineLength = "70ch";

  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { Card } from 'flowbite-svelte'
  import breakpoints from '$stores/breakpoints.mjs'
</script>
{#if $breakpoints.md }
  <div style={`--line-length: ${lineLength};`}>
    <article class="left-margin">
      <h2 class="text-6xl text-white mb-3"><slot name="title" /></h2>
      <div class="mx-auto">
        <div class="length-limited">
          <slot />
        </div>
      </div>
    </article>
  </div>
{:else}
  <h2 class="text-6xl text-white mb-3"><slot name="title" /></h2>
  <span class="text-md">
    <slot />
  </span>
{/if}
<style>
  /* These constants are chosen completely arbitrarily, and are not depended upon outside of this file. */
  :root {
    --leftward-bias: 5%;
    --line-length: 70ch;
  }
  .left-margin {
    margin-left: calc(50% - (var(--line-length) / 2) - var(--leftward-bias));
  }
  .length-limited {
    max-width: calc(var(--line-length) + var(--leftward-bias));
  }
</style>
