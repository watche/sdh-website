<script>
  export let cardUrl;
  export let name;
  export let imageUrl;

  import Link from '$components/link.svelte'
</script>
<Link href={cardUrl} class="cursor-pointer" nofollow><img style="border-radius: 20px" alt={name} src={imageUrl} /></Link>
