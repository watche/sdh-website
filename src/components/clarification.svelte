<script>
  import BreakpointSwitch from '$components/breakpoint-switch.svelte'
  import DesktopClarification from '$components/desktop-clarification.svelte'
  import MobileClarification from '$components/mobile-clarification.svelte'
</script>
<BreakpointSwitch>
  <span slot="md">
    <DesktopClarification>
      <span><slot /></span>
      <span slot="clarification"><slot name="clarification" /></span>
    </DesktopClarification>
  </span>
  <span slot="sm">
    <MobileClarification>
      <span><slot /></span>
      <span slot="clarification"><slot name="clarification" /></span>
    </MobileClarification>
  </span>
</BreakpointSwitch>
