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
import ContactUs from '@/services/contact.vue';
import FfArt from './shopUnit/fireForce.vue';
import MhaArt from './shopUnit/mhaArt.vue';
import AllArt from './shopUnit/allArt.vue';
import JjkArt from './shopUnit/jjkArt.vue';
import SdArt from './shopUnit/sdArt.vue';

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
  data() {
    return {
      activeCategory: 'All',
      images: [],
      filteredImages: {},
    };
  },
  setup() {
    const tokenExists = (isTokenAvailable());
    return {
      tokenExists,
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await fetch('http://localhost:3000/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.images = data;
        this.filterImagesByCategory();
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    filterImagesByCategory() {
      const categories = [
        'All',
        'Jujutsu Kaisen',
        'Fire Force',
        'Call of Night',
        'My Hero Academia',
        'Sakamoto Days'
      ];
      this.filteredImages = categories.reduce((acc, category) => {
        acc[category] = this.images.filter(image => image.titleAnime === category || category === 'All');
        return acc;
      }, {});
    },
    handleCategorySelected(category) {
      this.activeCategory = category;
    },
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
