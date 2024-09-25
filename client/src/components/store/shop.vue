<template>
  <div>
    <SiteHeader />
    <div class="store">
      <ContactUs v-if="tokenExists" />
      <TopBar />
      <CatalogBlock @category-selected="handleCategorySelected" />

      <UiLoader v-if="loading" />
      <component 
        v-show="!loading"
        :is="categoryComponents[activeCategory]" 
        :images="filteredImages[activeCategoryName]" 
        v-if="filteredImages[activeCategoryName]"
      />
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import CallOfNightArt from './shopUnit/CallOfNightArt.vue';
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import TopBar from '@/components/homeUnit/topBar.vue';
import { isTokenAvailable } from '@/utils/authUtils';
import CatalogBlock from './shopUnit/catalog.vue';
import useImageStore from '@/stores/useImageStore';
import ContactUs from '@/services/contact.vue';
import FfArt from './shopUnit/fireForce.vue';
import MhaArt from './shopUnit/mhaArt.vue';
import AllArt from './shopUnit/allArt.vue';
import JjkArt from './shopUnit/jjkArt.vue';
import SdArt from './shopUnit/sdArt.vue';
import UiLoader from '@/ui/loader.vue';
import { ref, onMounted, computed } from 'vue';

export default {
  name: 'ArtShop',
  components: {
    CallOfNightArt,
    CatalogBlock,
    SiteHeader,
    SiteFooter,
    ContactUs,
    TopBar,
    AllArt,
    JjkArt,
    FfArt,
    MhaArt,
    SdArt,
    UiLoader,
  },
  setup() {
    const { filteredImages, fetchImages } = useImageStore();
    const activeCategory = ref('All');
    const tokenExists = isTokenAvailable();

    const categoryComponents = {
      All: AllArt,
      JJK: JjkArt,
      FF: FfArt,
      CON: CallOfNightArt,
      MHA: MhaArt,
      SD: SdArt,
    };

    const categoryNames = {
      'All': 'All',
      'JJK': 'Jujutsu Kaisen',
      'FF': 'Fire Force',
      'CON': 'Call of Night',
      'MHA': 'My Hero Academia',
      'SD': 'Sakamoto Days',
    };

    const activeCategoryName = computed(() => {
      return categoryNames[activeCategory.value] || 'All';
    });

    const loading = ref(true); // Изначально состояние загрузки - true

    const loadImages = async () => {
      loading.value = true; // Активируем состояние загрузки перед фетчем
      await fetchImages(); // Загружаем изображения
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Задержка 5 секунд для анимации
      loading.value = false; // Деактивируем состояние загрузки
    };

    onMounted(() => {
      loadImages(); // Загружаем изображения при монтировании компонента
    });

    const handleCategorySelected = (category) => {
      activeCategory.value = category; // Меняем категорию
      // Загрузку изображений не вызываем, так как они передаются через пропсы
    };

    return {
      activeCategory,
      filteredImages,
      tokenExists,
      handleCategorySelected,
      categoryComponents,
      activeCategoryName,
      loading
    };
  },
};
</script>

<style scoped>
.store {
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  font-family: var(--text-font-family);
  font-optical-sizing: var(--text-font-optical-sizing);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  gap: 1rem;
}
</style>
