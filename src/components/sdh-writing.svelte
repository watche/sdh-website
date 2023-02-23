<!-- 
  This component encapsulates the formatting for documents regarding SDH.
  It's named `SDHWriting` using "writing" as a noun. The "clean" words for this
  would have been "document" or "page", but given that the web was initially
  conceptualized as a network of document repositories, it stands to reason that
  no clean name would be available.

  The goals of this layout are as follow:
  1. To restrict text to an appropriate line length.
  2. To mostly center the text (with a small bias toward the left-hand side of the screen)
-->
<div class="hidden md:inline">
  <article class="left-margin">
    <h2 class="text-6xl text-white mb-3"><slot name="title" /></h2>
    <div class="mx-auto">
      <div class="length-limited">
        <slot />
      </div>
    </div>
  </article>
</div>
<div class="inline md:hidden">
  <h2 class="text-6xl text-white mb-3"><slot name="title" /></h2>
  <slot />
</div>
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
