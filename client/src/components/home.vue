<template>
  <SiteHeader /> 
  <main>
    <ContactUs v-if="tokenExists" />
    <TopBar />
    <FeaturedPanel />
    <FaqBlock />
    <CommentBlock />
    <EmailPanel />
    <OurProcess />
    <FavoriteDrawings />
  </main>
  <SiteFooter />
</template>

<script>
import FavoriteDrawings from './homeUnit/recommended.vue';
import CommentBlock from './homeUnit/commentBlock.vue';
import FeaturedPanel from './homeUnit/featured.vue';
import EmailPanel from './homeUnit/emailPanel.vue';
import OurProcess from './homeUnit/ourPeocess.vue';
import FaqBlock from './homeUnit/faqBlock.vue';
import ContactUs from '@/services/contact.vue';
import SiteHeader from './header/header.vue';
import SiteFooter from './footer/footer.vue';
import TopBar from './homeUnit/topBar.vue';
import { ref, onMounted } from 'vue';

  export default {
    name: 'HomePage',
    components: {
      FavoriteDrawings,
      FeaturedPanel,
      CommentBlock,
      OurProcess,
      SiteHeader,
      SiteFooter,
      EmailPanel,
      ContactUs,
      FaqBlock,
      TopBar,
  },
  setup() {
    const tokenExists = ref(false);

    onMounted(() => {
      tokenExists.value = !!localStorage.getItem('token');
    });

    return {
      tokenExists
    };
  }
};
</script>

<style>

  main {
    width: 100%;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
  }

</style>
