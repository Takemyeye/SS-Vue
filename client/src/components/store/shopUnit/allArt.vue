<template>
    <SearchBar @search="filterImages" />
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
</template>

<script>
import { addToCart } from '@/services/activeContext'; 
import UiPagination from '@/ui/pagination.vue'; 
import SearchBar from './searchBar.vue';
import UiBanner from '@/ui/banner.vue';
import UiCard from '@/ui/card.vue';

export default {
  name: 'AllArt',
  components: {
    UiCard,
    UiBanner,
    SearchBar,
    UiPagination
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
        const title = image.title?.toLowerCase() || ''; 
        const titleAnime = image.titleAnime?.toLowerCase() || ''; 
        return title.includes(query.toLowerCase()) || titleAnime.includes(query.toLowerCase());
      });
      this.currentPage = 1;
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

<style >
.shop {
  width: 80%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  gap: 1.5rem; 
  padding-bottom: 2rem;
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
