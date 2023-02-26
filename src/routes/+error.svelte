<script>
  import { page } from '$app/stores';
  const DISCORD_LINK = "https://discord.gg/xqM4sERgv9";
</script>
<svelte:head>
  <title>404 (SDH)</title>
</svelte:head>
{#if $page.error.message === "Not Found" }
  <div style="font-size:30vh">404</div>
  <p>How'd you get here? This site is all static links!</p>
  <p>If you got here without typing something into the URL bar, please let us know on either the <a href={DISCORD_LINK} class="underline">Discord</a> or the <a class="underline">Git Repository</a>.</p>
{/if}
