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
  name: 'MhaArt',
  components: {
    SearchBar,
    UiCard,
    UiBaner
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filteredImages: [],
      showBanner: false,
      selectedImageSrc: '',
      selectedImageAlt: '', 
      selectedImageTitle: '', 
      bannerTimeout: null,
    };
  },
  watch: {
    images: {
      handler(newImages) {
        this.filteredImages = newImages;
      },
      immediate: true
    }
  },
  methods: {
    filterImages(query) {
      if (!this.images) return;
      this.filteredImages = this.images.filter(image => {
        const title = image.title ? image.title.toLowerCase() : ''; 
        const titleAnime = image.titleAnime ? image.titleAnime.toLowerCase() : ''; 
        return title.includes(query.toLowerCase()) || titleAnime.includes(query.toLowerCase());
      });
    },
    handleCardClick(image) {
      this.addToCart(image);
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
    addToCart(image) {
      addToCart(image); 
    },
  }
}
</script>

<style scoped>
.shop {
  animation: opacity 0.7s ease forwards;
}
</style>
