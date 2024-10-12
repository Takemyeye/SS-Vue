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
      v-if="filteredImages && filteredImages.length > itemsPerPage"
      :totalItems="filteredImages.length"
      @page-changed="onPageChanged"
      @items-per-page-changed="setItemsPerPage"
    />
  </div>
</template>

<script>
import { addToCart } from '@/services/activeContext'; 
import usePagination from '@/mixins/PaginationMixin';
import UiPagination from '@/ui/pagination.vue';
import UiBanner from '@/ui/banner.vue';
import UiCard from '@/ui/card.vue';
import { ref } from 'vue'; 

export default {
  name: 'SdArt',
  components: {
    UiPagination,
    UiBanner,
    UiCard,
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const itemsPerPage = ref(8); 
    const showBanner = ref(false);
    const selectedImageSrc = ref('');
    const selectedImageAlt = ref(''); 
    const selectedImageTitle = ref(''); 
    const bannerTimeout = ref(null);

    const filteredImages = ref(props.images);

    const {
      paginatedImages,
      onPageChanged,
      setItemsPerPage,
      currentPage,
    } = usePagination(filteredImages, itemsPerPage); 

    function filterImages(query) {
      if (!props.images) return;
      filteredImages.value = props.images.filter(image => {
        const title = image.title ? image.title.toLowerCase() : ''; 
        const titleAnime = image.titleAnime ? image.titleAnime.toLowerCase() : ''; 
        return title.includes(query.toLowerCase()) || titleAnime.includes(query.toLowerCase());
      });
      currentPage.value = 1;
    }

    function handleCardClick(image) {
      addToCart(image); 
      selectedImageSrc.value = image.image 
      selectedImageAlt.value = image.title; 
      selectedImageTitle.value = image.title; 

      showBanner.value = true;
      if (bannerTimeout.value) {
        clearTimeout(bannerTimeout.value); 
      }
      bannerTimeout.value = setTimeout(() => {
        showBanner.value = false; 
      }, 5000);
    }

    return {
      paginatedImages,
      onPageChanged,
      setItemsPerPage,
      handleCardClick,
      showBanner,
      selectedImageSrc,
      selectedImageAlt,
      selectedImageTitle,
      currentPage,
      filterImages 
    };
  }
}
</script>
