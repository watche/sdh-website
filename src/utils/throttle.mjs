export default (fn, delay, immediate) => {
  let timer = false;
  let runOnce = false;
  return (...args) => {
    if(immediate && !runOnce) {
      fn.apply(null, args);
    }
    if(timer === false) {
      timer = setTimeout(() => {
        fn.apply(null, args);
        timer = false;
      }, delay);
    }
  }
};
