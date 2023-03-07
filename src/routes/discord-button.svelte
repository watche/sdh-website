<!-- 
  We do not use the Button component provided by Flowbite-Svelte for a few reasons:
  1. It does not accept CSS classes, so no :hover class can be used.
  2. It only accepts a narrow range of predefined colors in its "color" prop, and Discord Blurple isn't among them.
--> 
<script>
  import DiscordLogo from '$components/discord-logo.svelte'
  import Link from '$components/link.svelte'
  import { DISCORD_URL } from '$constants/discord-url.mjs';
</script>
<Link href={DISCORD_URL} nofollow>
  <div class="flex">
    <span class="hidden md:inline">
      <button type="button" class="text-center text-xl inline-flex items-center justify-center px-4 py-2 text-sm text-white rounded-full discord-button">
        <div class="flex content-center justify-items-center items-center">
          SDH Discord<span class="pl-2"><DiscordLogo /></span>
        </div>
      </button>
    </span>
    <button type="button" class="md:hidden text-center discord-button rounded-full text-white px-5 py-5"><DiscordLogo /></button>
  </div>
</Link>
<style>
  /* Using the color found on https://discord.com/branding at 2023-02-26T17:36:06.764Z */
  .discord-button {
    background-color: #5865f2;
  }
  .discord-button:hover {
    background-color: #4855e2;
  }
</style>
