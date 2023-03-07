<script>
  export let deck;
  import Link from '$components/link.svelte'
</script>
<!-- The class list for this link comes from copying a flowbite-svelte button with pill and color="purple". -->
<Link href={deck.listUrl} class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-full">
  <span class="mr-2">Decklist</span>
  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <rect height="11.5" width="8.25" y="2.75" x="1.75"/>
    <path d="m10 3.75 4.25 2-4.25 7.5"/>
  </svg>
</Link>
