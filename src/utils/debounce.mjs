export default (callback, delay, immediate) => {
  let timeoutId = null;
  let runOnce = false;
  return (...args) => {
    let context = this;
    if(immediate && !runOnce) {
      callback.apply(context, args);
      runOnce = true;
    }
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
