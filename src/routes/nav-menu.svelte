<script>
  export let open;
  export let animDuration;

  import { Navbar, NavUl } from 'flowbite-svelte';
  import Link from '$components/link.svelte';
  import breakpoints from '$stores/breakpoints.mjs';

  const routes = [
    {name: "Homepage", url:"/"},
    {name: "Constitution", url:"/constitution"},
    {name: "Rules", url:"/rules"},
    {name: "Decks", url:"/decks"},
  ];
</script>
<ul style={`--anim-duration: ${animDuration}; --menu-item-count: ${routes.length }`} class={`nav-menu my-2 ${open?"menu-expanded border-b":"menu-collapsed"} dark:border-slate-200/5`}>
  {#each routes as route}
    <li><Link class="text-white px-2" href={route.url}>{route.name}</Link></li>
  {/each}
</ul>
<style>
  @media (max-width: 315px) {
    .nav-menu {
      flex-direction: column;
      --menu-height: calc(calc(var(--line-height) * var(--menu-item-count)) + 1em);
    }
  }
  @media (min-width: 316px) {
    .nav-menu {
      flex-direction: row;
      flex-content: space-around;
      --menu-height: 2em;
    }
  }

  .nav-menu {
    display: flex;
    line-height: var(--line-height);
    --line-height: 1.2em;
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
