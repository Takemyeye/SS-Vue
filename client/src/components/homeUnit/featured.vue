<template>
  <div class="featured">
    <div class="text">
      <h1>Featured Categories</h1>
      <h3>Explore our diverse range of anime and manga inspired art, from digital paintings to illustrations and fan art.</h3>
    </div>
    <CardUnit/>
  </div>
</template>

<script>
import CardUnit from './featuredComponent/cardUnit.vue';

export default {
    name: 'FeaturedPanel',
    components: {
      CardUnit
    }
  }
</script>

<style scoped>
  .featured, .text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem 0;
    gap: 4rem;
    animation: toBottom 1s ease forwards;
  }
  .text {
    width: 40%;
    gap: 8px;
  }
@media all and (max-width: 768px) {
  .text {
    width: 80%;
  }
}
</style>