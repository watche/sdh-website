<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, Avatar } from 'flowbite-svelte';
  import SDHWriting from '$components/sdh-writing.svelte';
  import WhiteManaSymbol from '$components/white-mana-symbol.svelte';
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte';
  import BlackManaSymbol from '$components/black-mana-symbol.svelte';
  import RedManaSymbol from '$components/red-mana-symbol.svelte';
  import GreenManaSymbol from '$components/green-mana-symbol.svelte';
  import ColorlessManaSymbol from '$components/colorless-mana-symbol.svelte';
  import CardClarification from '$components/card-clarification.svelte';

  const COMMON = Symbol();
  const UNCOMMON = Symbol();
  const RARE = Symbol();
  const MYTHIC = Symbol();
  const SPECIAL = Symbol();
  const decks = [
    {
      "id": Symbol(),
      "name": "Vannifar Pod-Jiki",
      "listUrl": "https://www.moxfield.com/decks/W9MWFO4zlU6kXW7kiE0T0A",
      "blurb": "Lorem Ipsum Et Cetera",
      "colors": "RUG",
      "commanders": [
        {
          "cardUrl": "https://scryfall.com/card/rna/195/prime-speaker-vannifar",
          "imageUrl": "https://cards.scryfall.io/large/front/8/4/84abfc59-10a7-4cb5-9cdd-81797116c810.jpg?1572893948",
          "name": "Prime Speaker Vannifar",
          "artUrl": "https://cards.scryfall.io/art_crop/front/8/4/84abfc59-10a7-4cb5-9cdd-81797116c810.jpg?1572893948",
          "rarity": MYTHIC
        },
        {
          "cardUrl": "https://scryfall.com/card/cmr/197/rograkh-son-of-rohgahh",
          "imageUrl": "https://cards.scryfall.io/large/front/a/4/a4fab67f-00c2-4125-9262-d21a29411797.jpg?1644853041",
          "name": "Rograkh, Son of Rohgahh",
          "artUrl": "https://cards.scryfall.io/art_crop/front/a/4/a4fab67f-00c2-4125-9262-d21a29411797.jpg?1644853041",
          "rarity": UNCOMMON
        }
      ]
    },
    {
      "id": Symbol(),
      "name": "Tergrid-Gretchen Midrange",
      "listUrl": "https://www.moxfield.com/decks/clpbUIhZTUGqNO4sDnPJ-w/primer",
      "blurb": "Lorem Ipsum Et Cetera",
      "colors": "BGU",
      "commanders": [
        {
          "cardUrl": "https://scryfall.com/card/khm/112/tergrid-god-of-fright-tergrids-lantern",
          "imageUrl": "https://cards.scryfall.io/large/front/a/4/a4fab67f-00c2-4125-9262-d21a29411797.jpg?1644853041",
          "name": "Tergrid, God of Fright",
          "artUrl": "https://cards.scryfall.io/art_crop/front/1/4/14dc88ee-bba9-4625-af0d-89f3762a0ead.jpg?1631048621",
          "rarity": RARE
        },
        {
          "cardUrl": "https://scryfall.com/card/afr/223/gretchen-titchwillow",
          "imageUrl": "https://cards.scryfall.io/large/front/3/c/3c8b248e-1460-4650-9721-85c134c21b89.jpg?1627708954",
          "name": "Gretchen Titchwillow",
          "artUrl": "https://cards.scryfall.io/art_crop/front/3/c/3c8b248e-1460-4650-9721-85c134c21b89.jpg?1627708954",
          "rarity": UNCOMMON
        }
      ]
    },
    {
      "id": Symbol(),
      "name": "KEDISS-19",
      "listUrl": "https://www.moxfield.com/decks/4wHILZYVzEqr7Q20LtPW0g",
      "blurb": "Lorem Ipsum Et Cetera",
      "colors": "RB",
      "commanders": [
        {
          "cardUrl": "https://scryfall.com/card/2xm/107/skithiryx-the-blight-dragon",
          "imageUrl": "https://cards.scryfall.io/large/front/c/a/cab61c7e-e00a-413b-a0b5-7718b479582f.jpg?1599705958",
          "name": "Skithiryx, the Blight Dragon",
          "artUrl": "https://cards.scryfall.io/art_crop/front/c/a/cab61c7e-e00a-413b-a0b5-7718b479582f.jpg?1599705958",
          "rarity": MYTHIC
        },
        {
          "cardUrl": "https://scryfall.com/card/cmr/188/kediss-emberclaw-familiar",
          "imageUrl": "https://cards.scryfall.io/large/front/f/6/f606ebf1-483d-4331-b16a-9fb6f591a39f.jpg?1608910296",
          "name": "Kediss, Emberclaw Familiar",
          "artUrl": "https://cards.scryfall.io/art_crop/front/f/6/f606ebf1-483d-4331-b16a-9fb6f591a39f.jpg?1608910296",
          "rarity": UNCOMMON
        }
      ]
    },
    {
      "id": Symbol(),
      "name": "Budget TNT",
      "listUrl": "https://www.moxfield.com/decks/sEVSdzzJsE-IUMp0HnZQMQ",
      "blurb": "Lorem Ipsum Et Cetera",
      "colors": "WUG",
      "commanders": [
        {
          "cardUrl": "https://scryfall.com/card/slx/16/tadeas-juniper-ascendant",
          "imageUrl": "https://cards.scryfall.io/large/front/e/b/eb79f973-2384-4de4-81fb-14ba5a0e5556.jpg?1677353914",
          "name": "Tadeas, Juniper Ascendant",
          "artUrl": "https://cards.scryfall.io/art_crop/front/e/b/eb79f973-2384-4de4-81fb-14ba5a0e5556.jpg?1677353914",
          "rarity": RARE
        }, {
          "cardUrl": "https://scryfall.com/card/afr/223/gretchen-titchwillow",
          "imageUrl": "https://cards.scryfall.io/large/front/3/c/3c8b248e-1460-4650-9721-85c134c21b89.jpg?1627708954",
          "name": "Gretchen Titchwillow",
          "artUrl": "https://cards.scryfall.io/art_crop/front/3/c/3c8b248e-1460-4650-9721-85c134c21b89.jpg?1627708954",
          "rarity": UNCOMMON
        }
      ]
    }
  ];

  const colorForRarity = (rarity) => {
    return {
      [COMMON]: "black",
      [UNCOMMON]: "gray",
      [RARE]: "yellow",
      [MYTHIC]: "red",
      [SPECIAL]: "purple",
    }[rarity];
  }
  let expandedDeck = null;
  const rowClick = (deck) => {
    console.log(deck.id);
    if(expandedDeck === deck.id) {
      expandedDeck = null;
    } else {
      console.log("assigning");
      expandedDeck = deck.id;
    }
    console.log(deck.id === expandedDeck);
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
<SDHWriting>
  <span slot="title">SDH Decklist Database</span>
  <span class="text-xs dark:text-slate-700">Yes, this is a ripoff of the cEDH decklist database.</span>
  <Table hoverable={true}>
    <TableBody>
      {#each decks as deck}
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
                  <!--<CardClarification cardUrl={commander.cardUrl} imageUrl={commander.imageUrl} name={commander.name}>-->
                  <Avatar src={commander.artUrl} />
                  <!--</CardClarification>-->
                </span>
              {/each}
              {#each deck.colors.split("").map(symbolComponentForLetter) as colorComp}
                <svelte:component this={colorComp} />
              {/each}
            </div>
          </TableBodyCell>
          <TableBodyCell>{deck.name}</TableBodyCell>
        </TableBodyRow>
        {#if expandedDeck === deck.id}
          <TableBodyRow>
            <TableBodyCell colspan="2">
              Revealed Content
            </TableBodyCell>
          </TableBodyRow>
        {/if}
      {/each}
    </TableBody>
  </Table>
</SDHWriting>
