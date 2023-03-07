export default (fn, delay) => {
  let timer = false;
  return (...args) => {
    if(timer === false) {
      timer = setTimeout(() => {
        fn.apply(null, args);
        timer = false;
      }, delay);
    }
  }
};
