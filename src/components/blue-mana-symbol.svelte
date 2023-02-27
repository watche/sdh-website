<!-- SVG adapted from https://game-icons.net/1x1/lorc/drop.html at 2023-02-27T16:23:39.663Z. (Modified) -->
<script>
  import { Indicator } from 'flowbite-svelte'
  import { MANA_SYMBOL_SIZE } from '$constants/mana-symbol-size.mjs'
</script>
<Indicator class="bg-blue-300 dark:bg-blue-300" border size="xl">
  <svg style={MANA_SYMBOL_SIZE} class="enlarge" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path d="m255.19 33.08c-30.736 172.53-115.94 218.51-115.94 334.84 0 57.73 56.486 99.533 115.94 99.533 58.144 0 118.25-44.696 118.25-105.5 0-121.19-88.506-156.02-118.25-328.88zm58.281 217.09h2e-3c39.953 50.534 44.881 106.44 26.543 145.7-3.1184-1.1954-6.29-3.6953-9.4199-7.2324v0.0137c-15.138-13.314-19.306-19.665-22.906-46.465 6.0046-17.553 11.385-26.929 15.48-54.777l-2e-3 -0.0156c-1.9146-12.333-5.1068-24.824-9.6973-37.223zm17.125 138.47v-0.0684l-0.13867-0.10547c0.0465 0.053 0.0922 0.12129 0.13867 0.17383zm-3.834-4.873c0.43976 0.61572 0.88669 1.143 1.3301 1.7226z"/>
</svg>

</Indicator>
<style>
  .enlarge {
    transform: scale(1.2, 1.2);
  }
</style>
