<script>
  export let route;

  import { NavLi } from 'flowbite-svelte';
  import { page } from '$app/stores';

  const HOMEPAGE = "/constitution";
  let currentRoute;
  let routeActive;
  $: currentRoute = $page.route.id;
  $: routeActive = (currentRoute === route) || (currentRoute === "/" && route === HOMEPAGE);
</script>
<NavLi href={route} active={routeActive}><slot /></NavLi>
