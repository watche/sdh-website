<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, Avatar, List, Li, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import SDHWriting from '$components/sdh-writing.svelte';
  import CardClarification from '$components/card-clarification.svelte';
  import decks from '$data/decklists.json'
  import DeckRow from '$routes/decks/deck-row.svelte'

  let expandedDeck = null;
  const deckClick = (deck) => {
    if(deck.id === expandedDeck) {
      expandedDeck = null;
    } else {
      expandedDeck = deck.id;
    }
  };
  const gotoDeck = (deck) => {
    window.location.href = deck.listUrl;
  };
</script>
<svelte:head>
  <title>SDH Decklist Database</title>
  <meta name="description" content="A collection of interesting and/or representative decks of the SDH format in Magic: the Gathering." />
</svelte:head>
<SDHWriting lineLength="100ch">
  <span slot="title">SDH Decklist Database</span>
  <span class="text-xs dark:text-slate-700 mb-3">This is <em>heavily</em> inspired by the <a class="underline" target="_blank" rel="noopener noreferrer" href="https://cedh-decklist-database.com/">cEDH decklist database</a>.</span>
  <!--
    We're not using Table here for two reasons:
    1. The flowbite-svelte Table component appears to have no native support for rounded corners, and faking it with a wrapper div poses the challenge of making the wrapper div highlight with the top/bottom cells.
    2. Expanding a row underneath the selected row to display deck details is difficult to apply a CSS animation to in the context of a flowbite-svelte Table.
  -->
  <div class="hidden md:block">
    {#each decks as deck, i}
      <DeckRow deck={deck} first={i===0} last={i===(decks.length-1)} on:click={() => (deckClick(deck))} expanded={deck.id === expandedDeck} />
    {/each}
  </div>
  <div class="block md:hidden">
    {#each decks as deck, i}
      <DeckRow deck={deck} first={i===0} last={i===(decks.length-1)} on:click={() => (gotoDeck(deck))} expanded={deck.id === expandedDeck} />
    {/each}
  </div>
</SDHWriting>
