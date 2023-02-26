<script>
  export let ban;

  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
</script>
<Clarification>
  <span slot="clarification">
    <div class="bold">Banned Card:</div>
    <div><MtgCard {...ban.card} /></div>
    <br />
    <div class="bold">Ban Rationale:</div>
    {ban.rationale}
  </span>{ban.card.name}
</Clarification>

