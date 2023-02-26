<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import SDHParagraph from '$components/sdh-paragraph.svelte'
  import Clarification from '$components/clarification.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import { Card } from 'flowbite-svelte'
</script>
<svelte:head>
  <title>SDH Constitution</title>
  <meta name="description" content="The founding and guiding document for the Spousal Dragon Highlanders format in Magic: the Gathering." />
</svelte:head>
<SDHWriting>
  <span slot="title">Spousal Dragon Highlanders</span>
  <CardClarification name="Nissa Revane" imageUrl="https://cards.scryfall.io/large/front/1/b/1b4c26ab-0f7b-4163-b9e4-a415b91352a6.jpg?1562610283" cardUrl="https://cards.scryfall.io/large/front/1/b/1b4c26ab-0f7b-4163-b9e4-a415b91352a6.jpg?1562610283">
    Card Clarification
  </CardClarification>
  <p>Elder Dragon Highlander is getting awfully elder, and after guilt-tripping it every Thanksgiving for many years, it’s finally decided to get married. That’s right: TWO commanders!</p>

  <SDHParagraph>
    <span slot="heading">State of EDH</span>
    EDH is an eternal format with a largely inactive banlist, and this inevitably means a lot of power creep. This is not to complain about decks being too powerful: The issue isn’t that commanders have gotten too powerful, the issue is that the release of so many “superstaple” cards has a homogenizing effect on the format as a whole.
  The abundance of these staples homogenizes the format because every time a Dockside Extortionist is released, every deck in red loses a slot that used to go to some deck-specific card. And when enough staples have been created that whole decks can be composed solely of them, the commander becomes less important, and there’s more reason to play a “good stuff” deck where the commander(s) play only a bit part, if any.
  Compounding this issue is that mana bases can easily accommodate any number of colors. Compounding further, there are many good five-color commanders, and many two-color partners, some of which are pretty good. And the rest don’t have to be good because they provide colors.
  </SDHParagraph>

  <SDHParagraph>
    <span slot="heading">Goals of SDH </span>
    The goal of SDH is to de-homogenize cEDH by bringing more emphasis back to the commanders. This is achieved by effectively giving all commanders Partner (with some restrictions explained below), and limiting the number of colors a deck can have (3 colors is the limit). The hope is to encourage interesting commander-centric play at a similar power level to existing cEDH decks. The format is structured so that many 3-and-lower color cEDH decks can easily move a card from the 99 into the command zone to participate, thereby lowering the barrier to experimentation for existing cEDH players, and helping the first few SDH players find games.
  </SDHParagraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at quam ut tortor pharetra sagittis id nec arcu. Curabitur purus nisl, hendrerit eu pharetra sit amet, suscipit nec sapien. Suspendisse in vehicula libero. Quisque sed luctus turpis. Integer eleifend risus eu dui accumsan ultrices. Suspendisse id accumsan orci. Sed convallis viverra dui at vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sed ullamcorper leo. In non lectus maximus, blandit elit vitae, dictum massa. Quisque sodales consequat purus, sit amet laoreet massa molestie sit amet. Quisque eu erat ac dolor sollicitudin elementum. Ut rutrum leo turpis, ac pretium arcu ultricies id. Etiam feugiat pellentesque ante vitae feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque ex eget urna fermentum rhoncus.

Nam a tincidunt eros. Etiam nunc lorem, accumsan ut suscipit sed, blandit tempus felis. Donec aliquet, lectus in aliquam ornare, ligula velit facilisis libero, a vulputate ipsum purus molestie lacus. Sed placerat, tortor vel gravida faucibus, sapien leo vestibulum ipsum, at venenatis ante magna quis purus. Curabitur maximus metus at lacus fringilla fringilla. Suspendisse dictum ultricies lectus, quis posuere dolor tincidunt eget. Nunc luctus vel nibh in congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum, velit eget imperdiet gravida, eros ante maximus massa, eget efficitur justo erat vitae leo. Sed commodo, nulla id ultricies varius, leo arcu tristique lorem, at tincidunt quam ligula non arcu. Suspendisse vel cursus sapien. Pellentesque commodo lectus id ligula gravida pharetra.

Mauris fermentum risus et tempor laoreet. Nunc neque turpis, accumsan vitae tincidunt ut, consectetur ac odio. Suspendisse sit amet tellus ut tellus rutrum pretium at et ipsum. Vestibulum maximus risus mauris, a consequat purus consectetur vitae. Phasellus velit ante, bibendum nec ullamcorper eget, dignissim ut ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque gravida sem eget mollis consectetur. Donec sed tempor felis. Nam eget neque imperdiet, mollis dolor ut, interdum metus. Nullam tempus nisi magna. Curabitur ut euismod lacus. Nulla at cursus odio. Aenean lacus leo, gravida hendrerit lacus in, viverra euismod lorem. Maecenas nisl dolor, commodo vel efficitur quis, elementum eu nibh. Proin finibus varius faucibus. Fusce nunc metus, luctus sit amet maximus nec, pretium in arcu.

Nulla dignissim sapien vitae gravida fringilla. Phasellus luctus odio sed metus auctor, eget suscipit felis dapibus. Morbi augue augue, aliquet ullamcorper imperdiet id, euismod eget felis. Nam eget ex eget quam pulvinar consectetur. In pretium nunc quis mauris lacinia consequat. Aenean purus erat, pharetra et porta nec, congue rutrum tortor. Integer purus elit, auctor a dolor id, ultricies vulputate metus. Donec sit amet fringilla urna. Sed velit arcu, ullamcorper sed nunc sit amet, consequat mattis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vitae lorem metus. Aenean finibus nulla non ex maximus hendrerit. Praesent ac nisl sed erat egestas pharetra eget nec odio.

<br />
<br />
asdfasdfasdfasdfasdfasdfasdfas
  <Clarification>
    Hover me for clarification
    <MtgCard slot="clarification" name="Nissa Revane" multiverseId="190411" imageUrl="https://cards.scryfall.io/large/front/1/b/1b4c26ab-0f7b-4163-b9e4-a415b91352a6.jpg?1562610283" />
  </Clarification> dfasdf asdf asdf asdf asdf asdf sadf :wq
<br />
<br />
  <Clarification>
    check me out
    <MtgCard slot="clarification" name="Kiki-Jiki, Mirror Breaker" multiverseId="597062" imageUrl="https://cards.scryfall.io/large/front/a/2/a2ff0ee3-9600-4c7d-acec-6ec90595384e.jpg?1562852476" />
  </Clarification>
Duis aliquet laoreet bibendum. Duis sit amet urna eu erat varius ornare ut sed purus. Donec rutrum tortor et suscipit ultricies. Ut ante dui, pulvinar id lorem et, tristique hendrerit orci. Vivamus odio elit, finibus sit amet finibus et, sagittis at turpis. Pellentesque venenatis finibus gravida. Praesent dui lacus, euismod at mattis a, fringilla sit amet ex.

Morbi lacus felis, dapibus non interdum a, ultricies id elit. In congue bibendum cursus. Fusce ac egestas turpis, nec pulvinar erat. Vivamus eget nunc tellus. Ut quis tincidunt leo. Suspendisse sit amet dolor vitae mi luctus porta. Nulla euismod pretium turpis.

Donec ipsum ipsum, sagittis at velit nec, tempor blandit purus. Proin elementum bibendum faucibus. Nam sed sodales odio. Vivamus rutrum risus in odio elementum, nec rutrum lacus laoreet. Nullam sed tellus non erat consequat finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus tortor augue, id bibendum lacus gravida ac. Aenean bibendum pulvinar orci ac bibendum. Donec bibendum ut ex a rhoncus. Sed iaculis ullamcorper nunc, vel ultricies arcu eleifend et. Suspendisse at velit diam. Ut vitae nunc vel tellus facilisis finibus sit amet nec magna. Nunc consequat quis neque ac ullamcorper. Maecenas blandit metus non magna hendrerit convallis. Sed a diam sed neque dignissim hendrerit sed ac sapien. Donec commodo facilisis quam, sed aliquet dui eleifend volutpat.

Nullam rhoncus vitae quam sit amet laoreet. Phasellus a mauris ut est vulputate convallis. Nunc rhoncus justo ut tortor suscipit, eu dictum diam vulputate. Etiam porta maximus urna, auctor elementum libero rhoncus non. Donec aliquet ipsum et purus maximus sollicitudin. Phasellus congue, tellus id convallis suscipit, arcu ipsum aliquet enim, eu lacinia enim turpis ac libero. Maecenas tellus metus, tincidunt sed ornare vel, venenatis elementum enim. Fusce ac magna magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at lectus purus. Vivamus in tortor sem. Proin viverra, risus id sodales elementum, ante arcu fringilla eros, sit amet molestie velit ipsum a lacus. Fusce imperdiet erat et tempus suscipit.

Sed eu elementum orci. Aliquam iaculis metus sit amet massa tincidunt, ultricies cursus libero rutrum. Aenean ligula sem, auctor a felis vel, tristique consectetur nunc. In tempus sed orci nec vulputate. Vestibulum sit amet metus efficitur, pellentesque justo a, pretium felis. Aenean rutrum arcu augue, in facilisis quam scelerisque non. Maecenas vel nunc placerat, varius est id, ultricies orci. Proin id dui quis mauris laoreet dapibus. Nam semper lacinia nunc, vel consequat nisl. Nullam porttitor diam pharetra, suscipit lacus et, feugiat leo. Etiam mattis ipsum facilisis consequat faucibus. Duis vitae elementum lacus. Sed viverra luctus diam quis condimentum. Vestibulum interdum, purus sit amet molestie accumsan, eros tortor iaculis neque, molestie vehicula lectus nisl sed leo. In orci sem, dapibus eget dapibus et, congue id justo. Proin pharetra, mauris vitae mollis feugiat, arcu neque sodales quam, sagittis efficitur augue enim sit amet lacus.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras interdum blandit mi id ornare. Nulla vel sem mi. Vivamus ac nulla sed diam pellentesque ultricies. Donec eget maximus turpis. Vestibulum vestibulum erat vel felis condimentum, id varius orci vestibulum. Maecenas aliquet nulla enim, sit amet facilisis mauris rhoncus non. Sed dictum dui vitae cursus bibendum. Integer lacinia ullamcorper neque. Nunc felis nunc, placerat non semper id, facilisis vitae odio. Nunc sit amet sapien dignissim, porta nunc vel, aliquam mauris. Phasellus at erat et sapien condimentum hendrerit ut eget odio. Aliquam condimentum id massa vitae elementum. Vestibulum ipsum ex, consequat sed dui eu, maximus imperdiet orci.


</SDHWriting>
