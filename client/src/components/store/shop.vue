<template>
  <div>
    <SiteHeader />
    <div class="store">
      <ContactUs v-if="tokenExists" />
      <TopBar :showContainer="false" />
      <CatalogBlock @category-selected="handleCategorySelected" />

      <UiLoader v-if="loading" />

      <component
        :is="categoryComponents[activeCategory]"
        :key="activeCategory"
        v-if="!loading && filteredImages[activeCategoryName] && filteredImages[activeCategoryName]?.length > 0"
        :images="filteredImages[activeCategoryName]"
      />
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CallOfNightArt from './shopUnit/CallOfNightArt.vue';
import SiteHeader from '@/components/header/header.vue';
import TopBar from '@/components/homeUnit/topBar.vue';
import useImageStore from '@/stores/useImageStore';
import CatalogBlock from './shopUnit/catalog.vue';
import ContactUs from '@/services/contact.vue';
import FfArt from './shopUnit/fireForce.vue';
import MhaArt from './shopUnit/mhaArt.vue';
import AllArt from './shopUnit/allArt.vue';
import JjkArt from './shopUnit/jjkArt.vue';
import SdArt from './shopUnit/sdArt.vue';
import UiLoader from '@/ui/loader.vue';

export default {
  name: 'ArtShop',
  components: {
    CallOfNightArt,
    CatalogBlock,
    SiteHeader,
    ContactUs,
    TopBar,
    AllArt,
    JjkArt,
    FfArt,
    MhaArt,
    SdArt,
    UiLoader,
  },
  props: ['category'],
  setup(props) {
    const { filteredImages, fetchImages, hasImagesInCache, filterImagesByCategory } = useImageStore();
    
    const tokenExists = ref(!!localStorage.getItem('token'));

    const route = useRoute();
    const router = useRouter();

    const activeCategory = ref(props.category || 'all');

    const categoryComponents = {
      all: AllArt,
      jjk: JjkArt,
      ff: FfArt,
      con: CallOfNightArt,
      mha: MhaArt,
      sd: SdArt,
    };

    const categoryNames = {
      all: 'All',
      jjk: 'Jujutsu Kaisen',
      ff: 'Fire Force',
      con: 'Call of Night',
      mha: 'My Hero Academia',
      sd: 'Sakamoto Days',
    };

    const activeCategoryName = computed(() => categoryNames[activeCategory.value] || 'All');

    const loading = ref(true);

    const loadImages = async () => {
      loading.value = true;
      if (!hasImagesInCache()) {
        await fetchImages();
      } else {
        filterImagesByCategory();
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      loading.value = false;
    };

    onMounted(() => {
      loadImages();
    });

    watch(() => route.params.category, (newCategory) => {
      console.log("Новый category из URL:", newCategory);
      if (newCategory) {
        activeCategory.value = newCategory.toLowerCase();
      }
    });

    const handleCategorySelected = (category) => {
      activeCategory.value = category.toLowerCase();
      router.push({ name: 'Shop', params: { category: category.toLowerCase() } });
    };

    return {
      activeCategory,
      filteredImages,
      tokenExists,
      handleCategorySelected,
      categoryComponents,
      activeCategoryName,
      loading,
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
