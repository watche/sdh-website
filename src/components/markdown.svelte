<!-- Wrap MarkDown in this component for presentation. -->
<script>
  export let content;

  import { onMount } from 'svelte'
  import { marked } from 'marked'
  import DOMPurify from 'dompurify';
  let mounted = false;
  let html;
  // `window` is not available before the component is mounted, and DOMPurify depends on access to it.
  onMount(() => {
    const sanitizer = DOMPurify(window);
    html = sanitizer.sanitize(marked.parse(content));
    //html = marked.parse(content);
    mounted = true;
  });
  
</script>
{#if mounted}
  {@html html}
{/if}
