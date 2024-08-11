<script>

  import SiteHeader from './header/header.vue';
  import SiteFooter from './footer/footer.vue';

  export default {
    name: 'HomePage',
    components: {
      SiteHeader,
      SiteFooter
    }
  };

</script>


<template>

  <SiteHeader/> 
  <main>
  </main>
  <SiteFooter/>
  
</template>


<style>

  main {
    width: 100%;
    height: 90vh;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
  }

</style>

  <!--    
    <router-link :to="{ name: 'Home' }"> <h1>Home</h1></router-link>
    <router-link :to="{ name: 'About' }"> <h1>About</h1></router-link>
  -->