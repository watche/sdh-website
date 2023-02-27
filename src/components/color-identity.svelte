<script>
  export let ci;

  import WhiteManaSymbol from '$components/white-mana-symbol.svelte';
  import BlueManaSymbol from '$components/blue-mana-symbol.svelte';
  import BlackManaSymbol from '$components/black-mana-symbol.svelte';
  import RedManaSymbol from '$components/red-mana-symbol.svelte';
  import GreenManaSymbol from '$components/green-mana-symbol.svelte';
  import ColorlessManaSymbol from '$components/colorless-mana-symbol.svelte';
  import { getColorsForName } from '$constants/colors-for-ci-name.mjs'

  const symbolComponentForLetter = (letter) => {
    return {
      "W": WhiteManaSymbol,
      "U": BlueManaSymbol,
      "B": BlackManaSymbol,
      "R": RedManaSymbol,
      "G": GreenManaSymbol,
      "c": ColorlessManaSymbol,
    }[letter];
  };
</script>
<span title={ci}>
  {#each getColorsForName(ci).split("").map(symbolComponentForLetter) as colorComp}
    <svelte:component this={colorComp} />
  {/each}
</span>
