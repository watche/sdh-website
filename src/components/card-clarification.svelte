<script>
  export let cardUrl;
  export let imageUrl;
  export let name;

  import DesktopClarification from '$components/desktop-clarification.svelte'
  import MobileClarification from '$components/mobile-clarification.svelte'
  import BreakpointSwitch from '$components/breakpoint-switch.svelte'
  import MtgCard from '$components/mtg-card.svelte'
  import CardsIcon from '$components/cards-icon.svelte'
</script>
<BreakpointSwitch>
  <DesktopClarification slot="md">
    <slot />
    <MtgCard slot="clarification" {...$$props} />
  </DesktopClarification>
  <MobileClarification slot="sm">
    <slot />
    <MtgCard slot="clarification" {...$$props} />
    <span slot="clarifAffordance">
      <svg version="1.1" viewBox="0 0 512 512" class="inline" style="top: -0.125em; position:relative;" height="1em" xmlns="http://www.w3.org/2000/svg">
        <circle id="bg" cx="256" cy="256" r="256"/>
        <CardsIcon width="350px" height="350px" x="100" y="81" stroke="rgb(203 213 235)" />
      </svg>
    </span>
  </MobileClarification>
</BreakpointSwitch>
<style>
  #bg {
    /* Mimicking bg-slate-700 */
    fill: rgb(51 65 85);
  }
  #cards-icon {
    fill: currentcolor;
    font-size: 350px;
    font-weight: bolder;
  }
</style>
