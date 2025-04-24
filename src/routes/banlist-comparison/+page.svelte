<!-- TODO: Make a JSON document containing the EDH banlist, and generate this based on a comparison (with commentary in its own document). -->
<script context="module">
  import { writable } from 'svelte/store'
  const fromRules = writable(false);

  export { fromRules }
</script>
<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Link from '$components/link.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import CardWithExplanation from '$components/card-with-explanation.svelte'
  import { List, Li } from 'flowbite-svelte'
  import { beforeNavigate } from '$app/navigation'

  beforeNavigate(() => {
    fromRules.set(false);
  });

  const uncardsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+-is%3Areprint+%28set%3Asunf+or+set%3Aunf%29+%28set%3Asunf+or+o%3Aattraction+or+type%3Aattraction+or+o%3A%22%7Btk%7D%22+or+o%3A%22sticker%22%29&unique=cards&as=grid&order=name";
  const tooManyColorsScryfallUrl = "https://scryfall.com/search?q=format%3Aedh+ci%3E3&unique=cards&as=grid&order=name";
  const unbans = [
    {
      "card": {
        "name": "Fastbond",
        "imageUrl": "https://cards.scryfall.io/large/front/d/a/daf43523-558c-4701-9fa3-5d1ceb82a006.jpg?1566819914",
        "cardUrl": "https://scryfall.com/card/vma/209/fastbond"
      },
      "banType": "everywhere",
      "explanation": "Fastbond is still only experimentally unbanned. The main reason for its unban is that it aids the lands archetype, so hopefully it will improve deck diversity.  It also seems that it will only significantly ramp the player if they're already drawing more cards than their opponents, in which case they're already winning anyway. Most decks run relatively few lands, so the most likely scenario for an opening hand is to start with two lands, in which case you're likely to play the first two or three turns with the same amount of mana as you would without Fastbond."
    },
    {
      "card": {
        "name": "Limited Resources",
        "imageUrl": "https://cards.scryfall.io/normal/front/2/0/20ae3609-a3cc-486c-94f6-b8f647adfb47.jpg?1562087362",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=6049"
      },
      "banType": "everywhere",
      "explanation": "This unban is primarily experimental, but this card doesn't seem as brutal as something like Back to Basics, and is harder to break parity on. Also, with the abundance of non-land mana in this format, it's still possible for players to draw into enough mana to enact their gameplans, so this effect would mostly slow decks down than shut them down."
    },
    {
      "card": {
        "name": "Dockside Extortionist",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?name=Dockside%20Extortionist",
        "imageUrl": "https://cards.scryfall.io/large/front/9/e/9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b.jpg?1727093692"
      },
      "banType": "everywhere",
      "explanation": "Dockside was never banned in SDH, and has been found to be essential to maintaining the diversity of the meta."
    },
    {
      "card": {
        "name": "Jeweled Lotus",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=627860",
        "imageUrl": "https://cards.scryfall.io/large/front/d/7/d7183700-6941-4a3d-a581-4f33bea795e9.jpg?1727093687"
      },
      "banType": "everywhere",
      "explanation": "Jeweled Lotus was never banned in SDH, and enables commander-centric play. Costing zero mana and being able to sacrifice itself also opens the door to some gimmick play."
    },
    {
      "card": {
        "name": "Mana Crypt",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=642856",
        "imageUrl": "https://cards.scryfall.io/large/front/4/d/4d960186-4559-4af0-bd22-63baa15f8939.jpg?1727298349"
      },
      "banType": "everywhere",
      "explanation": "This card was never banned in SDH, but may be in the future. I (the guy making the website) personally despise this card."
    },
    {
      "card": {
        "name": "Nadu, Winged Wisdom",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=661500",
        "imageUrl": "https://cards.scryfall.io/large/front/9/4/94b67489-5eb0-4406-9bf3-27e50dc632eb.jpg?1731574759"
      },
      "banType": "library",
      "explanation": "Nadu in the library hasn't been fully investigated, but for now it's only banned as spouse."
    },
    {
      "card": {
        "name": "Biorhythm",
        "cardUrl": "https://scryfall.com/card/9ed/231/biorhythm",
        "imageUrl": "https://cards.scryfall.io/large/front/1/7/17d1a10f-ce21-4914-9984-c7c559161230.jpg?1593017425"
      },
      "banType": "everywhere",
    },
    {
      "card": {
        "name": "Emrakul, the Aeons Torn",
        "imageUrl": "https://cards.scryfall.io/normal/front/2/4/249db4d4-2542-47ee-a216-e13ffbc2319c.jpg?1673146896",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=571334"
      },
      "banType": "everywhere",
      "experimental": true,
      "explanation": "Emrakul seems to be just exploitable enough to make the game more interesting without being centralizing. \n- Hardcasting it will very rarely happen. In most games, nobody gets to fifteen mana.\n- Because of the above, it will be a dead card in hand the majority of the time.\n- It's extremely difficult to cheat out with reanimation.\n- It can be used for infinite turn loops with Temur Sabertooth and the like.\n- In the Command Zone, it's mostly \"just worse\" than Thrasios."
    },
    {
      "card": {
        "name": "Leovold, Emissary of Trest",
        "imageUrl": "https://cards.scryfall.io/normal/front/c/e/cedfc5b7-9242-4680-b284-debc8b5a9bc7.jpg?1559959275",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=456798"
      },
      "banType": "library",
      "explanation": "While Leovold is a brutal stax piece, it's really not that out of place in the library next to Notion Thief and Opposition Agent."
    },
    {
      "card": {
        "name": "Recurring Nightmare",
        "imageUrl": "https://cards.scryfall.io/normal/front/b/5/b50e1800-a45c-43bd-8886-8a06145d9346.jpg?1562431270",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=397441"
      },
      "banType": "everywhere",
    },
    /*{ //Unbanned in EDH on 2025-04-22
      "card": {
        "name": "Gifts Ungiven",
        "imageUrl": "https://cards.scryfall.io/normal/front/c/c/cc950b6c-0346-4939-b36b-9f10a75f7a32.jpg?1673147306",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=571384"
      },
      "banType": "everywhere",
      "explanation": "Gifts Ungiven is very comparable to Intuition, and Intuition hasn't been a problem card in EDH."
    },*/
    {
      "card": {
        "name": "Rofellos, Llanowar Emissary",
        "imageUrl": "https://cards.scryfall.io/normal/front/6/d/6d63a085-101c-4749-a3a4-1d335c25b10e.jpg?1562916904",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=383074"
      },
      "banType": "everywhere"
    },
    {
      "card": {
        "name": "Lutri, the Spellchaser",
        "cardUrl": "https://scryfall.com/card/iko/227/lutri-the-spellchaser",
        "imageUrl": "https://cards.scryfall.io/large/front/f/b/fb1189c9-7842-466e-8238-1e02677d8494.jpg?1628801771",
      }, 
      "banType": "everywhere"
    },
    {
      "card": {
        "name": "Iona, Shield of Emeria",
        "cardUrl": "https://scryfall.com/card/mm2/20/iona-shield-of-emeria",
        "imageUrl": "https://cards.scryfall.io/large/front/6/1/6197b59e-1652-496c-a038-e2eb88ecf017.jpg?1562584407",
      },
      "banType": "everywhere",
      "explanation": "Very hard to cast from the command zone, and not a desirable reanimator target compared to existing cards like Razaketh, Abdel, or Worldgorger Dragon. Its lock with Painter's Servant compares unfavorably to Lavinia's with Omen Machine."
    },
    {
      "card": {
        "name": "Library of Alexandria",
        "cardUrl": "https://scryfall.com/card/vma/303/library-of-alexandria",
        "imageUrl": "https://cards.scryfall.io/large/front/e/5/e5145f31-a4ac-44ef-8f85-e4d95f2c9ff5.jpg?1562940986",
      },
      "explanation": "Testing so far has shown Library of Alexandria to be a fun and interesting card, but by no means gamebreaking. It's maybe a little better than Urza's Saga.",
      "banType": "everywhere",
    },
    {
      "card": {
        "name": "Primeval Titan",
        "cardUrl": "https://scryfall.com/card/ima/183/primeval-titan",
        "imageUrl": "https://cards.scryfall.io/large/front/6/d/6d5537da-112e-4679-a113-b5d7ce32a66b.jpg?1562850064",
      },
      "banType": "everywhere"
    },
    /*{ // Unbanned in EDH on 2025-04-22
      "card": {
        "name": "Sway of the Stars",
        "cardUrl": "https://scryfall.com/card/bok/54/sway-of-the-stars",
        "imageUrl": "https://cards.scryfall.io/large/front/5/e/5eb58d9e-d181-4167-8b80-64b238183bdb.jpg?1562877344",
      },
      "banType": "everywhere"
    },*/
    {
      "card": {
        "name": "Sundering Titan",
        "cardUrl": "https://scryfall.com/card/2xm/292/sundering-titan",
        "imageUrl": "https://cards.scryfall.io/large/front/a/2/a2ebb5d3-72b1-411d-8c90-83dac5b37898.jpg?1618940470",
      },
      "banType": "everywhere"
    },
    {
      "card": {
        "name": "Sylvan Primordial",
        "cardUrl": "https://scryfall.com/card/gtc/136/sylvan-primordial",
        "imageUrl": "https://cards.scryfall.io/large/front/0/4/0483c869-38dc-4b0b-82f3-dd08a1ab985f.jpg?1561814269",
      },
      "banType": "everywhere"
    },
    {
      "card": {
        "name": "Upheaval",
        "cardUrl": "https://scryfall.com/card/mh2/270/upheaval",
        "imageUrl": "https://cards.scryfall.io/large/front/b/e/befe74b1-c487-42bb-a1a1-4d13f3a86ff7.jpg?1626100271",
      },
      "banType": "everywhere"
    }
  ];
  const generalUnbans = unbans.filter((unban) => {
    return unban.banType === "everywhere";
  });
  const commanderUnbans = unbans.filter((unban) => {
    return unban.banType === "spouse";
  });
  const libraryUnbans = unbans.filter((unban) => {
    return unban.banType === "library";
  });
  const bans = [
    {
      "card": {
        "name": "Braids, Cabal Minion",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=526244",
        "imageUrl": "https://cards.scryfall.io/large/front/2/7/27691efa-052d-4afe-b9ef-159858ca660f.jpg?1745319961"
      },
      "banType": "spouse",
      "explanation": "Braids is banned because it's very difficult to deal with when it comes out on the first turn, and thus puts a lot of importance on seating order."
    },
    {
      "card": {
        "name": "Thassa's Oracle",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476324",
        "imageUrl": "https://cards.scryfall.io/large/front/7/2/726e8b29-13e9-4138-b6a9-d2a0d8188d1c.jpg?1680582212"
      },
      "banType": "library",
      "explanation": "Thassa's Oracle had very efficient two-card-combos with Demonic Consultation and Tainted Pact that were completely commander-agnostic, gameplan-agnostic, and non-committal. This was exacerbated by the fact that Thoracle was in the two best colors, and had the effect of devaluing commander participation in combos. Additionally, Laboratory Maniac still exists, so more creative/commander-centric uses of Thassa's Oracle can largely continue to exist."
    },
    {
      "card": {
        "name": "Drannith Magistrate",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=479531",
        "imageUrl": "https://cards.scryfall.io/large/front/9/8/98b0a4a8-9319-451b-9b79-b0bca7a41e91.jpg?1628801742"
      },
      "banType": "library",
      "explanation": "Drannith punishes commander-centric gameplans, which are exactly what this format seeks to enable and encourage. Drannith's effect would be okay if it specified \"noncommander\", but for the simplicity of the format, it's been banned instead of having a format-specific errata."
    },
    {
      "card": {
        "name": "Narset, Parter of Veils",
        "imageUrl": "https://cards.scryfall.io/large/front/4/e/4e6e5c63-b6e5-4756-bf23-6c6f8669442d.jpg?1690004395",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=625258&printed=false"
      },
      "banType": "spouse",
      "explanation": "Like Ashiok, crippling, cheap, and completely non-committal. Would homogeneize deckbuilding, and would be a boring \"obligatory\" Uncommon slot in many decks. You'd need to account for your opponents' Narsets whenever making a deck, which is a hallmark sign of a card that would be bad for meta diversity."
    },
    {
      "card": {
        "name": "Underworld Breach",
        "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=476412&printed=false",
        "imageUrl": "https://cards.scryfall.io/large/front/0/e/0e51d796-7279-4c06-87f0-37adbdaa41df.jpg?1650599818"
      },
      "banType": "library",
      "explanation": "Underworld Breach, like Thassa's Oracle, gave many decks a \"free\" win condition for being in certain color identities, and made it possible to run pure \"goodstuff\" decks whose commanders were just value engines with no combo participation. This was the meta, and resulted in overall less diverse and commander-centric gameplay, despite Breach itself being a very interesting and stax-vulnerable card. Unlike Thoracle, there's a chance that Breach comes back off the ban list at some point."
    },
    {
    "card": {
      "name": "Jace, Wielder of Mysteries",
      "imageUrl": "https://cards.scryfall.io/large/front/6/a/6adb7d73-4482-4930-8497-cffd169b57e2.jpg?1557576232",
      "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=460981&printed=false"
    },
    "banType": "spouse",
    "explanation": "This ban may get reversed, but having Labjace in the command zone seems too powerful. This ban (like Narset and Ashiok) was made in the same rules change that legalized planeswalkers, so none of them have been tested in practice."
  },
  {
    "card": {
      "name": "Ashiok, Dream Render",
      "imageUrl": "https://cards.scryfall.io/large/front/f/2/f2df3258-c053-48a8-974f-d80899b2cd93.jpg?1557577343",
      "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=461155&printed=false"
    },
    "banType": "spouse",
    "explanation": "Crippling and asymmetrical stax piece in ideal colors in the uncommon slot would homogeneize commander choices, and would appear so often that it would essentially remove toolbox decks as an archetype."
  },
  {
    "card": {
      "name": "Narset, Parter of Veils",
      "imageUrl": "https://cards.scryfall.io/large/front/4/e/4e6e5c63-b6e5-4756-bf23-6c6f8669442d.jpg?1690004395",
      "cardUrl": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=625258&printed=false"
    },
    "banType": "spouse",
    "explanation": "Like Ashiok, crippling, cheap, and completely non-committal. Would homogeneize deckbuilding, and would be a boring \"obligatory\" Uncommon slot in many decks. You'd need to account for your opponents' Narsets whenever making a deck, which is a hallmark sign of a card that would be bad for meta diversity."
  },
  ];
  const generalBans = bans.filter((ban) => {
    return ban.banType === "everywhere";
  });
  const commanderBans = bans.filter((ban) => {
    return ban.banType === "spouse";
  });
  const libraryBans = bans.filter((ban) => {
    return ban.banType === "library";
  });
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
  <meta name="description" content="A list of cards banned/unbanned in SDH with different status in EDH." />
</svelte:head>
<SDHWriting>
  <span slot="title">Banlist Comparison to EDH</span>
  <aside class="dark:text-slate-700 test-sm">Note: The <Link href="/ban-list">Official SDH Banlist</Link> trumps this document if an inconsistency is ever created.</aside>
  <section>
    <Subheading>New Unbans</Subheading>
    <p>These cards are "generally" unbanned (unbanned in both the library the command zone).</p>
    <List class="inline">
      {#each generalUnbans as unban}
        <Li><CardWithExplanation card={unban.card} explanation={unban.explanation} /></Li>
      {/each}
    </List>
    {#if commanderUnbans.length > 0}
    <br />
    <p>These cards are unbanned from the command zone specifically, but are still be banned in the library.</p>
    <List class="inline">
      {#each commanderUnbans as unban}
        <Li><CardWithExplanation card={unban.card} explanation={unban.explanation} /></Li>
      {/each}
    </List>
    {/if}
    {#if libraryUnbans.length > 0}
    <br />
    <p>These cards are unbanned from use in the library, but are still be banned in the command zone.</p>
    <List class="inline">
      {#each libraryUnbans as unban}
        <Li><CardWithExplanation card={unban.card} explanation={unban.explanation} /></Li>
      {/each}
    </List>
    {/if}
  </section>
  <br />
  <section>
    <Subheading>New Bans</Subheading>
    <p>These cards are banned in the library:</p>
    <List>
      {#each libraryBans as ban}
        <Li><CardWithExplanation card={ban.card} explanation={ban.explanation} /></Li>
      {/each}
    </List>
    <br />
    <p>These cards are banned in the command zone:</p>
    <List>
      {#each commanderBans as ban}
        <Li><CardWithExplanation card={ban.card} explanation={ban.explanation} /></Li>
      {/each}
    </List>
  </section>
  {#if $fromRules}
    <br />
    <p class="mt-3"><Link href="/rules">Click here to return to the Rules page.</Link></p>
  {/if}
</SDHWriting>
