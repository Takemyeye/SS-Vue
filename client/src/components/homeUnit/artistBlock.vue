<template>
  <div class="artistSpotlight">
    <div class="text">
      <h1>Artist Spotlight</h1>
      <h3>The Most Talented Manga Artists of All Time</h3>
    </div>
    <div class="container">
      <ImageContainer 
        v-if="selectedArtist"
        :img1="selectedArtist.firstBoock"
        :img2="selectedArtist.secondBoock"
      />
      <ArtistContainer 
        v-if="selectedArtist"
        :name="selectedArtist.name"
        :text="selectedArtist.description"
        :manga="selectedArtist.manga"
        :link="selectedArtist.src"
        :btn="selectedArtist.btntext" 
        />
    </div>
  </div>
</template>

<script>
import ArtistContainer from './artistUnit/artistContainer.vue';
import ImageContainer from './artistUnit/imageContainer.vue';
import { artist } from '@/utils/artist';

export default {
  name: 'ArtistBlock',
  components: {
    ArtistContainer,
    ImageContainer,
  },
  data() {
    return {
      artist,
      selectedArtist: null,
    };
  },
  methods: {
    getArtistByIndex(index) {
      const artistKeys = Object.keys(this.artist);
      if (index >= 0 && index < artistKeys.length) {
        const artistKey = artistKeys[index];
        this.selectedArtist = this.artist[artistKey];
      } else {
        this.selectedArtist = null;
      }
    },
  },
  mounted() {
    this.getArtistByIndex(0);
  },
};
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
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem;
    gap: 1rem;
  }

  @media all and (max-width: 1444px) {
    .container {
      width: 80%;
    }
  }

  @media all and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 4rem;
    }
  }

</style>