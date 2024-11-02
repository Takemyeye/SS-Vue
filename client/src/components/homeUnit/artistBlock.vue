<template>
  <div class="artistSpotlight">
    <div class="text">
      <h1>Artist Spotlight</h1>
      <h3>The Most Talented Manga Artists of All Time</h3>
    </div>
    <div class="container">
      <ImageContainer />
      <ArtistContainer />
    </div>
  </div>
</template>

<script>
import ArtistContainer from './artistUnit/artistContainer.vue';
import ImageContainer from './artistUnit/imageContainer.vue';

  export default {
    name: 'ArtistBlock',
    components: {
      ArtistContainer,
      ImageContainer,
    }
  }
</script>

<style scoped>
  .artistSpotlight, .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .artistSpotlight {
    background: linear-gradient(20deg, rgba(0, 174, 255, 0.26), rgba(255, 187, 0, 0.26));
    padding: 2.5rem 0;
    width: 100%;
    gap: 3rem;
  }

  .text {
    width: 80%;
    gap: 1rem;
  }
  
  .container {
    width: 60%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    padding: 2rem;
    gap: 1rem;
  }

</style>