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
  .featured {
    width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    animation: toBottom 2s ease forwards;
  }
  .text {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
@media all and (max-width: 768px) {
  .text {
    width: 80%;
  }
}
</style>