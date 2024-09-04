<template>
  <div>
    <SiteHeader />
    <div class="store">
      <TopBar />
      <CatalogBlock @category-selected="handleCategorySelected" />
      <AllArt v-if="activeCategory === 'All'"/>
      <JjkArt v-if="activeCategory === 'JJK'"/>
      <FfArt v-if="activeCategory === 'FF'"/>
      <CallOfNightArt v-if="activeCategory === 'CON'"/>
      <MhaArt v-if="activeCategory === 'MHA'"/>
      <SdArt v-if="activeCategory === 'SD'"/>
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
import FfArt from './shopUnit/fireForce.vue';
import AllArt from './shopUnit/allArt.vue';
import JjkArt from './shopUnit/jjkArt.vue';
import MhaArt from './shopUnit/mhaArt.vue';
import SdArt from './shopUnit/sdArt.vue';

export default {
  name: 'ArtShop',
  components: {
    SiteHeader,
    TopBar,
    CatalogBlock,
    AllArt,
    JjkArt,
    FfArt,
    CallOfNightArt,
    MhaArt,
    SdArt,
    SiteFooter,
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
