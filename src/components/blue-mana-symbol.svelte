<!-- SVG adapted from https://game-icons.net/1x1/lorc/drop.html at 2023-02-27T16:23:39.663Z. (Modified) -->
<script>
  import { Indicator } from 'flowbite-svelte'
  import { MANA_SYMBOL_SIZE } from '$constants/mana-symbol-size.mjs'
</script>
<Indicator class="bg-blue-500 dark:bg-blue-500" border size="xl">
  <svg style={MANA_SYMBOL_SIZE} class="flip-and-enlarge" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g class="" transform="translate(0)" style="">
    <path transform="translate(512) scale(-1 1) rotate(0 256 256)" d="m263.84 40.344c-29.744 172.86-118.25 207.69-118.25 328.88 0 60.804 60.106 105.5 118.25 105.5 59.45 0 115.94-41.803 115.94-99.533 0-116.33-85.2-162.31-115.94-334.84zm-58.28 217.09c-27.963 75.53-5.105 154.57 54.25 179.38 15.185 6.348 31.724 7.714 47.905 6.28-116.13 49.787-185.84-79.816-102.16-185.66z"/>
    </g>
  </svg>
</Indicator>
<style>
  .flip-and-enlarge {
    transform: scale(1.2, 1.2);
  }
</style>
