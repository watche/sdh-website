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
  let classList;
  // class="" is supported for removing the underline class, so a falsey check will not suffice.
  $: classList = (typeof $$props.class === 'undefined')?"underline":$$props.class;
</script>
{#if internal }
  <a href={href} class={classList}><slot /></a>
{:else}
  <a href={href} rel={`noopener${nofollow?" nofollow":""}`} class={classList} target="_blank"><slot /></a>
{/if}
