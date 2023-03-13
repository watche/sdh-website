<script>
  export let active = false;;
  export let animDuration = "1s";
  export let scale = 3;
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  const emitClick = () => {
    dispatch("click", {});
  };
</script>
<span class="self-center whitespace-nowrap dark:text-white rounded-md p-2 logo-area cursor-pointer select-none dark:bg-slate-800 dark:md:bg-inherit" data-active={active} on:click={emitClick} style={`--anim-duration: ${animDuration};`}>
  <svg width={`${scale*3}em`} height={`${scale}em`} version="1.1" viewBox="0 0 571 190" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="sdh-logo">
    <defs>
      <linearGradient id="ring-band-fade-pat" x1="190.4" x2="344" y1="71.539" y2="71.539" gradientTransform="matrix(1.3047 0 0 1 -48.394 -.80075)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#c87d00" offset="0" id="stop559" /><stop stop-color="#c87d00" stop-opacity="0" offset="1" id="stop561" />
      </linearGradient>
      <pattern id="ring-setting" x="0" y="0" width="194" height="194" patternUnits="userSpaceOnUse">
        <image x="0" y="0" width="194" height="194" xlink:href="/sdh-logo-setting.svg"></image>
      </pattern>
    </defs>
    <g transform="translate(0 71)" id="g774">
      <rect x="0" y="0" width="190.5" height="58" fill="#c87d00" opacity="1" stop-color="#000000" stroke-width="0" style="-inkscape-stroke:none;font-variation-settings:normal" id="ring-band" />
      <rect x="190.4" y="0" width="248.54" height="58" fill="url(#ring-band-fade-pat)" stop-color="#000000" stroke-width="0" style="-inkscape-stroke:none;font-variation-settings:normal" id="ring-band-fade" />
    </g>
    <circle cx="97" cy="97" r="97" fill="url(#ring-setting)" id="setting" data-active={active}></circle>
    <text y="0" x="0" id="sdh-logo-text" style="fill: currentcolor;">SDH</text>
  </svg>
</span>
<style>
  .logo-area[data-active="true"] {
    /* mimicking bg-slate-700 */
    background-color: rgb(51 65 85);
  }
  #sdh-logo {
    font-size: 16px;
  }
  #sdh-logo-text {
    font-size: 150px;
    transform: translateX(34%) translateY(154px);
    font-weight: 470;
  }

  #setting {
    transform-origin: 97px 97px;
    transform: rotate(0deg);
    transition: transform var(--anim-duration) ease-in-out;
  }

  #setting[data-active="true"] {
    transform-origin: 97px 97px;
    transform: rotate(240deg);
    transition: transform var(--anim-duration) ease-in-out;
  }
</style>
