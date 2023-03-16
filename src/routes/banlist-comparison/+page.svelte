<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Link from '$components/link.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import CardWithExplanation from '$components/card-with-explanation.svelte'
  import { List, Li } from 'flowbite-svelte'

  const uncardsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+-is%3Areprint+%28set%3Asunf+or+set%3Aunf%29+%28set%3Asunf+or+o%3Aattraction+or+type%3Aattraction+or+o%3A%22%7Btk%7D%22+or+o%3A%22sticker%22%29&unique=cards&as=grid&order=name";
  const tooManyColorsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+ci%3E3&unique=cards&as=grid&order=name";
  const unbans = [
    {
      "card": {
        "name": "Biorhythm",
        "cardUrl": "https://scryfall.com/card/9ed/231/biorhythm",
        "imageUrl": "https://cards.scryfall.io/large/front/1/7/17d1a10f-ce21-4914-9984-c7c559161230.jpg?1593017425"
      }
    },
    {
      "card": {
        "name": "Lutri, the Spellchaser",
        "cardUrl": "https://scryfall.com/card/iko/227/lutri-the-spellchaser",
        "imageUrl": "https://cards.scryfall.io/large/front/f/b/fb1189c9-7842-466e-8238-1e02677d8494.jpg?1628801771",
      }
    },
    {
      "card": {
        "name": "Iona, Shield of Emeria",
        "cardUrl": "https://scryfall.com/card/mm2/20/iona-shield-of-emeria",
        "imageUrl": "https://cards.scryfall.io/large/front/6/1/6197b59e-1652-496c-a038-e2eb88ecf017.jpg?1562584407",
      },
      "explanation": "Very hard to cast from the command zone, and not a desirable reanimator target compared to existing cards like Razaketh, Abdel, or Worldgorger Dragon. Its lock with Painter's Servant compares unfavorably to Lavinia's with Omen Machine."
    },
    {
      "card": {
        "name": "Library of Alexandria",
        "cardUrl": "https://scryfall.com/card/vma/303/library-of-alexandria",
        "imageUrl": "https://cards.scryfall.io/large/front/e/5/e5145f31-a4ac-44ef-8f85-e4d95f2c9ff5.jpg?1562940986",
      },
      "explanation": "Testing so far has shown Library of Alexandria to be a fun and interesting card, but by no means gamebreaking. It's maybe a little better than Urza's Saga."
    },
    {
      "card": {
        "name": "Primeval Titan",
        "cardUrl": "https://scryfall.com/card/ima/183/primeval-titan",
        "imageUrl": "https://cards.scryfall.io/large/front/6/d/6d5537da-112e-4679-a113-b5d7ce32a66b.jpg?1562850064",
      }
    },
    {
      "card": {
        "name": "Sway of the Stars",
        "cardUrl": "https://scryfall.com/card/bok/54/sway-of-the-stars",
        "imageUrl": "https://cards.scryfall.io/large/front/5/e/5eb58d9e-d181-4167-8b80-64b238183bdb.jpg?1562877344",
      }
    },
    {
      "card": {
        "name": "Sundering Titan",
        "cardUrl": "https://scryfall.com/card/2xm/292/sundering-titan",
        "imageUrl": "https://cards.scryfall.io/large/front/a/2/a2ebb5d3-72b1-411d-8c90-83dac5b37898.jpg?1618940470",
      }
    },
    {
      "card": {
        "name": "Sylvan Primordial",
        "cardUrl": "https://scryfall.com/card/gtc/136/sylvan-primordial",
        "imageUrl": "https://cards.scryfall.io/large/front/0/4/0483c869-38dc-4b0b-82f3-dd08a1ab985f.jpg?1561814269",
      }
    },
    {
      "card": {
        "name": "Upheaval",
        "cardUrl": "https://scryfall.com/card/mh2/270/upheaval",
        "imageUrl": "https://cards.scryfall.io/large/front/b/e/befe74b1-c487-42bb-a1a1-4d13f3a86ff7.jpg?1626100271",
      }
    }
  ];
  const blankGoblin = {
    "name": "_____ Goblin",
    "imageUrl": "https://cards.scryfall.io/large/front/5/8/5819e3f3-da49-4003-88ce-f3b7bb495787.jpg?1673914269",
    "cardUrl": "https://scryfall.com/card/unf/107/_____-goblin",
  };
  const sawInHalf = {
    "name": "Saw in Half",
    "imageUrl": "https://cards.scryfall.io/large/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
    "cardUrl": "https://scryfall.com/card/unf/88/saw-in-half",
  };
  const exchangeOfWords = {
    "name": "Exchange of Words",
    "imageUrl": "https://cards.scryfall.io/large/front/8/c/8c28cebf-f849-4353-9dd1-c62f05c15d0f.jpg?1673913524",
    "cardUrl": "https://scryfall.com/card/unf/45/exchange-of-words",
  };


</script>
<svelte:head>
  <title>Bans: SDH vs. EDH</title>
  <meta name="description" content="A list of cards banned/unbanned " />
</svelte:head>
<SDHWriting>
  <span slot="title">Banlist Comparison to EDH</span>
  <aside class="dark:text-slate-700 test-sm">Note: The <Link href="/bans">Official SDH Banlist</Link> trumps this document if an inconsistency is ever created.</aside>
  <section>
    <Subheading>Unbanned from Commander</Subheading>
    <p>(These cards are unbanned both in the library and in the command zone.)</p>
    <List class="inline">
      {#each unbans as unban}
        <Li><CardWithExplanation card={unban.card} explanation={unban.explanation} /></Li>
      {/each}
    </List>
  </section>
  <section>
    <Subheading>Banned from SDH</Subheading>
      <p>No cards have been banned yet.</p>
  </section>
  <section>
    <Subheading>Illegal in SDH</Subheading>
      <p>Legality rules do exclude some cards that are playable in EDH, namely the <Link href={uncardsScryfallUrl} nofollow>un-cards that used Tickets, Stickers, or Attractions</Link>, and <Link href={tooManyColorsScryfallUrl}>cards in more than three colors</Link>.</p>
      <br />
      <p>The only widely-used card hit by these changes is <CardClarification {...blankGoblin}>_____ Goblin</CardClarification>.</p>
  </section>
</SDHWriting>
