<script>

  import SiteHeader from './header/header.vue';
  import SiteFooter from './footer/footer.vue';
  import TopBar from './homeUnit/topBar.vue';
import MainPanel from './homeUnit/mainPanel.vue';

  export default {
    name: 'HomePage',
    components: {
      SiteHeader,
      SiteFooter,
      MainPanel,
      TopBar,
    }
  };

</script>


<template>

  <SiteHeader/> 
  <main>
    <TopBar/>
    <MainPanel/>
  </main>
  <SiteFooter/>
  
</template>


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