<!-- Note that the text color used here is also hardcoded into '$components/github-logo.svelte' -->
<script>
  import GitHubLogo from '$components/github-logo.svelte'
  import { GITHUB_URL } from '$constants/github-url.mjs'
</script>
<footer class="mt-5 pt-1 px-3 border-t dark:border-slate-200/5 text-slate-700 text-xs">
  <div class="flex">
    <span>
      <p>The SDH Website is unofficial Fan Content permitted under the <a href="https://company.wizards.com/en/legal/fancontentpolicy" class="underline">Fan Content Policy</a>. This site is not approved and/or endorsed by Wizards of the Coast.</p>
      <p>Portions of the materials used are property of Wizards of the Coast, ©Wizards of the Coast LLC.</p>
      <!--<p>Other Attributions found on <a href="/attributions">the Attributions page</a></p>-->
    </span>
    <span style="margin-left: auto;">
      <a href={GITHUB_URL}>
        <div class="flex items-center text-sm"><div style="height:17px;">Check us out on GitHub!</div><span class="pl-2" /><GitHubLogo /></div>
      </a>
    </span>
  </div>
  <br class="pt-5" />
</footer>
