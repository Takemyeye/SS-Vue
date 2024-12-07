<template>
  <div class="navigation">
    <NavLink link="/" nav="Home"/>
    <NavLink link="/shop" nav="Shop"/>
    <NavLink link="/cart" nav="Cart"/>
    <NavLink link="/orders" nav="Orders"/>
  </div>
</template>

<script>
import NavLink from './navUnit/unit.vue';

  export default {
    name: 'NavHeader',
    components: {
      NavLink
    }
  }
</script>

<style scoped>
  .navigation {
    display:  flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
</style>