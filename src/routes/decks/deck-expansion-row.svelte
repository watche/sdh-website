<script>
  export let expanded;
  export let last;
  export let deck;

  import Markdown from '$components/markdown.svelte'
  import ColorIdentity from '$components/color-identity.svelte'
  import DecklistButton from '$routes/decks/decklist-button.svelte'
</script>
<div style="height: var(--expanded-height);" class={`pr-6 ${expanded?"expanded":"collapsed"}`}>
  <div class="flex">
    <!-- Summary Area -->
    <span class="flex-none">
    <table class={`dark:bg-gray-700 nowrap h-full border-r border-gray-500 ${last?"rounded-bl-md":""}`} style="height: var(--expanded-height); width: calc(1.61 * var(--expanded-height));">
      <!-- TODO: Clean up duplicate class lists -->
      <tr class="border-b border-gray-500 py-1">
        <th class="pl-2 text-right pr-5">Colors:</th>
        <td><ColorIdentity ci={deck.colorIdentity} /></td>
      </tr>
      <tr class="border-b border-gray-500 py-1">
        <th class="pl-2 text-right pr-5">Strategy:</th>
        <td>{deck.strategy}</td>
      </tr>
      <tr>
        <th class="pl-2 py-1" colspan="2">
          <DecklistButton deck={deck} />
          <!--<a href={deck.listUrl} class="underline">Decklist</a>-->
        </th>
      </tr>
    </table>
    </span>
    <div class={`dark:bg-gray-900 ml-4 ${last?"rounded-br-md":""}`} style="height: var(--expanded-height);">
      <div class="pt-4" />
      <Markdown content={deck.blurb} />
    </div>
  </div>
</div>
<style>
  :root {
    --expanded-height: 10rem;
    --collapse-toggle-duration: 0.3s;
  }
  .collapsed {
    max-height: 0px;
    overflow: hidden;
    transition: max-height var(--collapse-toggle-duration);
  }
  .expanded {
    max-height: var(--expanded-height);
    overflow: hidden;
    transition: max-height var(--collapse-toggle-duration);
  }
</style>
