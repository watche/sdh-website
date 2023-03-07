import { updateBreakpointStore, breakpointsInitialized } from '$stores/breakpoints.mjs'
import throttle from '$utils/throttle.mjs'

const getVPWidth = () => {
  return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
};
updateBreakpointStore(getVPWidth());
window.addEventListener('resize', throttle(() => {
  updateBreakpointStore(getVPWidth());
}, 100, true));
breakpointsInitialized.set(true);
