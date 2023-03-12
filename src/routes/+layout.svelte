<script>
  import '../app.postcss';

  import { Navbar, NavUl, NavBrand } from 'flowbite-svelte';

  import { page } from '$app/stores';
  import NavLink from '$routes/nav-link.svelte'
  import Footer from '$routes/footer.svelte'
  import DiscordButton from '$routes/discord-button.svelte'
  import HamburgerMenu from '$components/hamburger-menu.svelte'
  import SDHLogo from '$components/sdh-logo.svelte'

  const CONSTITUTION_ROUTE = "/constitution";
  const RULES_ROUTE = "/rules";
  const DECKS_ROUTE = "/decks";
  let route;
  $: route = $page.route.id;

  let firstLoad = true;
  $: if(route !== "/") {
    firstLoad = false;
  }
  let logoActive;
  $: logoActive = ((route === "/") && !firstLoad);

  let hamburgerMenuOpen = false;
</script>
<span class="mb-3">
  <Navbar class="border-b dark:border-slate-200/5">
    <HamburgerMenu bind:open={hamburgerMenuOpen} />
    <NavBrand href="/">
      <SDHLogo active={logoActive} />
    </NavBrand>
    <NavUl>
      <NavLink route={CONSTITUTION_ROUTE}>Constitution</NavLink>
      <NavLink route={RULES_ROUTE}>Rules</NavLink>
      <NavLink route={DECKS_ROUTE}>Decks</NavLink>
    </NavUl>
    <DiscordButton />
  </Navbar>
  <div style="height: var(--hamburger-menu-height);" class={`${hamburgerMenuOpen?"hamburger-menu-expanded border-b":"hamburger-menu-collapsed"} dark:border-slate-200/5`}>
    <Navbar>
      <NavUl ulClass="flex-col">
        <NavLink route={CONSTITUTION_ROUTE}>Constitution</NavLink>
        <NavLink route={RULES_ROUTE}>Rules</NavLink>
        <NavLink route={DECKS_ROUTE}>Decks</NavLink>
      </NavUl>
    </Navbar>
  </div>
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
<style>
  .logo-area {
    /* mimicking bg-slate-800 */
    background-color: rgb(30 41 59);
  }

  .logo-area:hover, .logo-area[data-active="true"] {
    /* mimicking bg-slate-700 */
    background-color: rgb(51 65 85);
  }

  .hamburger-menu-collapsed {
    max-height: 0px;
    overflow: hidden;
    border-bottom-width: 1px;
    border-bottom-width: 0px;
    transition: max-height 0.25s linear, border-bottom-width 0.25s step-end;
  }
  .hamburger-menu-expanded {
    max-height: 100px;
    overflow: hidden;
    border-bottom-width: 1px;
    transition: max-height 0.25s linear, border-bottom-width 0.25s step-start;
  }
</style>
