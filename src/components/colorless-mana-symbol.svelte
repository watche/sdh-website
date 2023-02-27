<script>
  import { Indicator } from 'flowbite-svelte'
  import { MANA_SYMBOL_SIZE } from '$constants/mana-symbol-size.mjs'
</script>
<Indicator class="bg-gray-300 dark:bg-gray-300" border size="xl">
  <svg class="enlarge" style={MANA_SYMBOL_SIZE} version="1.1" viewBox="10 35 210 200" xmlns="http://www.w3.org/2000/svg">
    <g stroke-width=".26458">
    <circle cx="37.505" cy="113.87" r=".045006" stroke="#000"/>
    <path d="m116.57 41.859c-18.371 40.786-45.385 73.598-91.267 91.267 29.985 12.916 60.07 29.828 91.267 91.267 16.241-46.097 51.836-70.802 91.267-91.267-40.592-21.035-74.617-48.132-91.267-91.267zm0.23934 23.175c13.135 32.72 37.262 53.555 67.495 67.495-36.634 15.061-53.355 40.26-67.495 67.495-12.991-34.745-35.722-55.547-67.495-67.495 30.719-13.188 55.031-33.623 67.495-67.495z"/>
    </g>
  </svg>
</Indicator>
<style>
  .enlarge {
    transform: scale(1.2, 1.2);
  }
</style>
