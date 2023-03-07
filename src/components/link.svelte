<script>
  export let href;
  export let nofollow = false;

  let internal = true;
  $: internal = !(/http.*/.test(href));
  $: if(internal && nofollow) {
    if(import.meta.env.MODE === 'development') {
      console.warn("nofollow is not honored on on internal links.");
    }
  }
</script>
{#if internal }
  <a href={href} class={$$props.class?$$props.class:"underline"}><slot /></a>
{:else}
  <a href={href} rel={`noopener${nofollow?" nofollow":""}`} class={$$props.class?$$props.class:"underline"} target="_blank"><slot /></a>
{/if}
