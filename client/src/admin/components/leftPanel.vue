<template>
  <nav>
    <div class="admin-title">
      <h1 style="color: white; font-size: 1.5rem;">Shop Admin</h1>
    </div>
    <div class="navigate">
      <LeftPanelUnit>
        <font-awesome-icon icon="fa-solid fa-house" />
        <h5>Dashboard</h5>
      </LeftPanelUnit>
      <LeftPanelUnit>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        <h5>Orders</h5>
      </LeftPanelUnit>
      <LeftPanelUnit>
        <font-awesome-icon icon="fa-solid fa-boxes-stacked" />
        <h5>Products</h5>
      </LeftPanelUnit>
      <LeftPanelUnit>
        <font-awesome-icon icon="users" />
        <h5>Customers</h5>
      </LeftPanelUnit>
    </div>
  </nav>
</template>

<script>
import LeftPanelUnit from './unit/leftPanelUnit.vue';

  export default {
    name: 'LeftPanel',
    components: {
      LeftPanelUnit,
    }
  }
</script>

<style scoped>
  nav {
    width: calc(15% - 1px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.164);
    background-color: white;
  }

  .admin-title {
    width: 100%;
    padding: 1rem 0;
    background-color: rgb(24, 24, 27);
    text-align: center;
  }

  .navigate {
    width: 100%;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
</style>