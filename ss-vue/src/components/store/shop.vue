<template>
  <div>
    <SiteHeader />
    <div class="store">
      <ContactUs/>
      <TopBar />
      <CatalogBlock @category-selected="handleCategorySelected" />
      <AllArt v-show="activeCategory === 'All'"/>
      <JjkArt v-show="activeCategory === 'JJK'"/>
      <FfArt v-show="activeCategory === 'FF'"/>
      <CallOfNightArt v-show="activeCategory === 'CON'"/>
      <MhaArt v-show="activeCategory === 'MHA'"/>
      <SdArt v-show="activeCategory === 'SD'"/>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import CallOfNightArt from './shopUnit/CallOfNightArt.vue';
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import TopBar from '@/components/homeUnit/topBar.vue';
import CatalogBlock from './shopUnit/catalog.vue';
import ContactUs from '@/services/contact.vue';
import FfArt from './shopUnit/fireForce.vue';
import AllArt from './shopUnit/allArt.vue';
import JjkArt from './shopUnit/jjkArt.vue';
import SdArt from './shopUnit/sdArt.vue';
import MhaArt from './shopUnit/mhaArt.vue';

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
    };
  },
  methods: {
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
