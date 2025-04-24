<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Clarification from '$components/clarification.svelte'
  import TwoCommandersImg from '$assets/two-commanders.png'
  import CommanderPhilosophyOnCedh from '$assets/commander-philosophy-on-cedh.png'
  import { DISCORD_URL } from '$constants/discord-url.mjs'
  import { List, Li } from 'flowbite-svelte'
  import Link from '$components/link.svelte'
</script>
<svelte:head>
  <title>SDH</title>
  <!-- This could stand some improvement; ideally the description would at least kind of explain what SDH is. -->
  <meta name="description" content="Welcome to Spousal Dragon Highlanders: The Johnniest format in Magic!" />
</svelte:head>
<SDHWriting>
  <span slot="title">Spousal Dragon Highlanders</span>
  <p>Elder Dragon Highlander is getting awfully elder, and after guilt-tripping it every Thanksgiving for many years, it’s finally decided to get married. That’s right: TWO commanders!</p>
  <!-- TODO: Dehardcode image height -->
  <!-- TODO: Div with similar `background-color`s to make the loading less jarring. -->
  <img src={TwoCommandersImg} class="mt-2" style="aspect-ratio: 600 / 486" width="600" height="486" alt="SDH allows you to run two commanders" />
  <section>
    <p class="mb-3">An idea so good that Wizards themselves <Clarification>have <span slot="clarification">Doctor's Companion</span></Clarification> <Clarification>had<span slot="clarification">Partner</span></Clarification> <Clarification>it<span slot="clarification">Partner With</span></Clarification> <Clarification>several<span slot="clarification">Companion</span></Clarification> <Clarification>times<svelte:fragment slot="clarification">Choose a Background</svelte:fragment></Clarification>! But nobody really wants to play "every commander has partner" because it just feels too busted. It feels like No Banlist where it's a can of worms most players would rather keep closed.</p>
    <p>SDH keeps the worms at bay with two simple rules:</p>
    <List class="inline">
      <Li>Decks are limited to three colors.</Li>
      <Li>At least one of the commanders has to be an Uncommon or lower.</Li>
    </List>
    <p class="mt-1 mb-3">And that's pretty much it. Just these two rules open the door to new and interesting commander-centric strategies, and close the door to decks that are too good to be fun.</p>
    <p>To see some of the interesting decks made possible by SDH, check out the <Link href="/decks">Decklist DB</Link>. And for weird cornercases in the rules, see the <Link href="/rules">Rules page</Link>. If there's a mistake on the rules page, or if you just want to talk about SDH, drop by the  <Link href={DISCORD_URL} nofollow>official Discord</Link>.</p>
  </section>
  <section>
    <Subheading>How can I play?</Subheading>
    <p>
      To make a deck, just make an EDH deck with <Clarification>Moxfield<p slot="clarification">When you're selecting your commander using the textbox, there should be a little checkbox that says "Search only legal commanders". When you uncheck it, a box will appear for your second commander. You can find this menu for an existing EDH deck by clicking a commander and clicking "Change Commanders". Once you've done this, you're just building an EDH deck.</p></Clarification> or
    <Clarification>Archidekt<p slot="clarification">After you've doubled-clicked a card to add commander as you normally would, just double click another card and press the same button. Archidekt not only allows this, but correctly accounts for the new color identity created by the pair.</p></Clarification>. If you have no local playgroup, the best place to get started is probably the <Link href={DISCORD_URL} nofollow>official SDH Discord</Link>. It has voice chats for playing games over <Link href="https://spelltable.wizards.com/">Spelltable</Link> or <Link href="https://sites.google.com/view/mtgduelist/">MtG Duelist</Link>.
    </p>
  </section>
</SDHWriting>
