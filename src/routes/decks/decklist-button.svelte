<script>
  export let deck;

  import { Button } from 'flowbite-svelte'
</script>
<Button color="purple" pill={true} href={deck.listUrl}>
  <span class="mr-2">Decklist</span>
  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <rect height="11.5" width="8.25" y="2.75" x="1.75"/>
    <path d="m10 3.75 4.25 2-4.25 7.5"/>
  </svg>
</Button>
