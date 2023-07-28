<!-- Wrap MarkDown in this component for presentation. -->
<script>
  export let content;

  import { onMount } from 'svelte'
  import { marked } from 'marked'
  //import DOMPurify from 'dompurify';
  //let mounted = false;
  // `window` is not available before the component is mounted, and DOMPurify depends on access to it.
  // The only source of Markdown is currently hardcoded in the codebase, so it's safe not to do this, and waiting until mount causes
  // the page to shift noticeably during hydration.
  /*onMount(() => {
    const sanitizer = DOMPurify(window);
    html = sanitizer.sanitize(marked.parse(content));
    //html = marked.parse(content);
    mounted = true;
  });*/
  let html;
  html = marked.parse(content);
</script>
{@html html}
