<script>
  import { List, Li } from 'flowbite-svelte';

  import WhiteManaSymbol from '$components/white-mana-symbol.svelte'
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte'
  import BlackManaSymbol from '$components/black-mana-symbol.svelte'
  import RedManaSymbol from '$components/red-mana-symbol.svelte'
  import GreenManaSymbol from '$components/green-mana-symbol.svelte'
  import ColorlessManaSymbol from '$components/colorless-mana-symbol.svelte'
  import Clarification from '$components/clarification.svelte'
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Link from '$components/link.svelte'
</script>
<svelte:head>
  <title>SDH Website Attributions</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
<SDHWriting>
  <span slot="title">Attributions</span>
  <section>
    <Subheading>Icon attributions</Subheading>
      Because it's uncommon for developers to make their own icons, I have noted the original icons here as well, so that it's not assumed that they were taken without proper attribution.
    <List class="inline" list="none">
      <Li><WhiteManaSymbol /> The sun icon for the White mana symbol was taken from <Link href="https://lorcblog.blogspot.com/">Lorc</Link> via <Link href="https://game-icons.net/1x1/lorc/sun.html">game-icons.net</Link>. <Clarification>It has been modified<span slot="clarification">Mostly just making center solid, and narrowing the ring between the center and the sunbeams. Also some reformatting to reduce file size.</span></Clarification>.</Li>
      <Li><BlueManaSymbol /> The raindrop icon for the Blue mana symbol was <em>also</em> taken from <Link href="https://lorcblog.blogspot.com/">Lorc</Link> via <Link href="https://game-icons.net/1x1/lorc/drop.html">game-icons.net</Link>. <Clarification>It has also been modified<span slot="clarification">Flipped horizontally, scaled up a bit, and reshaped the little shine; MtG's is shorter and fatter. Notably, MtG's blue mana symbol is actually very unusual for having its "shine" on the right side instead of the left.</span></Clarification>.</Li>
      <Li><BlackManaSymbol /> The skull icon for the Black mana symbol is the free <Link href="https://fontawesome.com/icons/skull?s=solid&f=classic">fa-skull</Link> from <Link href="https://fontawesome.com/">Font Awesome</Link></Li>
      <Li><RedManaSymbol /> The fireball icon for the Red mana symbol is <Clarification>original<span slot="clarification">The coiled fireball look of the Red mana symbol is actually a pretty uncommon way to represent fire iconographically. Other than Firefox logos, I didn't really find anything like it.</span></Clarification></Li>
      <Li><GreenManaSymbol /> The deciduous tree icon for Green mana symbol is also <Clarification>original<span slot="clarification">As it turns out, when icon designers think of trees, they seem to think of coniferous trees. I looked for deciduous tree icons for at least an hour; the only usable ones I could find were either GPL (and I didn't want to have to remember that I was using a copyleft license on something), or required payment (and concomitant project complexity/devtime) to use. It was only after looking at the green mana symbol that I realized it was basically just 15 or so ellipses on top of a very simple tree shape.</span></Clarification>.</Li>
        <Li><ColorlessManaSymbol /> The cury diamond icon for the Colorless mana symbol is also <Clarification>original<span slot="clarification">Unfortunately, it came out a lot more "original" looking than I intended. That said, the symbol is unlikely to see very much use.</span></Clarification>.</Li>
    </List>
    <br />
    <p>The decklist icon in <Link href="/decks">/decks</Link> uses <Link href="https://www.svgrepo.com/svg/391163/cards">this SVG</Link> under an <Link href="https://www.svgrepo.com/page/licensing#MIT">MIT license</Link>. It has not been modified.</p>
  </section>
</SDHWriting>
