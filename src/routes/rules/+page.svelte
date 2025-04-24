<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import Subheading from '$components/subheading.svelte'
  import Clarification from '$components/clarification.svelte'
  import CardClarification from '$components/card-clarification.svelte'
  import Link from '$components/link.svelte'
  import { List, Li } from 'flowbite-svelte'
  import { beforeNavigate } from '$app/navigation'
  import { fromRules } from '$routes/banlist-comparison/+page.svelte'

  beforeNavigate((navigation) => {
    if(navigation.to.route.id === "/banlist-comparison") {
      fromRules.set(true);
    }
  });
</script>
<svelte:head>
  <title>SDH Rules</title>
  <meta name="description" content="The binding rules document for the SDH format of Magic: the Gathering." />
</svelte:head>
<SDHWriting>
  <span slot="title">Rules</span>
  <section>
    <Subheading>Spouse Selection</Subheading>
      <p>You may marry any two legal commanders (or <Clarification><span>Planeswalkers!</span><p slot="clarification">Adding planeswalkers significantly increases the depth of the card pool, and relatively few bans are necessary to prevent balance problems. This is a new change, and still somewhat experimental, but is likely to stick.</p></Clarification>) within the following constraints:</p>
    <List class="inline">
      <Li>The Color Rule: Commander couples' color identities may not exceed three colors.</Li>
      <Li>The Rarity Rule: At least one of the chosen spouses must be of either Common or Uncommon rarity.</Li>
    </List>
    <div>And, of course, no banned commanders.</div>
    <br />
    <p>
      Abilities that make it possible to have more than one commander in EDH are ignored. Exempli Gratia:
      <List class="inline">
        <Li>Partner</Li>
        <Li>
          <Clarification>Partner With
            <p slot="clarification">
              When a "Partner With" creature ETB, they do not get to search their library if they're being played as a commander. This is to prevent the tutoring from creating SDH "throuples". 
            </p>
          </Clarification>
        </Li>
        <Li>Choose a Background</Li>
        <Li>Friends Forever</Li>
        <Li>
          <Clarification>
            Companion
            <p slot="clarification">Companion doesn't give you access to an extra commander, but it has the "throuple" problem that "Partner With" does. <br /><br />It also has the "confusing new zone" problem that Stickers and Attractions have.</p>
          </Clarification>*
        </Li>
        <Li>Doctor's Companion</Li>
      </List>
      <em>However:</em> Commanders made legal by these abilities in EDH are still eligible in SDH. This means that you are allowed to run Background enchantments as commander, despite not being legal commanders without the "Choose a Background" mechanic.
    </p>
  </section>
  <section>
    <Subheading>Card Legality</Subheading>
    <p>Cards on <strong><Link href="/ban-list">The Banlist</Link></strong> are not legal.</p>
    <br />
    <p>Otherwise, SDH inherits EDH's restrictions, and adds two more:</p>
    <List tag="ol" list="decimal">
      <Li>Cards using Attractions, Stickers, and/or Tickets are not legal in SDH.</Li>
      <Li>Because of the Color Rule, cards in more than 3 colors cannot be run in SDH.</Li>
    </List>
    <p>Technically, SDH also illegalizes Contraptions and ante cards, but those cards were already banned in EDH, so there's effectively no difference.</p>
    <br />
    <p>For a more digestible version of the banlist, see the <Link href="/banlist-comparison">EDH banlist comparison</Link>.</p>
  </section>
  <section>
    <Subheading>Social Contract</Subheading>
    <p>For information about what players are expected to expect from other players, see the <Link href="/constitution">SDH Constitution</Link>.</p>
  </section>
</SDHWriting>
<style>
  .indented {
    text-indent: 2ch;
  }
</style>
