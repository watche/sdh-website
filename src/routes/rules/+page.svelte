<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import SDHParagraph from '$components/sdh-paragraph.svelte'
  import Clarification from '$components/clarification.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import { List, Li } from 'flowbite-svelte'

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

  const uncardsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+-is%3Areprint+%28set%3Asunf+or+set%3Aunf%29+%28set%3Asunf+or+o%3Aattraction+or+type%3Aattraction+or+o%3A%22%7Btk%7D%22+or+o%3A%22sticker%22%29&unique=cards&as=grid&order=name";
  const tooManyColorsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+ci%3E3&unique=cards&as=grid&order=name";
</script>
<svelte:head>
  <title>SDH Rules</title>
  <meta name="description" content="The binding rules document for the SDH format of Magic: the Gathering." />
</svelte:head>
<SDHWriting>
  <span slot="title">Rules</span>
  <SDHParagraph>
    <span slot="heading">Spouse Selection</span>
    <p>You may marry any two legal commanders within the following constraints:</p>
    <List class="inline">
      <Li>The Color Rule: Commander couples may not exceed three colors.</Li>
      <Li>The Rarity Rule: At least one of the spouses must be an Uncommon.</Li>
    </List>
    <br />
    <p>
      Abilities that make it possible to have more than one commander in EDH are ignored:
      <List class="inline">
        <Li>Partner</Li>
        <Li>
          <Clarification>Partner With
            <p slot="clarification">
              When a "Partner With" creature ETB, they do not get to search their library if they're being played as a commander. This is to prevent the tutoring from creating SDH "throuples". 
            </p>
          </Clarification>
        </Li>
        <Li>Choose a Background</Li>
        <Li>Friends Forever</Li>
        <Li>
          <Clarification>
            Companion
            <p slot="clarification">Companion doesn't give you access to an extra commander, but it has the "throuple" problem that "Partner With" does. <br /><br />It also has the "confusing new zones" problem that Attractions have.</p>
          </Clarification>*
        </Li>
      </List>
      <em>However:</em> Commanders made legal by these abilities in EDH are still eligible in SDH. This means that you are allowed Background enchantments as commander, despite their not being legal commanders 
    </p>
  </SDHParagraph>
  <SDHParagraph>
    <svelte:fragment slot="heading">Card Legality</svelte:fragment>
      <p>SDH has all of the restrictions from EDH with two new restrictions.</p>
      <!-- Clean up this section a bit. -->
      <p class="indented">
        The first new restriction is cards from Unfinity that use one of Unfinity's three new mechanics: Attractions, Stickers, and Tickets.
        These cards were restricted simply because the overwhelming majority of players seem to prefer the game without them.
        The only card in this category that saw much play was <CardClarification {...blankGoblin}>____ Goblin</CardClarification>. To be clear: Unfinity cards that 
        <em>didn't</em> use these three mechanics are still legal, so <CardClarification {...sawInHalf}>Saw in Half</CardClarification>, <CardClarification {...exchangeOfWords}>Exchange of Words</CardClarification>,
        and the d6-themed cards are all still legal. Here's an (<Clarification>accurate<svelte:fragment slot="clarification">
        <p>This query is only captures the whole list because there were no legal cards that coincidentally contained the names of any of the illegal mechanics.</p>
        <p class="indented">Unfortunately, this search will be invalidated if WotC releases more Eternal-legal cards with these mechanics, but this doesn't seem likely.</p>
        </svelte:fragment></Clarification>)
        <a href={uncardsScryfallUrl} class="underline" rel="noopener nofollow noreferrer">Scryfall Query</a> for the illegalized cards.
      </p>
      <p class="indented">
        The second category of card you can't play in SDH is cards whose color identities contain more than 3 colors. (<a href={tooManyColorsScryfallUrl} class="underline" rel="noopener nofollow noreferrer">Scryfall Query</a>)
      </p>
  </SDHParagraph>
  <SDHParagraph>
    <span slot="heading">Bans</span>
    SDH largely inherits EDH's ban list. 
  </SDHParagraph>
  <SDHParagraph>
    <span slot="heading">Social Contract</span>
    asdf
  </SDHParagraph>
</SDHWriting>
<style>
  .indented {
    text-indent: 2ch;
  }
</style>
