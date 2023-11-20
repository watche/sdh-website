<script>
  import '../app.postcss';

  import { Navbar, NavUl } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import NavLink from '$routes/nav-link.svelte'
  import Footer from '$routes/footer.svelte'
  import DiscordButton from '$routes/discord-button.svelte'
  import SDHLogo from '$components/sdh-logo.svelte'
  import NavMenu from '$routes/nav-menu.svelte'
  import breakpoints, { breakpointsInitialized } from '$stores/breakpoints.mjs'

  const CONSTITUTION_ROUTE = "/constitution";
  const RULES_ROUTE = "/rules";
  const DECKS_ROUTE = "/decks";
  const HOF_ROUTE = "/hall-of-fame";
  let route;
  $: route = $page.route.id;

  // TODO: Fix this
  let firstLoad = true;
  $: if(route !== "/") {
    firstLoad = false;
  }

  let logoActive = false;
  $: logoActive = $breakpointsInitialized && ($breakpoints.md?((route === "/" && !firstLoad)):(navMenuOpen));

  let navMenuOpen = false;

  const MENU_ANIM_DURATION = "0.25s";
  const logoClick = () => {
    if(!$breakpointsInitialized || $breakpoints.md) {
      window.location = "/";
    } else {
      navMenuOpen = !navMenuOpen;
    }
  }
</script>
<span class="mb-3">
  <Navbar class="border-b dark:border-slate-200/5">
    <SDHLogo active={logoActive} on:click={logoClick} animDuration={MENU_ANIM_DURATION} scale={3} />
    <NavUl>
      <NavLink route={CONSTITUTION_ROUTE}>Constitution</NavLink>
      <NavLink route={RULES_ROUTE}>Rules</NavLink>
      <NavLink route={DECKS_ROUTE}>Decks</NavLink>
      <NavLink route={HOF_ROUTE}>Hall of Fame</NavLink>
    </NavUl>
    <DiscordButton />
  </Navbar>
  <NavMenu open={navMenuOpen} animDuration={MENU_ANIM_DURATION} on:navigation={() => navMenuOpen = false} />
</span>

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
