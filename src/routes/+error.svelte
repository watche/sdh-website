<script>
  import { page } from '$app/stores';
  import { GITHUB_URL } from '$constants/github-url.mjs'
  import { DISCORD_URL } from '$constants/discord-url.mjs'
</script>
<svelte:head>
  {#if $page.error.message === "Not Found" }
    <title>404 (SDH)</title>
  {:else}
    <title>Error! (SDH)</title>
  {/if}
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>
{#if $page.error.message === "Not Found" }
  <div style="font-size:30vh">404</div>
  <p>How'd you get here? This site is all static links!</p>
  <p>If someone gave you a link to this page, tell them their link is broken.</p>
  <p>If you got here from a link on this site, please let us know on either the <a href={DISCORD_URL} rel="nofollow" class="underline">Discord</a> or submit an issue to the <a href={GITHUB_URL} class="underline">Git Repository</a>.</p>
{:else}
  <div style="font-size:20vh">Something's Broken</div>
  <p>The page you tried to load failed. Please file a bug report on our <a href={GITHUB_URL} class="underline">Git Repository</a>.</p>
{/if}
