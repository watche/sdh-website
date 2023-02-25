<script>
  export let multiverseId;
  export let name;
  export let imageUrl;
  // While it is in principle possible to compute the imageUrl for
  // the Gatherer page from  the multiverseId, we store it explicitly 
  // because the images from Gatherer are too small, and some cards
  // may not (need to) be cached.

  let gathererUrl = `https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=${multiverseId}`;
</script>
<a href={gathererUrl} target="_blank" rel="noopener noreferrer" class="cursor-pointer"><img style="border-radius: 20px" alt={name} src={imageUrl} /></a>
