<script>
  import SDHWriting from '$components/sdh-writing.svelte';
  import Subheading from '$components/subheading.svelte'
  import Markdown from '$components/markdown.svelte'
  import CardClarification from '$components/card-clarification.svelte';
  import decks from '$data/decklists.json'
  import unpopulatedDeckCategories from '$data/decklist-categories.json'
  import DeckRow from '$routes/decks/deck-row.svelte'
  import breakpoints from '$stores/breakpoints.mjs'
  import Link from '$components/link.svelte'

  const deckCategories = unpopulatedDeckCategories.map((category) => {
    return {
      ...category,
      decks: category.deckIds.map((deckId) => {
        return decks.find((deck) => {
          return deck.id === deckId;
        });
      })
    };
  });

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
</script>
<!-- TODO: When reloading the page, the footer flashes in the wrong spot (at the bottom of the table.) -->
<!-- TODO: Move the breakpoint from md to lg (not currently supported by SDHWriting). -->
<!-- TODO? Create system for showing little badges on the right side of the deck row like "New" or a little medal for winning a game on Youtube or something. -->
<!-- The avatar images flicker once when the page loads in development, but not in production; this does not need to be fixed.. -->
<svelte:head>
  <title>SDH Decklist Database</title>
  <meta name="description" content="A collection of interesting and/or representative decks of the SDH format in Magic: the Gathering." />
</svelte:head>
<SDHWriting lineLength="100ch">
  <span slot="title">SDH Decklist Database</span>
  {#each deckCategories as category}
    <section>
      <Subheading>{category.name}</Subheading>
        <p><Markdown content={category.blurb} /></p>
        {#each category.decks as deck, i}
          <!--
            We're not using Table here for two reasons:
            1. The flowbite-svelte Table component appears to have no native support for rounded corners, and faking it with a wrapper div poses the challenge of making the wrapper div highlight with the top/bottom cells.
            2. Expanding a row underneath the selected row to display deck details is difficult to apply a CSS animation to in the context of a flowbite-svelte Table.
          -->
          <DeckRow deck={deck} first={i===0} last={i===(category.decks.length-1)} on:click={() => (deckClick(deck))} expanded={deck.id === expandedDeck} />
        {/each}
    </section>
    <br />
  {/each}
</SDHWriting>
