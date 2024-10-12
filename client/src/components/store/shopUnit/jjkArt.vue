<template>
  <div>
    <div class="shop">
      <UiCard
        v-for="image in paginatedImages"
        :key="image.id"
        :src="image.image"
        :alt="image.title"
        :title="`${image.price} €`"
        :subtitle="image.subtitle"
        :btn="`${image.price} €`"
        :showT="false"
        :showI="true" 
        @click="handleCardClick(image)"
      />
      <UiBanner 
        v-if="showBanner"
        :src="selectedImageSrc"
        :alt="selectedImageAlt"
        :title="selectedImageTitle"
        :text="`Added To Cart`"
      /> 
    </div>

    <UiPagination
      :totalItems="filteredImages.length"
      @page-changed="onPageChanged"
      @items-per-page-changed="setItemsPerPage"
    />
  </div>
</template>

<script>
import { addToCart } from '@/services/activeContext';
import UiPagination from '@/ui/pagination.vue'; 
import UiBanner from '@/ui/banner.vue';
import UiCard from '@/ui/card.vue';

export default {
  name: 'JjkArt',
  components: {
    UiCard,
    UiBanner,
    UiPagination,
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
      currentPage: 1,
      itemsPerPage: 8, 
      showBanner: false,
      selectedImageSrc: '',
      selectedImageAlt: '', 
      selectedImageTitle: '', 
      bannerTimeout: null,
    };
  },
  computed: {
    paginatedImages() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredImages.slice(start, end);
    }
  },
  watch: {
    images: {
      handler(newImages) {
        this.filteredImages = newImages;
        this.currentPage = 1;
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
      this.currentPage = 1;
    },
    handleCardClick(image) {
      this.addToCart(image);
      this.selectedImageSrc = image.image; 
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
    onPageChanged(newPage) {
      this.currentPage = newPage;
    },
    setItemsPerPage(items) {
      this.itemsPerPage = items;
      this.currentPage = 1;
    }
  }
}
</script>
