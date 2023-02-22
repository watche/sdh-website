<script>
	import '../app.postcss';
  import { Navbar, NavUl, NavBrand, NavLi, Button } from 'flowbite-svelte';
  import DiscordLogo from '$components/discord-logo.svelte'

  // This is the "blurple" specified by Discord at https://discord.com/branding
  const DISCORD_BLURPLE = "#5865f2"
  const DISCORD_LINK = "https://discord.gg/xqM4sERgv9";
</script>
<Navbar>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      <h1 class="text-3xl">SDH</h1>
    </span>
  </NavBrand>
  <NavUl>
    <NavLi href="/" active={true}>Constitution</NavLi>
    <NavLi href="/rules">Rules</NavLi>
    <NavLi href="/decklist-db">Decks</NavLi>
    <!--<NavLi href="/spouse-search">Search</NavLi>-->
  </NavUl>
  <div class="flex">
    <a href="{DISCORD_LINK}" target="_blank" rel="noopener noreferrer">
      <Button pill size="sm" style="background-color: {DISCORD_BLURPLE};">
        SDH Discord<span class="pl-2"><DiscordLogo /></span>
      </Button>
    </a>
  </div>
</Navbar>

<span class="dark:text-white">
  <slot />
</span>
