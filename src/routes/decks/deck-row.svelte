<!-- TODO? Merge with deck-expansion-row. -->
<!-- TODO? Incorporate rarity indicators on the commander avatars. -->
<script>
  export let deck;
  export let first;
  export let last;
  export let expanded;

  let expandedAndAnimationFinished = expanded;
  let expansionTimer;
  // When expanding the last row, we need to un-round the last row border instantly.
  // When collapsing the last row, we need to round the border only once the animation has finished.
  // TODO: De-hardcode timeout length (matches --collapse-toggle-duration in DeckExpansionRow)
  $: if(expanded) {
    expandedAndAnimationFinished = expanded;
  } else {
    clearTimeout(expansionTimer);
    expansionTimer = setTimeout(() => {((expanded) => {
      expandedAndAnimationFinished = expanded;
    })(expanded)}, 300);
  }

  import CardClarification from '$components/card-clarification.svelte';
  import DeckExpansionRow from '$routes/decks/deck-expansion-row.svelte';
  import DecklistButton from '$routes/decks/decklist-button.svelte';

  import { Avatar } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>
<div class={`border-l border-r dark:border-gray-700 border-b m-0 p-0 ${last?" rounded-b-md":""}${first?" rounded-t-md border-t":""}`}>
  <!-- TODO: Clean up CSS formatting here -->
  <div on:click={() => dispatch("click", deck)} class={`px-6 py-4 font-medium text-gray-900 dark:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer select-none${first?" rounded-t-md":""}${(last && !expandedAndAnimationFinished)?" rounded-b-md":""} ${expanded?"dark:bg-gray-600":"dark:bg-gray-800"}`}>
    <div class="flex items-center">
      <div class="flex items-center">
        {#each deck.commanders as commander}
          <!-- For indicating rarity:  dot={{color: colorForRarity(commander.rarity), size:"lg", placement:"bottom-right"}} -->
          <!-- Currently does not overlap the commander Avatar, and causes the image to shrink and deform. -->
          <!-- TODO: Add rarity indicator to commanders -->
          <span class="pr-1">
            <CardClarification cardUrl={commander.cardUrl} imageUrl={commander.imageUrl} name={commander.name}>
              <Avatar src={commander.artUrl} />
            </CardClarification>
          </span>
        {/each}
      </div>
      <span class="ml-5">{deck.name}</span>
      <!-- TODO: Find something to put on the right side of the row -- Looks barren atm. -->
      <!--{#if !expanded}
        <span class="ml-auto"><DecklistButton deck="deck"/></span>
      {/if}-->
    </div>
  </div>
  <DeckExpansionRow expanded={expanded} last={last} deck={deck} />
</div>
