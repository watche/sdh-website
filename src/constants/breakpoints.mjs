// Tailwind's default breakpoints.
// While this isn't as clean as reading them from the tailwind.config.js,
// but this is significantly cleaner, and doesn't significantly impact page size.

// These numbers are for 'px' units.
const BREAKPOINTS = [
  { name: 'sm', size: 640 },
  { name: 'md', size: 768 },
  { name: 'lg', size: 1024 },
  { name: 'xl', size: 1280 },
  { name: '2xl', size: 1536 },
];

// Returns breakpoints of a width less than or equal to the width specified.
const breakpointsForWidth = (width) => {
  return BREAKPOINTS.filter((bp) => {
    return bp.size <= width;
  }).map((bp) => {
    return bp.name;
  });
};

// Given a breakpoint, return whether the viewport is as wide or wider.
const atBreakpoint = (bpName, width) => {
  return breakpointsForWidth(width).indexOf(bpName) > (-1);
};

export { BREAKPOINTS, breakpointsForWidth, atBreakpoint }
