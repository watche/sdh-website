<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, Avatar, List, Li, Listgroup, ListgroupItem } from 'flowbite-svelte';
  import SDHWriting from '$components/sdh-writing.svelte';
  import WhiteManaSymbol from '$components/white-mana-symbol.svelte';
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte';
  import BlackManaSymbol from '$components/black-mana-symbol.svelte';
  import RedManaSymbol from '$components/red-mana-symbol.svelte';
  import GreenManaSymbol from '$components/green-mana-symbol.svelte';
  import ColorlessManaSymbol from '$components/colorless-mana-symbol.svelte';
  import CardClarification from '$components/card-clarification.svelte';
  import decks from '$data/decklists.json'
  import Markdown from '$components/markdown.svelte'

  /*const colorForRarity = (rarity) => {
    return {
      [COMMON]: "black",
      [UNCOMMON]: "gray",
      [RARE]: "yellow",
      [MYTHIC]: "red",
      [SPECIAL]: "purple",
    }[rarity];
  }*/
  let expandedDeck = null;
  const rowClick = (deck) => {
    if(expandedDeck === deck.id) {
      expandedDeck = null;
    } else {
      expandedDeck = deck.id;
    }
  };
  const symbolComponentForLetter = (letter) => {
    return {
      "W": WhiteManaSymbol,
      "U": BlueManaSymbol,
      "B": BlackManaSymbol,
      "R": RedManaSymbol,
      "G": GreenManaSymbol,
      "c": ColorlessManaSymbol,
    }[letter];
  };
</script>
<svelte:head>
  <title>SDH Decklist Database</title>
  <meta name="description" content="A collection of interesting and/or representative decks of the SDH format in Magic: the Gathering." />
</svelte:head>
<!-- TODO: Modify SDHWriting to enable custom width -->
<SDHWriting lineLength="100ch">
  <span slot="title">SDH Decklist Database</span>
  <span class="text-xs dark:text-slate-700">Yes, this is based on the <a class="underline" target="_blank" rel="noopener noreferrer" href="https://cedh-decklist-database.com/">cEDH decklist database</a>.</span>
  <div class="py-1 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-md">
    <Table divClass="relative rounded-md" hoverable={true}>
      <TableBody>
        {#each decks as deck, i}
          <TableBodyRow on:click={() => rowClick(deck)} class="cursor-pointer select-none">
            <TableBodyCell>
              <div class="flex items-center">
                {#each deck.commanders as commander}
                  <!-- For indicating rarity:  dot={{color: colorForRarity(commander.rarity), size:"lg", placement:"bottom-right"}} -->
                  <!-- Currently does not overlap the commander Avatar, and causes the image to shrink and deform. -->
                  <!-- TODO: Add rarity indicator to commanders -->
                  <span class="pr-1">
                    <!-- Clarifications are bounded to the inside of the table, so the whole card is not visible. -->
                    <!-- TODO: Would ideally be off to the side of the table anyway. -->
                    <CardClarification cardUrl={commander.cardUrl} imageUrl={commander.imageUrl} name={commander.name}>
                      <Avatar src={commander.artUrl} />
                    </CardClarification>
                  </span>
                {/each}
                <!--
                {#each deck.colors.split("").map(symbolComponentForLetter) as colorComp}
                  <svelte:component this={colorComp} />
                {/each}
                -->
              </div>
            </TableBodyCell>
            <TableBodyCell>{deck.name}</TableBodyCell>
          </TableBodyRow>
          {#if expandedDeck === deck.id}
            <TableBodyRow>
              <TableBodyCell colspan="2" tdClass="px-6 py-4 font-medium bg-slate-900">
                <div class="flex">
                  <Listgroup class="w-48 shrink-0">
                    <ListgroupItem class="items-center !pt-1">
                      <!-- TODO: Figure out why the Green and Black mana symbols are very subtly lower in the box -->
                      Colors: 
                      {#each deck.colors.split("").map(symbolComponentForLetter) as colorComp}
                        <svelte:component this={colorComp} />
                      {/each}
                    </ListgroupItem>
                    <ListgroupItem>
                      Strategy: {deck.strategy}
                    </ListgroupItem>
                    <ListgroupItem>
                      <a href={deck.listUrl} class="underline">
                        Decklist
                      </a>
                    </ListgroupItem>
                  </Listgroup>
                  <div class="ml-5 dark:text-slate-300">
                    <Markdown content={deck.blurb} />
                  </div>
              </TableBodyCell>
            </TableBodyRow>
          {/if}
        {/each}
      </TableBody>
    </Table>
  </div>
</SDHWriting>
