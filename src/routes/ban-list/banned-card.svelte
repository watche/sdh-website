<script>
  export let ban;

  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import Markdown from '$components/markdown.svelte'
</script>
<Clarification>
  {ban.card.name}
  <span slot="clarification">
    <div class="font-bold text-white">Banned Card:</div>
    <div><MtgCard {...ban.card} /></div>
    <br />
    <div class="font-bold text-white">Ban Rationale:</div>
    <Markdown content={ban.rationale} />
  </span>
</Clarification>

