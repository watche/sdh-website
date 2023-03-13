<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import SDHLogo from '$components/sdh-logo.svelte'
  import { Card } from 'flowbite-svelte'

  const armageddon = {
    cardUrl: "https://scryfall.com/card/a25/5/armageddon",
    imageUrl: "https://cards.scryfall.io/large/front/7/7/77f1f6ac-983f-4f3e-8906-47f774e8367b.jpg?1582021719",
    name: "Armageddon"
  };
  const moxDiamond = {
    cardUrl: "https://scryfall.com/card/tpr/228/mox-diamond",
    imageUrl: "https://cards.scryfall.io/large/front/b/f/bf9fecfd-d122-422f-bd0a-5bf69b434dfe.jpg?1562431287",
    name: "Mox Diamond"
  };
</script>
<svelte:head>
  <title>SDH Constitution</title>
  <meta name="description" content="The founding and guiding document for the Spousal Dragon Highlanders format in Magic: the Gathering." />
</svelte:head>
<SDHWriting>
  <span slot="title">The SDH Constitution</span>
  <section>
    <Subheading>You're allowed to win.</Subheading>
    <p style="margin-bottom: 1em;">
      The social contract of Commander has a fatal flaw: Players are supposed to regulate each other's power levels, and this is overwhelmingly done moralistically: If you play <CardClarification {...armageddon}>Armageddon</CardClarification>, then you've done something <em>wrong</em>. The end result is that everyone feels entitled to win, and nobody can articulate their deck's power level, so a queasy, political kind of uncertainty looms over every game of casual Commander.
    </p>
    <p>
      <strong>Fuck that.</strong> In SDH, players are expected to play to win, and only to win. No kingmaking, no stalling, and no spite plays. There are still foggy situations, but they're the exception, not the rule.
    </p>
  </section>
  <section>
    <Subheading>Every Deck is a Puzzle.</Subheading>
    <p style="margin-bottom: 1em;">
      SDH inherently has a lot of emergent complexity. There are over 400 <em>thousand</em> legal spouse pairs, and every one of those pairs probably has 2 or 3 ways to build the library. (Just like every singleton commander from EDH does.) This ultimately means that nobody can anticipate or control what decks get made, at least not pre-emptively. This is something to be embraced. SDH is not a solved format, and probably never will be, so don't be so quick to dismiss a deck concept — or so quick to give up on your own.
    </p>
    <p style="margin-bottom: 1em;">
      And that analysis is frankly the tip of the iceberg; enabling so many commanders to be in unintended colors means that every new card has probably 3 or 4 times more decks that it could be run in (as a percentage of the already enormously higher number of decks possible). Each new set expands SDH exponentially, both in terms of what's possible in the library through colorbending, and what pairs are possible in the command zone, so there will probably always be new territory to discover.
    </p>
    <p>And if it turns out that one strategy or pair dominates the meta <em>despite</em> this for a long enough time, the banhammer will be used prudently and judiciously to solve the issue.</p>
  </section>
  <section>
    <Subheading>Proxies</Subheading>
    <p>SDH follows Wizards' policy on proxies: Completely fair game unless you're using them at an event sanctioned by Wizards themselves. Like cEDH, we want to play against our opponents' ideas, not their wallets. That said, proxies (and cards in general) should be as legible as possible, and should not be easy to distinguish from the back inside of a sleeve (so that players can't use proxies as marked cards.)</p>
  </section>
  <section>
    <Subheading>Rule Zero</Subheading>
    <p>Just like in Commander, you're welcome to ignore any and all of these rules in a consenting playgroup. You don't need a formal document to tell you this, of course, but this is included simply to maintain the precedent from Commander that mixing things up with friends is not "playing the game wrong".</p>
  </section>
  <section>
    <Subheading>The SDH Logo</Subheading>
      <div class="flex flex-row content-center">
        <SDHLogo scale={6} />
        <p class="align-middle">The SDH Logo is simply a <CardClarification {...moxDiamond}>Mox Diamond</CardClarification> mounted on a wedding ring, which conceptually connects marriage to MtG, and does so using a superstaple card.</p>
      </div>
  </section>
</SDHWriting>
