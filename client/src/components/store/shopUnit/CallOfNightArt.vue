<template>
  <div>
    <div class="shop">
      <UiCard
        v-for="image in paginatedImages"
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

    <UiPagination 
      v-if="filteredImages.length > itemsPerPage"
      :totalItems="filteredImages.length"
      @page-changed="onPageChanged"
      @items-per-page-changed="setItemsPerPage"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { addToCart } from '@/services/activeContext'; 
import UiBaner from '@/ui/baner.vue';
import UiCard from '@/ui/card.vue';
import UiPagination from '@/ui/pagination.vue';

export default {
  name: 'CallOfNightArt',
  components: {
    UiCard,
    UiBaner,
    UiPagination
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const filteredImages = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(8); 
    const showBanner = ref(false);
    const selectedImageSrc = ref('');
    const selectedImageAlt = ref(''); 
    const selectedImageTitle = ref(''); 
    const bannerTimeout = ref(null);

    watch(() => props.images, (newImages) => {
      filteredImages.value = newImages;
      currentPage.value = 1;
    }, { immediate: true });

    const paginatedImages = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredImages.value.slice(start, end);
    });

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
      selectedImageSrc.value = `/art/${image.image}`; 
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

    function onPageChanged(newPage) {
      currentPage.value = newPage;
    }

    function setItemsPerPage(items) {
      itemsPerPage.value = items; 
      currentPage.value = 1;
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
      filterImages,
    };
  }
}
</script>
