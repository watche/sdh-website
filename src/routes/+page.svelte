<script>
  import Constitution from '$routes/constitution/+page.svelte'
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte'
  import WhiteManaSymbol from '$components/white-mana-symbol.svelte'
  import RedManaSymbol from '$components/red-mana-symbol.svelte'
</script>
<svelte:head>
  <title>SDH</title>
  <!-- This could stand some improvement; ideally the description would at least kind of explain what SDH is. -->
  <meta name="description" content="Welcome to Spousal Dragon Highlanders: The Johnniest format in Magic!" />
</svelte:head>
<BlueManaSymbol />
<WhiteManaSymbol />
<RedManaSymbol />
<Constitution />
