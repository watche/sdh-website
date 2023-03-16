<script>
  import bans from '$data/ban-list.json'
  import { List, Li } from 'flowbite-svelte'
   
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import CardWithExplanation from '$components/card-with-explanation.svelte'

  const spouseBans = bans.filter((ban) => {
    return ban.banType === "spouse";
  });
  const libraryBans = bans.filter((ban) => {
    return ban.banType === "library";
  });
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
  </section>
</SDHWriting>
