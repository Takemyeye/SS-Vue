<template>
  <div class="favorite">
    <div class="text">
      <h1>Recommended Drawings</h1>
      <h3>Discover Inspiring Artworks Curated Just for You</h3>
    </div>
    <FavoriteUnit />
  </div>
</template>

<script>
import FavoriteUnit from './favorite/favoriteUnit.vue';
  export default {
    name: 'FavoriteDrawings',
    components: {
      FavoriteUnit,
    }
  }
</script>

<style scoped>
  .favorite {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
    gap: 4rem;
  }

  .text {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  </style>