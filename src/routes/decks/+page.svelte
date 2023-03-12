<script>
  import SDHWriting from '$components/sdh-writing.svelte';
  import CardClarification from '$components/card-clarification.svelte';
  import decks from '$data/decklists.json'
  import DeckRow from '$routes/decks/deck-row.svelte'
  import breakpoints from '$stores/breakpoints.mjs'
  import Link from '$components/link.svelte'

  let expandedDeck = null;
  const expandDeck = (deck) => {
    if(deck.id === expandedDeck) {
      expandedDeck = null;
    } else {
      expandedDeck = deck.id;
    }
  };
  const deckClick = (deck) => {
    if(!$breakpoints.md) {
      window.location.href = deck.listUrl;
    } else {
      expandDeck(deck);
    }
  };

  let sortedDecks = decks.slice(0).sort((deck1, deck2) => {
    let name1 = deck1.name;
    let name2 = deck2.name;
    if(name1 > name2) return 1;
    if(name1 < name2) return -1;
    return 0;
  });
</script>
<!--TODO: When reloading the page, the footer flashes in the wrong spot (at the bottom of the table.) -->
<!--TODO: The avatar images flicker once when the page loads. -->
<!--TODO? Create system for showing little badges on the right side of the deck row like "New" or a little medal for winning a game on Youtube or something. -->
<svelte:head>
  <title>SDH Decklist Database</title>
  <meta name="description" content="A collection of interesting and/or representative decks of the SDH format in Magic: the Gathering." />
</svelte:head>
<SDHWriting lineLength="100ch">
  <span slot="title">SDH Decklist Database</span>
  <span class="text-xs dark:text-slate-700 mb-3">This is <em>heavily</em> inspired by the <Link href="https://cedh-decklist-database.com/">cEDH decklist database</Link>.</span>
  <!--
    We're not using Table here for two reasons:
    1. The flowbite-svelte Table component appears to have no native support for rounded corners, and faking it with a wrapper div poses the challenge of making the wrapper div highlight with the top/bottom cells.
    2. Expanding a row underneath the selected row to display deck details is difficult to apply a CSS animation to in the context of a flowbite-svelte Table.
  -->
  {#each sortedDecks as deck, i}
    <DeckRow deck={deck} first={i===0} last={i===(sortedDecks.length-1)} on:click={() => (deckClick(deck))} expanded={deck.id === expandedDeck} />
  {/each}
</SDHWriting>
