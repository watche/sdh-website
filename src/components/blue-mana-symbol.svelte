<script>
  import 'rpg-awesome/css/rpg-awesome.min.css'
  import { Indicator } from 'flowbite-svelte'
</script>
<!-- Fairly unusually, MtG's raindrop has its little "shine" on the right side of the drop, so we flip the icon from RPG Awesome -->
<Indicator class="bg-blue-500 dark:bg-blue-500" border size="xl"><i class="flip-and-enlarge ra ra-droplet text-black" /></Indicator>
<style>
  .flip-and-enlarge {
    transform: scale(-1.2, 1.2);
  }
</style>
