<script>
  export let deck;
  import Link from '$components/link.svelte'
  import CardsIcon from '$components/cards-icon.svelte'
</script>
<!-- The class list for this link comes from copying a flowbite-svelte button with pill and color="purple". -->
<Link href={deck.listUrl} class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-full">
  <span class="mr-2">Decklist</span>
  <CardsIcon width="1.5em" height="1.5em" />
</Link>
