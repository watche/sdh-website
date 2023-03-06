export const clickOutside = ((wn, m) => {
  let watchedNodes = wn;
  let mounted = m;
  const checkForOutclicks = (clickEvent) => {
    watchedNodes.filter((node) => {
      return (typeof node !== "undefined");
    }).forEach((node) => {
      if(!node.contains(clickEvent.target)) {
        node.dispatchEvent(new CustomEvent("outclick"));
      }
    });
  };
  return (node) => {
    if(!mounted) {
      document.addEventListener("click", checkForOutclicks, true);
      mounted = true;
    }
    watchedNodes.push(node);
    const nodeIdx = (watchedNodes.length - 1);

    return {
      destroy() {
        watchedNodes.splice(nodeIdx, 1, undefined);
        // TODO: Check to see if all watchedNodes are undefined, and reset watchedNodes to [] if so.
      }
    };
  }
})([], false);
