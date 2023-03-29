<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import SDHLogo from '$components/sdh-logo.svelte'
  import { Card, List, Li } from 'flowbite-svelte'
  import Link from '$components/link.svelte'

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
  const malcolm = {
    cardUrl: "https://scryfall.com/card/cmr/79/malcolm-keen-eyed-navigator",
    imageUrl: "https://cards.scryfall.io/large/front/b/b/bbc3bbda-a4bc-4302-a3fc-b1c89f0f5461.jpg?1608909299",
    name: "Malcolm, Keen-Eyed Navigator"
  };
  const rograkh = {
    cardUrl: "https://scryfall.com/card/cmr/197/rograkh-son-of-rohgahh",
    imageUrl: "https://cards.scryfall.io/large/front/a/4/a4fab67f-00c2-4125-9262-d21a29411797.jpg?1644853041",
    name: "Rograkh, Son of Rohgahh"
  };
  const zadaUrl = "https://scryfall.com/card/a25/156/zada-hedron-grinder";
  const infectiousBiteUrl = "https://scryfall.com/card/one/172/infectious-bite";
</script>
<svelte:head>
  <title>SDH Constitution</title>
  <meta name="description" content="The founding and guiding document for the Spousal Dragon Highlanders format in Magic: the Gathering." />
</svelte:head>
<SDHWriting>
  <span slot="title">The SDH Constitution</span>
  <section>
    <Subheading>Why two commanders?</Subheading>
      <p class="mb-3">The principle question of SDH.</p>
      <p class="mb-3">The first answer is that players freely selecting two commanders essentially takes Commander "off the rails". Just like interesting and unintended things happen in the libraries of commander decks, they can now happen in the command zone, and due to the <Clarification>exponential nature<svelte:fragment slot="clarification">There are hundreds of thousands of legal spouse pairs, and every such pair has at least a few ways to build the library. This means that <em>nobody</em> can realistically control the playerbase of SDH. SDH is not a solved format, and probably never will be. If it ever is, the next set will un-solve it. <br /><br />Each set introduces new commanders, but even more importantly, each set introduces new cards for the library, and because you can give commanders new colors, each of those new cards can make a deck "work" where that card ordinarily would never be played with that commander (e.g. <Link href={zadaUrl} nofollow>Zada, Hedron Grinder</Link> and <Link href="infectiousBiteUrl" nofollow>Infectious Bite</Link>). This means that each new set expands the possibilities exponentially in two different ways, interacting ways at the same time.</svelte:fragment></Clarification> of commander pairings, it's practically impossible for the format to be controlled by card designers. This ensures that SDH will to some extent remain a "Wild West" format even if it becomes popular enough that cards get designed for it.</p>
      <p>The second answer is that arbitrarily choosing a pair of commanders puts a lot of power in the command zone, and shifting the balance of power from the library into the command zone almost by definition means more unique and interesting decks. This also means that SDH may have a slightly higher power ceiling, but most of the best cEDH decks are 4- and 5-color decks, so that's not immediately obvious. (And, frankly, many of the uncommons happen to have Partner commanders anyway, like <CardClarification {...rograkh}>Rograkh</CardClarification> or <CardClarification {...malcolm}>Malcolm</CardClarification>.)</p>
  </section>
  <section>
    <Subheading>SDH and cEDH</Subheading>
      <p class="mb-3">SDH is essentially a spin-off format of <Clarification>cEDH<svelte:fragment slot="clarification">Acknowledged: cEDH is not technically its own format. But that really is a technicality: What's the consequence of breaking the formal rules? You're accused of cheating. What's the consequence of breaking the unwritten casual rules? You're accused of cheating.</svelte:fragment></Clarification>. Unlike EDH, though, the rules and banlist are centered around competitive play. This is not because casual play is discouraged or disallowed: Regulating casual just doesn't make sense. Casual players regulate <em>themselves</em>: That's what casual play is! Competitive players, in contrast, agree to play the rules as written, so it only makes sense that the rules, as written, should regulate competitive play.</p>
      <p>Whether this is competitive players being served by the rules, or casual players being protected against the rules, is a matter of <Clarification>perspective<svelte:fragment slot="clarification"><p>There are even many ways to look at this.</p>
          <List class="mb-3">
            <Li>The question of whether a card is "fun" or "not fun" is much less tractible than whether a card is dominating the meta.</Li>
            <Li>When you lose, the burden of responsibility is in different places in the different "format"s: In competitive, it's your fault for losing. In casual, it's your opponent's fault for beating you. Because of this, there's no recourse against a degenerate strategy in competitive except to play it yourself, which means that competitive play <em>needs</em> rules to stay fun, and casual play doesn't.</Li>
            <Li>Competitive play is where actual "this is definitely allowed"/"this is definitely not allowed" judgement calls are necessary, given that tournaments are played competitively.</Li>
            <Li>The rules of casual play should be up to you and your friends. It's nobody's business to tell you what you can, and cannot play!</Li>
          </List>
          <p>And regarding EDH, it's important to note that its banlist is only meant as a suggestion: <Link href="https://mtgcommander.net/index.php/the-philosophy-of-commander/">"We encourage groups to use the rules and the ban list as a baseline to optimize their own experience."</Link> This is because EDH <em>really is</em> a casual format by design.</p>
        </svelte:fragment></Clarification>.</p>
  </section>
  <section>
    <Subheading>Proxies</Subheading>
    <p>SDH follows Wizards' policy on proxies: Fully permitted outside of Wizards-sanctioned events.</p>
  </section>
  <section>
    <Subheading>Social Contract</Subheading>
    <p class="mb-3">The same sort of "rules" as cEDH apply: Play to win, and only to win. No kingmaking, no stalling, no spite plays, et cetera. There are <Clarification>some exceptions<svelte:fragment slot="clarification">The biggest and clearest exception is in tournaments where drawing is preferable to losing, in which case stalling is the optimal play, and is acceptable as long as you're not engaging in Slow Play. A much muddier case is switching your deck in response to somebody else choosing a deck, which is not acceptable despite being optimal.</svelte:fragment></Clarification> to this, but relatively few, and relatively niche.</p>
    <p>If there's no pregame conversation, it should be assumed that everyone playing is playing the best deck they possibly can, and exceptions to this should be communicated. If a deck pubstomps the others, this failure to communicate is the fault of all parties involved.</p>
  </section>
  <section>
    <Subheading>Rule Zero</Subheading>
    <p class="mb-3">Just like in Commander, you're welcome to ignore any and all of these rules in a consenting playgroup. You don't need a formal document to tell you this, of course, but this is included simply to maintain the precedent from Commander that mixing things up with friends is not "playing the game wrong".</p>
    <p>That said, because competitive play generally plays without a "Rule Zero", this should be made explicit: For non-"serious" SDH play, it's fine for cEDH decks to play against competitive SDH decks; they are compatible formats in both structure and power level. In fact, many popular decks are coincidentally valid in both formats anyway, at which point the distinction is just a label.</p>
  </section>
  <section>
    <Subheading>The SDH Logo</Subheading>
      <div class="flex flex-row content-center">
        <SDHLogo scale={6} />
        <p class="align-middle">The SDH Logo is simply a <CardClarification {...moxDiamond}>Mox Diamond</CardClarification> mounted on a wedding ring, which conceptually connects marriage to MtG, and does so using a superstaple card.</p>
      </div>
  </section>
</SDHWriting>
