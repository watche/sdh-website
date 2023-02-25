import { writable } from 'svelte/store';

const visible = writable(false);
console.log(visible);
setInterval(() => {
  visible.set(Math.floor(Date.now()/1000)%2===0);
}, 1000);

export {
  visible
};
