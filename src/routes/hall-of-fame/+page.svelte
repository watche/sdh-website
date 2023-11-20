<script>
  import SDHWriting from '$components/sdh-writing.svelte';
  import Subheading from '$components/subheading.svelte';
  import Markdown from '$components/markdown.svelte';
  import Clarification from '$components/clarification.svelte';
  import CardClarification from '$components/card-clarification.svelte';
  import BreakpointSwitch from '$components/breakpoint-switch.svelte';
  import DesktopClarification from '$components/desktop-clarification.svelte';
  import MtgCard from '$components/mtg-card.svelte';
  import hofDecks from '$data/hall-of-fame-decks.json';
  import Link from '$components/link.svelte'
  import { DISCORD_URL } from '$constants/discord-url.mjs';

  import { Avatar } from 'flowbite-svelte'

  // Note:
  // Consecrated Sphinx
  // Otawara
  // Lion's Eye Diamond
  // Stifle
  // Containment Priest
</script>
<svelte:head>
  <title>SDH Hall of Fame</title>
  <meta name="description" content="The SDH Hall of Fame memorializes decks that were so good that they forced rules changes in the format." />
</svelte:head>
<SDHWriting>
  <span slot="title">🏆 The SDH Hall of Fame 🏆</span>
  <p>In most formats, when somebody "breaks the meta" and figures out a deck so good that it that ruins the play experience, everyone just gets salty.</p>
  <br />
  <p>But SDH is a format all about deckbuilding, and what greater achievement than making something so good the rules had to change? The Hall of Fame exists to celebrate those achievements. <Clarification><span>(Among other things.)</span><p slot="clarification">The Hall of Fame also serves as a challenge to those who would assume that "every commander has partner" is impossible to balance, it's a way to recognize great deckbuilders who can't participate in tournaments (or who aren't good pilots), and it encourages players to more deeply explore the game. It also helps to reinforce the tone that winning is allowed, and that saltiness about losses should not be legitimized.<br /><br />(The arbitrary, inconsistent social rules of "casual" EDH are an example of what happens when you give legitimacy to the tantrums thrown after games are lost.)</p></Clarification></p>
  <br />
  <div class="dark:bg-gray-700 dark:text-gray-400 rounded-t-lg border-t border-l border-r dark:border-gray-800 flex flex-row gap-4 items-center p-3">
    {#each hofDecks[0].commanders as commander}
    <BreakpointSwitch>
      <DesktopClarification slot="md">
        <Avatar class="flex-initial" style="height: 5em; width: 5em;" src={commander.artUrl} />
        <MtgCard slot="clarification" {...commander} />
      </DesktopClarification>
      <svelte:fragment slot="sm">
        <a href={commander.cardUrl} class="" rel="nofollow noopener" on:click|stopPropagation={()=>{}}><Avatar style="height: 5em; width: 5em;" src={commander.artUrl} /></a>
      </svelte:fragment>
    </BreakpointSwitch>
    {/each}
    <!--<Avatar src="https://sdhwebsitesupport.blob.core.windows.net/sdh-commander-portraits/norin-portrait.jpg" />
    <Avatar class="flex-initial" style="height: 5em; width: 5em;" src="https://sdhwebsitesupport.blob.core.windows.net/sdh-commander-portraits/candlekeep-portrait.jpg" />-->
    <span class="flex-auto text-2xl" style="color: white;">Norin/Candlekeep</span>
  </div>
  <div class="dark:bg-gray-800 dark:text-gray-400 rounded-b-lg border-b border-l border-r dark:border-gray-700 p-3">
    <p><CardClarification {...hofDecks[0].commanders[0]}>Norin, the Wary</CardClarification> alone? Terrible.</p>
    <p><CardClarification {...hofDecks[0].commanders[1]}>Candlekeep Sage</CardClarification> alone? Terrible.</p>
    <p>Together? <em>Terror!</em></p>
    <br />
    <p>For the uninitiated, <CardClarification {...hofDecks[0].commanders[0]}>Norin</CardClarification> flickers himself until end step when players do... Almost anything. And <CardClarification {...hofDecks[0].commanders[1]}>Candlekeep Sage</CardClarification> on the battlefield draws two cards whenever that happens.</p>
    <br />
    <p>And it's not a fragile engine either. <Clarification><span>Norin is <em>very</em> difficult to remove</span><p slot="clarification">If you respond to his trigger with removal, he just triggers again on top of it. So you need ability-based creature removal, and Otawara isn't going to cut it, since he's trivial to recast most of the time... And Norin's owner can trigger him by casting their <em>own</em> instant to put a Norin trigger back on top of the stack. And he's very easy to recast, and doesn't suffer from summoning sickness. You can use Stifle effects to lock Norin in Exile, but because of Norin's weird wording, you can actually put him into the command zone, and return him from there on end step. This makes his commander tax explode, but does technically work around Stifle effects. This is all on top of the fact that the Norin player's hand will be full of interaction most of the time. <br /><br />While we're here, fun fact: Norin can also attack to flicker himself.</p></Clarification>. This makes <CardClarification {...hofDecks[0].commanders[1]}>Candlekeep Sage</CardClarification> the weakpoint, but enchantments are pretty hard to remove, and everything is being protected by an Izzet deck drawing eight cards every turn cycle.</p>
    <br />
    <p>The deck was held beck somewhat by the lack of good win conditions in Izzet colors, but even then, it won about 50% of the games it played. And all of those games were 3v1s against a first-draft version of the deck. It was so good that on multiple occasions, Lion's Eye Diamond was used to get the commanders out on turn one, and went completely unpunished.</p>
    <br />
    <p>It's fortunate that Norin/Candlekeep was the first banworthy pairing, since the commanders are individually so innocuous that the "banned as pairing" classification came naturally.</p>
  </div>
  <br />
  <p>If <strong>you</strong> would like to appear in the Hall of Fame, show everyone your game-warping decklist on our <Link href={DISCORD_URL} nofollow>Discord</Link>.</p>
</SDHWriting>
