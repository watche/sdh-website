<!--
  Most of the complexity (and wrapper elements) comes from the fact that,
  when flipping a dual-faced card, the flipping animation needs to be continuous,
  but the change to the image (and the transformation that reflects the image) need to be instantaneous
  at the exact half-way point of that flipping animation.

  Also, the flip button shouldn't get affected by any of these transformations.

  TODO: Use an icon for the flip button instead of the text "Flip".
-->
<script>
  export let cardUrl;
  export let name;
  export let imageUrl;
  export let flippable = false;
  export let backSideImageUrl = "";
  export let rarity = null; // Unused
  export let artUrl = null; // Unused

  import Link from '$components/link.svelte'

  let cardImg = imageUrl;
  $: cardImg = (onBackSide?backSideImageUrl:imageUrl);

  let hasBackSide;
  $: hasBackSide = (backSideImageUrl !== "");

  let onBackSide = false;
  let upsideDown = false;
  const flipCard = () => {
    if(hasBackSide && flippable) throw new Error("Flippable MDFCs not supported by MtgCard.");
    if(hasBackSide) {
      onBackSide = !onBackSide;
    } else if(flippable) {
      upsideDown = !upsideDown;
    } else {
      throw new Error("Card flipped that isn't flippable, and has no back side.");
    }
  };
  let currentFlipClasses = "";
  $: currentFlipClasses = `${upsideDown?"upside-down":""} ${onBackSide?"reverse-face":""}`;
  let currentCSSVars; 
  $: currentCSSVars = `--obverse-face: url(${imageUrl}); ${hasBackSide?`--reverse-face: url(${backSideImageUrl});`:""}`;
</script>
<Link href={cardUrl} class="cursor-pointer" nofollow>
  <div id="flip-button-container">
    {#if flippable || (backSideImageUrl !== "") }
      <button id="flip-button" on:click|stopPropagation|preventDefault={flipCard}>Flip</button>
    {/if}
    <div id="card-container" class={currentFlipClasses} style={currentCSSVars}>
      <span id="card-img" class={currentFlipClasses} style={currentCSSVars} />
    </div>
  </div>
</Link>
<style>
  :root {
    --anim-duration: 0.2s;
    --half-anim-duration: 0.1s;
  }
  #flip-button-container {
    position: relative;
    aspect-ratio: 334 / 465;
    height: 465px;
    width: 334px;
  }
  #card-container {
    display: inline-block;
    aspect-ratio: 334 / 465;
    height: 465px;
    width: 334px;
    transform: rotate3d(0, 1, 1, 0turn);
    transition: transform var(--anim-duration) linear;
  }
  #card-container.reverse-face {
    transform: rotate3d(0, 1, 0, 0.5turn);
    transition: transform var(--anim-duration) linear;
  }
  #card-container.upside-down {
    transform: rotate3d(0, 0, 1, 0.5turn);
    transition: transform var(--anim-duration) linear;
  }
  #card-img {
    display: inline-block;
    aspect-ratio: 334 / 465;
    border-radius: 20px;
    height: 465px;
    width: 334px;
    transition: transform var(--half-anim-duration) steps(1), background-image var(--half-anim-duration) steps(1);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: var(--obverse-face);
  }
  #card-img.reverse-face {
    transform: scaleX(-1);
    transition: transform var(--half-anim-duration) steps(1), background-image var(--half-anim-duration) steps(1);
    background-image: var(--reverse-face);
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
</style>
