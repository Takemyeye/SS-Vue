<template>

  <SiteHeader/> 
  <main>
    <ContactUs/>
    <TopBar/>
    <FeaturedPanel/>
    <EmailPanel/>
  </main>
  <SiteFooter/>
  
</template>

<script>
  import EmailPanel from './homeUnit/emailPanel.vue';
  import FeaturedPanel from './homeUnit/featured.vue';
  import ContactUs from '@/services/contact.vue';
  import SiteHeader from './header/header.vue';
  import SiteFooter from './footer/footer.vue';
  import TopBar from './homeUnit/topBar.vue';

  export default {
    name: 'HomePage',
    components: {
      FeaturedPanel,
      SiteHeader,
      SiteFooter,
      EmailPanel,
      ContactUs,
      TopBar,
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

  <!--    
    <router-link :to="{ name: 'Home' }"> <h1>Home</h1></router-link>
    <router-link :to="{ name: 'About' }"> <h1>About</h1></router-link>
  -->