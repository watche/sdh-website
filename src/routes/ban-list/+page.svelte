<script>
  import bans from '$data/ban-list.json'
  import { List, Li } from 'flowbite-svelte'
   
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import CardWithExplanation from '$components/card-with-explanation.svelte'
  import Link from '$components/link.svelte'

  const abcCompare = (a, b) => {
    if(a.card.name > b.card.name) {
      return 1;
    } else {
      return (-1);
    }
  };
  const spouseBans = bans.filter((ban) => {
    return ban.banType === "spouse";
  }).sort(abcCompare);
  const libraryBans = bans.filter((ban) => {
    return ban.banType === "library";
  }).sort(abcCompare);
  const wotcForbiddenCardsUrl = "https://magic.wizards.com/en/news/announcements/depictions-racism-magic-2020-06-10";
  const fcpUrl = "https://company.wizards.com/en/legal/fancontentpolicy";
</script>
<SDHWriting>
  <svelte:fragment slot="title">Bans</svelte:fragment>
  <p>This document contains the current authoritative ban list. Unlike EDH, cards may be separately banned from the command zone or from the library. These are listed separately.</p>
  <section>
    <Subheading>Banned as Spouse</Subheading>
    <List class="inline">
      {#each spouseBans as ban}
        <Li><CardWithExplanation card={ban.card} explanation={ban.rationale} /></Li>
      {/each}
    </List>
  </section>
  <section>
    <Subheading>Banned from Library</Subheading>
    <List class="inline">
      {#each libraryBans as ban}
        <Li><CardWithExplanation card={ban.card} explanation={ban.rationale} /></Li>
      {/each}
    </List>
    <p class="mt-3">The only banned cards whose names are excluded from this list are the cards that Wizards have <Link href={wotcForbiddenCardsUrl}>removed from constructed play</Link>. These are excluded because reproducing their names and images may violate the <Link href={fcpUrl}>Fan Content Policy</Link>.</p>
  </section>
</SDHWriting>
