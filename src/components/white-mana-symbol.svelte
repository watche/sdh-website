<script>
  export let stacked = false;

  import 'rpg-awesome/css/rpg-awesome.min.css'
  import { Indicator } from 'flowbite-svelte'
</script>
<Indicator class="bg-amber-100 dark:bg-amber-100" border size="xl" stacked={stacked}><i class="ra ra-sun text-black" /></Indicator>
