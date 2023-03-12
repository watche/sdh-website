<script>
  export let open;
  export let animDuration;

  import { Navbar, NavUl } from 'flowbite-svelte';
  import Link from '$components/link.svelte';
  const routes = [
    {name: "Homepage", url:"/"},
    {name: "Constitution", url:"/constitution"},
    {name: "Rules", url:"/rules"},
    {name: "Decks", url:"/decks"},
  ];
</script>
<div style={`--anim-duration: ${animDuration}; --menu-item-count: ${routes.length};`} class={`nav-menu ${open?"menu-expanded border-b":"menu-collapsed"} dark:border-slate-200/5`}>
  <ul>
    {#each routes as route}
      <li><Link href={route.url}>{route.name}</Link></li>
    {/each}
  </ul>
</div>
<style>
  .nav-menu {
    line-height: var(--line-height);
    --line-height: 1.2em;
    --menu-height: calc(var(--line-height) * var(--menu-item-count));
    height: var(--menu-height);
  }
  .menu-collapsed {
    max-height: 0px;
    overflow: hidden;
    border-bottom-width: 0px;
    transition: max-height var(--anim-duration) linear, border-bottom-width var(--anim-duration) step-end;
  }
  .menu-expanded {
    max-height: var(--menu-height);
    overflow: hidden;
    border-bottom-width: 1px;
    transition: max-height var(--anim-duration) linear, border-bottom-width var(--anim-duration) step-start;
  }
</style>
