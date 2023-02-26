<script>
  export let cardUrl;
  export let name;
  export let imageUrl;
</script>
<a href={cardUrl} target="_blank" rel="noopener noreferrer" class="cursor-pointer"><img style="border-radius: 20px" alt={name} src={imageUrl} /></a>
