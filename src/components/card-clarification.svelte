<script>
  export let cardUrl;
  export let imageUrl;
  export let name;

  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
</script>
<span class="hidden md:inline">
  <Clarification>
    <slot />
    <MtgCard slot="clarification" {...$$props} />
  </Clarification>
</span>
<span class="inline md:hidden">
  <a class="underline cursor-pointer" href={cardUrl} rel="noopener noreferrer" target="_blank" on:click|stopPropagation={()=>{}}><slot /></a>
</span>
