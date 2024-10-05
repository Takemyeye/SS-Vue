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
import { ref, computed, watch } from 'vue';
import { addToCart } from '@/services/activeContext'; 
import UiPagination from '@/ui/pagination.vue';
import UiBanner from '@/ui/banner.vue'; 
import UiCard from '@/ui/card.vue';

export default {
  name: 'CallOfNightArt',
  components: {
    UiCard,
    UiBanner, 
    UiPagination
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const filteredImages = ref([]); // Инициализация как пустого массива
    const currentPage = ref(1);
    const itemsPerPage = ref(8); 
    const showBanner = ref(false);
    const selectedImageSrc = ref('');
    const selectedImageAlt = ref(''); 
    const selectedImageTitle = ref(''); 
    const bannerTimeout = ref(null);

    // Отслеживание изменений в props.images
    watch(() => props.images, (newImages) => {
      if (Array.isArray(newImages)) {
        filteredImages.value = newImages; // Проверка на массив
      } else {
        console.error("Expected images to be an array, got:", newImages);
        filteredImages.value = []; // Сброс на пустой массив в случае ошибки
      }
      currentPage.value = 1; // Сброс текущей страницы
    }, { immediate: true });

    // Пагинация изображений
    const paginatedImages = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredImages.value.slice(start, end);
    });

    // Фильтрация изображений по запросу
    function filterImages(query) {
      if (!props.images) return; // Защита от неопределенных данных
      filteredImages.value = props.images.filter(image => {
        const title = image.title ? image.title.toLowerCase() : ''; 
        const titleAnime = image.titleAnime ? image.titleAnime.toLowerCase() : ''; 
        return title.includes(query.toLowerCase()) || titleAnime.includes(query.toLowerCase());
      });
      currentPage.value = 1; // Сброс на первую страницу
    }

    // Обработка клика на карточке
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

    // Изменение текущей страницы
    function onPageChanged(newPage) {
      currentPage.value = newPage;
    }

    // Установка количества элементов на странице
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
      filteredImages, // Возвращаем filteredImages
    };
  }
}
</script>
