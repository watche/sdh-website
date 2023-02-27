<script>
  import SDHWriting from '$components/sdh-writing.svelte'
  import { List, Li } from 'flowbite-svelte';

  import WhiteManaSymbol from '$components/white-mana-symbol.svelte'
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte'
  import BlackManaSymbol from '$components/black-mana-symbol.svelte'
  import RedManaSymbol from '$components/red-mana-symbol.svelte'
  import GreenManaSymbol from '$components/green-mana-symbol.svelte'
  import ColorlessManaSymbol from '$components/colorless-mana-symbol.svelte'
</script>
<svelte:head>
  <title>SDH Website Attributions</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
<SDHWriting>
  <span slot="title">Attributions</span>
  <List class="inline">
    <Li>The icons for the White, Red, Blue, and Colorless mana symbols (<WhiteManaSymbol /><BlueManaSymbol /><RedManaSymbol /><ColorlessManaSymbol />) were taken from <a href="https://nagoshiashumari.github.io/Rpg-Awesome/" target="_blank" rel="noopener noreferrer" class="underline">RPG Awesome</a>.</Li>
    <Li>The skull icon for the black mana symbol (<BlackManaSymbol />) is the free <a href="https://fontawesome.com/icons/skull?s=solid&f=classic" class="underline" target="_blank">fa-skull</a> from <a href="https://fontawesome.com/" class="underline" target="_blank">Font Awesome</a></Li>
    <Li>I did the icon for the Green mana symbol (<GreenManaSymbol />. As it turns out, when icon designers think of trees, they seem to think of coniferous trees.</Li>
  </List>
</SDHWriting>
