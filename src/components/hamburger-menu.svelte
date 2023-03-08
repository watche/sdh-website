<script>
  export let open = false;
  let dataOpen;
  $: dataOpen = (open?"open":"closed");
  const toggleOpen = () => {
    open = !open;
  };
</script>
<span style="font-size: 30px;">
<span id="hamburger" class="inline-block cursor-pointer select-none" style="height:1em; width:1em;" data-open={dataOpen} on:click={toggleOpen}>
  <svg id="top" viewBox="0 0 10 1.5" width="1em" fill="#ffffff"><rect width="10" height="1.5" rx="0.75"></rect></svg>
  <svg id="middle1" viewBox="0 0 10 1.5" width="1em" fill="#ffffff"><rect width="10" height="1.5" rx="0.75"></rect></svg>
  <svg id="middle2" viewBox="0 0 10 1.5" width="1em" fill="#ffffff"><rect width="10" height="1.5" rx="0.75"></rect></svg>
  <svg id="bottom" viewBox="0 0 10 1.5" width="1em" fill="#ffffff"><rect width="10" height="1.5" rx="0.75"></rect></svg>
</span>
</span>

<style>
  :root {
    --anim-length: 0.25s;
  }

  #hamburger {
    position: relative;
    top: 0;
    right: 0;
  }
  #top {
    position: absolute;
    top: 0;
    right: 0;
  }
  #bottom {
    position: absolute;
    bottom: 0.15em;
    right: 0;
  }
  #middle1 {
    position: absolute;
    top: calc(50% - 0.15em);
    right: 0;
  }
  #middle2 {
    position: absolute;
    top: calc(50% - 0.15em);
    right: 0;
  }
  #hamburger[data-open="open"] #top {
    opacity: 0;
    transition: opacity var(--anim-length);
  }
  #hamburger[data-open="open"] #bottom {
    opacity: 0;
    transition: opacity var(--anim-length);
  }
  #hamburger[data-open="open"] #middle1 {
    transform: rotate(45deg);
    transition: transform var(--anim-length);
  }
  #hamburger[data-open="open"] #middle2 {
    transform: rotate(-45deg);
    transition: transform var(--anim-length);
  }
  #hamburger[data-open="closed"] #top {
    opacity: 100;
    transition: opacity var(--anim-length);
  }
  #hamburger[data-open="closed"] #bottom {
    opacity: 100;
    transition: opacity var(--anim-length);
  }
  #hamburger[data-open="closed"] #middle1 {
    transform: rotate(0deg);
    transition: transform var(--anim-length);
  }
  #hamburger[data-open="closed"] #middle2 {
    transform: rotate(0deg);
    transition: transform var(--anim-length);
  }
</style>
