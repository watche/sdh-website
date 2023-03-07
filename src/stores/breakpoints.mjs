import { BREAKPOINTS, atBreakpoint } from '$constants/breakpoints.mjs'
import { writable } from 'svelte/store';
import throttle from '$utils/throttle.mjs';

const THROTTLE_DELAY = 200;

export const breakpointsInitialized = writable(false);

const breakpointStore = writable({
  'sm': false,
  'md': false,
  'lg': false,
  'xl': false,
  '2xl': false,
});
export const updateBreakpointStore = (width) => {
  breakpointStore.set({
    'sm': atBreakpoint("sm", width),
    'md': atBreakpoint("md", width),
    'lg': atBreakpoint("lg", width),
    'xl': atBreakpoint("xl", width),
    '2xl': atBreakpoint("2xl", width),
  });
};

export default breakpointStore;
