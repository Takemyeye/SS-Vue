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
        v-if="filteredImages[activeCategoryName] && filteredImages[activeCategoryName]?.length" 
        :images="loading ? [] : filteredImages[activeCategoryName]"
      />
    </div>
  </div>
</template>

<script>
import CallOfNightArt from './shopUnit/CallOfNightArt.vue';
import SiteHeader from '@/components/header/header.vue';
import TopBar from '@/components/homeUnit/topBar.vue';
import { isTokenAvailable } from '@/utils/authUtils';
import useImageStore from '@/stores/useImageStore';
import CatalogBlock from './shopUnit/catalog.vue';
import { ref, onMounted, computed } from 'vue';
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
  setup() {
    const { filteredImages, fetchImages, hasImagesInCache, filterImagesByCategory } = useImageStore();
    const tokenExists = isTokenAvailable();
    const activeCategory = ref('All');

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

    const handleCategorySelected = (category) => {
      activeCategory.value = category;
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
