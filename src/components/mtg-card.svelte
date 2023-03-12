<script>
  export let cardUrl;
  export let name;
  export let imageUrl;
  export let flippable = false;
  export let backSideImageUrl = "";

  import Link from '$components/link.svelte'

  let flipped = false;
  const flipCard = () => {
    flipped = !flipped;
  };
</script>
<Link href={cardUrl} class="cursor-pointer" nofollow>
  <span id="card-container">
    {#if flippable}
      <button id="flip-button" on:click|stopPropagation|preventDefault={flipCard} >Flip</button>
    {/if}
    <img id="card-img" style="aspect-ratio: 334 / 465; border-radius: 20px;" height="465px" width="334px" alt={name} src={imageUrl} class={`${flipped?"flipped":""}`} />
  </span>
</Link>
<style>
  #card-container {
    position: relative;
  }
  #flip-button {
    position: absolute;
    top: calc(50% - 1rem);
    left: -1rem;
    z-index: 3;
    background-color: #00000099;
    border-radius: 50%;
    color: white;
    border: 1px white solid;
    padding: 1rem;
  }
  #card-img {
    transform: rotate(0turn);
    transition: transform 0.3s ease-out;
  }
  #card-img.flipped {
    transform: rotate(0.5turn);
    transition: transform 0.3s ease-out;
  }
</style>
