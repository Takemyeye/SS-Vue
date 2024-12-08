<template>
  <header>
    <div class="container">
      <router-link to="/">
        <h1>SoulSwap</h1>
      </router-link>
      <NavHeader />
      <div class="unit">
        <UserHeader />
        <CartHeader />
      </div>
    </div>
  </header>
</template>

<script>
import UserHeader from './headerUnit/userHeader.vue';
import CartHeader from './headerUnit/cartHeader.vue';
import NavHeader from './headerUnit/navHeader.vue';

  export default {
    name: 'SiteHeader',
    components: {
      UserHeader,
      CartHeader,
      NavHeader,
    }
  }
</script>

<style scoped>
  header {
    position: sticky;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    top: 0;
    z-index: 10;
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .unit {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
}

</style>