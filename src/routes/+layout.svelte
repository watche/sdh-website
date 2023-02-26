<script>
  import { Navbar, NavUl, NavBrand } from 'flowbite-svelte';
  import { page } from '$app/stores';

  import '../app.postcss';
  import NavLink from '$routes/nav-link.svelte'
  import Footer from '$routes/footer.svelte'
  import DiscordButton from '$routes/discord-button.svelte'

  const CONSTITUTION_ROUTE = "/constitution";
  const RULES_ROUTE = "/rules";
  const DECKS_ROUTE = "/decks";
  let route;
  $: route = $page.route.id;
</script>
<Navbar class="border-b dark:border-slate-200/5 mb-3">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      <h1 class="text-3xl">SDH</h1>
    </span>
  </NavBrand>
  <NavUl>
    <NavLink route={CONSTITUTION_ROUTE}>Constitution</NavLink>
    <NavLink route={RULES_ROUTE}>Rules</NavLink>
    <NavLink route={DECKS_ROUTE}>Decks</NavLink>
  </NavUl>
  <DiscordButton />
</Navbar>

<!--
  This wrapper element, aside from creating columns to act as the margins,
  is also used to position the footer in connection with the styles in app.html
-->
<div style="flex: 1 0 auto;">
  <div class="flex-auto" />
  <div class="flex-auto px-2">
    <span class="dark:text-slate-300">
      <slot />
    </span>
  </div>
  <div class="flex-auto" />
</div>
<Footer />
