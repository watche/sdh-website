<script>
  export let route;

  import { NavLi } from 'flowbite-svelte';
  import { page } from '$app/stores';

  let currentRoute;
  $: currentRoute = $page.route.id;
</script>
<NavLi href={route} active={route === currentRoute}><slot /></NavLi>
