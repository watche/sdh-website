<!-- TODO? Animate the clarification? -->
<script>
  import { Card } from 'flowbite-svelte'
  import QuestionMarkIcon from '$components/question-mark-icon.svelte'
  let expanded = false;
</script>
<span on:click={() => {expanded = !expanded;}}>
  <span class="underline"><slot /><span class="ml-1"><QuestionMarkIcon /></span></span>
</span>
{#if expanded}
<Card>
  <slot name="clarification" />
</Card>
{/if}
