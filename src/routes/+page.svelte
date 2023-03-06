<script>
  //import ConstitutionBody from '$routes/constitution/body.svelte'
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Clarification from '$components/clarification.svelte'
  import TwoCommandersImg from '$assets/two-commanders.png'
  import CommanderPhilosophyOnCedh from '$assets/commander-philosophy-on-cedh.png'
  import { DISCORD_URL } from '$constants/discord-url.mjs'
  import { List, Li } from 'flowbite-svelte'
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
  <img src={TwoCommandersImg} class="mt-2" alt="SDH allows you to run two commanders" style="min-height: 600px"/>
  <section>
    <Subheading>Why a new format?</Subheading>
    <p>
      It's not that we don't <em>like</em> EDH: It's that we're cEDH players. Commander simply wasn't made for us. cEDH is a purely accidental (and <Clarification>unwelcome<p slot="clarification"><a href="https://mtgcommander.net/index.php/the-philosophy-of-commander/"><img src={CommanderPhilosophyOnCedh} alt="The commander philosophy page explicitly says the game is more fun if it is not 'broken', and does so in language implicit of moral posturing." /></a></p></Clarification>) emergence from the rules of Commander, and this means that the health of the format has been neglected by the only people with the authority to regulate it. SDH is basically cEDH <strong>by and for</strong> cEDH players.
    </p>
  </section>

  <section>
    <Subheading>Why two commanders?</Subheading>
    <p>
      The neglect on the part of the Commander government is not the only problem for cEDH: The meta has grown stale for another reason. Interesting decks get all the attention when they win tournaments, but the reality is that the majority of the top sixteen are almost always high-color goodstuff decks with generic value commanders. SDH changes this by shifting power from the 98 to the command zone by giving you two commanders, and restricting your color identity to three colors. This also unleashes the creativity of the cEDH community <em>in the command zone itself</em>, which exponentially broadens the possibilities for deckbuilding, and really takes deckbuilding "off the rails". <em>Nobody</em>, not even the government of SDH, can foresee every "broken" commander pair that exists. They're out there for you to find.
    </p>
  </section>

  <section>
    <Subheading>Isn't this format going to be overpowered?</Subheading>
    <p>
      This is a reasonable concern. After all, most cEDH players don't like No Banlist cEDH. This is largely mitigated by the Rarity rule: One of your commanders must be a Common or Uncommon. But more importantly, the ban list is maintained by people who know (and care) about the meta and health of the format. If games start feeling stale or luck-based, cards will be banned accordingly until the format is balanced and fun again. Right now, though, this is a young format, and nobody's been able to break it yet. If that seems impossible, make a deck, and prove us wrong!
    </p>
  </section>

  <section>
    <Subheading>How can I play?</Subheading>
    <p>
      To make a deck, just make an EDH deck with <Clarification>Moxfield<p slot="clarification">When you're selecting your commander using the textbox, there should be a little checkbox that says "Search only legal commanders". When you uncheck it, a box will appear for your second commander. You can find this menu for an existing EDH deck by clicking a commander and clicking "Change Commanders". Once you've done this, you're just building an EDH deck.</p></Clarification> or
    <Clarification>Archidekt<p slot="clarification">After you've doubled-clicked a card to add commander as you normally would, just double click another card and press the same button. Archidekt not only allows this, but correctly accounts for the new color identity created by the pair.</p></Clarification>. If you have no local playgroup, the best place to get started is probably the <a href={DISCORD_URL} class="underline"> official SDH Discord</a>. It has voice chats for playing games over <a href="https://spelltable.wizards.com/" rel="noopener noreferrer" class="underline" target="_blank">Spelltable</a> or <a href="https://sites.google.com/view/mtgduelist/" rel="noopener noreferrer" class="underline" target="_blank"> MtG Duelist.</a>
    </p>
  </section>

  <section>
    <Subheading>More Information</Subheading>
    <List class="inline">
      <Li>For more on the underlying attitudes and philosophies of the format, read its <a href="/constitution" class="underline">Constitution</a>.</Li>
      <Li>To read the comprehensive rules, check out the <a href="/rules" class="underline">Rules Page</a></Li>
      <Li>To see what SDH decks look like, check out the <a href="/decks" class="underline">the SDH Decklist Database</a></Li>
    </List>
  </section>
</SDHWriting>
