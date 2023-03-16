<script>
  export let card;
  export let explanation = "";

  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import Markdown from '$components/markdown.svelte'
</script>
<Clarification>
  {card.name}
  <span slot="clarification">
    <div class="font-bold text-white">Card:</div>
    <div><MtgCard {...card} /></div>
    {#if explanation.length > 0}
      <br />
      <div class="font-bold text-white">Rationale:</div>
      <Markdown content={explanation} />
    {/if}
  </span>
</Clarification>
