<script>
  import BreakpointSwitch from '$components/breakpoint-switch.svelte'
  import DesktopClarification from '$components/desktop-clarification.svelte'
  import MobileClarification from '$components/mobile-clarification.svelte'
</script>
<BreakpointSwitch>
  <span slot="md"><DesktopClarification><slot /><span slot="clarification"><slot name="clarification" /></span></DesktopClarification></span>
  <span slot="sm"><MobileClarification><slot /><span slot="clarification"><slot name="clarification" /></span></MobileClarification></span>
</BreakpointSwitch>
