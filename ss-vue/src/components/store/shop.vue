<template>
  <div>
    <SiteHeader />
    <div class="store">
      <ContactUs v-if="tokenExists"/>
      <TopBar />
      <CatalogBlock @category-selected="handleCategorySelected" />
      <AllArt v-show="activeCategory === 'All'" :images="filteredImages['All']"/>
      <JjkArt v-show="activeCategory === 'JJK'" :images="filteredImages['Jujutsu Kaisen']"/>
      <FfArt v-show="activeCategory === 'FF'" :images="filteredImages['Fire Force']"/>
      <CallOfNightArt v-show="activeCategory === 'CON'" :images="filteredImages['Call of Night']"/>
      <MhaArt v-show="activeCategory === 'MHA'" :images="filteredImages['My Hero Academia']"/>
      <SdArt v-show="activeCategory === 'SD'" :images="filteredImages['Sakamoto Days']"/>
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
import { ref, onMounted } from 'vue';

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
  },
  setup() {
    const { filteredImages, fetchImages } = useImageStore();
    const activeCategory = ref('All');
    const tokenExists = isTokenAvailable();

    onMounted(() => {
      if (filteredImages.value['All'].length === 0) {
        fetchImages();
      }
    });

    const handleCategorySelected = (category) => {
      activeCategory.value = category;
    };

    return {
      activeCategory,
      filteredImages,
      tokenExists,
      handleCategorySelected
    };
  },
};
</script>

<style scoped>
.store {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--text-font-family);
  font-optical-sizing: var(--text-font-optical-sizing);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  gap: 1rem;
}
</style>
