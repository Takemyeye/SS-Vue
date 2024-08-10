<template>
  <SiteHeader/> 
  <main>
     <h1>HomePage</h1>
     <router-link :to="{ name: 'About' }"> <h1>About</h1></router-link>
  </main>
  <SiteFooter/>
</template>

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


  <!--    
    <router-link :to="{ name: 'Home' }"> <h1>Home</h1></router-link>
    <router-link :to="{ name: 'About' }"> <h1>About</h1></router-link>
  -->