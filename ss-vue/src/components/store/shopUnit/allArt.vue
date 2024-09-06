<template>
  <div>
    <SearchBar @search="filterImages" />
    <div class="shop">
      <UiCard
        v-for="image in filteredImages"
        :key="image.id"
        :src="`/art/${image.image}`"
        :alt="image.title"
        :title="`${image.price} €`"
        :subtitle="image.subtitle"
        :btn="`${image.price} €`"
        :showT="false"
        :showI="true"
        @click="handleCardClick(image)"
      />
      <UiBaner 
        v-if="showBanner"
        :src="selectedImageSrc"
        :alt="selectedImageAlt"
        :title="selectedImageTitle"
        :text="`Added To Cart`"
      /> 
    </div>
  </div>
</template>

<script>
import { addToCart } from '@/services/activeContext';
import SearchBar from './searchBar.vue';
import UiBaner from '@/ui/baner.vue';
import UiCard from '@/ui/card.vue';

export default {
  name: 'AllArt',
  components: {
    UiCard,
    UiBaner,
    SearchBar
  },
  data() {
    return {
      images: [],
      filteredImages: [],
      showBanner: false,
      selectedImageSrc: '',
      selectedImageAlt: '', 
      selectedImageTitle: '', 
      bannerTimeout: null,
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await fetch('http://localhost:3000/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.images = data;
        this.filteredImages = data; 
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    filterImages(query) {
      this.filteredImages = this.images.filter(image => {
        const title = image.title ? image.title.toLowerCase() : ''; 
        const titleAnime = image.titleAnime ? image.titleAnime.toLowerCase() : ''; 
        return title.includes(query.toLowerCase()) || titleAnime.includes(query.toLowerCase());
      });
    },
    handleCardClick(image) {
      addToCart(image); 
      this.showBannerForImage(image);
    },
    showBannerForImage(image) {
      this.selectedImageSrc = `/art/${image.image}`; 
      this.selectedImageAlt = image.title; 
      this.selectedImageTitle = image.title; 

      this.showBanner = true;
      if (this.bannerTimeout) {
        clearTimeout(this.bannerTimeout); 
      }
      this.bannerTimeout = setTimeout(() => {
        this.showBanner = false; 
      }, 5000);
    },
  },
};
</script>

<style >
.shop {
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  padding-bottom: 5rem;
  gap: 1rem; 
  animation: opacity 0.7s ease forwards;
}

@media all and (max-width: 1810px) {
  .shop {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (max-width: 1370px) {
  .shop {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 600px) {
  .shop {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

