import { BREAKPOINTS, atBreakpoint } from '$constants/breakpoints.mjs'
import { writable } from 'svelte/store';
import debounce from '$utils/debounce.mjs';

const DEBOUNCE_DELAY = 200;

let initialized = false;
let getVPWidth;

const breakpointStore = writable({
  'sm': false,
  'md': false,
  'lg': false,
  'xl': false,
  '2xl': false,
});
const updateBreakpointStore = (width) => {
  console.log(`Updating breakpoints ${width}`);
  breakpointStore.set({
    'sm': atBreakpoint("sm", width),
    'md': atBreakpoint("md", width),
    'lg': atBreakpoint("lg", width),
    'xl': atBreakpoint("xl", width),
    '2xl': atBreakpoint("2xl", width),
  });
};

// Should be called as an onMount callback.
export const initBreakpointStore = () => {
  if(!initialized) {
    let getVPWidth = () => {
      return Math.max((window.document.documentElement.clientWidth || 0), (window.innerWidth || 0));
    };
    window.addEventListener('resize', debounce(() => {
      updateBreakpointStore(getVPWidth());
    }, DEBOUNCE_DELAY, true));
    initialized = true;
  }
};

export default breakpointStore;
