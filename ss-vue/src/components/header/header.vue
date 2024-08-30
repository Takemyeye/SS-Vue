<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <h1>Soul Swap</h1>
      </router-link>
      <NavBar/>
      <RightPanelNavBar/>
    </div>
  </header>
</template>


<script>
import RightPanelNavBar from '@/components/header/headerUnit/navBarPanel.vue';
import NavBar from '@/components/header/headerUnit/nav.vue'

export default {
  name: 'SiteHeader',
  components: {
    NavBar,
    RightPanelNavBar,
  },  
};
</script>

<style scoped>
header {
  width: 100%;
  height: 10vh;
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  background-color: rgb(255, 255, 255);
    z-index: 10;
}

.container {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

</style>
