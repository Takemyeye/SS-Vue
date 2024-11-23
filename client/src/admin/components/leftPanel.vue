<template>
  <nav>
    <div class="admin-title">
      <h1 style="color: white; font-size: 1.5rem;">Shop Admin</h1>
    </div>
    <div class="navigate">
      <LeftPanelUnit url="/admin" icon="fa-solid fa-house" text="DashBoard"/>
      <LeftPanelUnit url="/admin/orders" icon="fa-solid fa-cart-shopping" text="Orders"/>
      <LeftPanelUnit url="/admin/products" icon="fa-solid fa-boxes-stacked" text="Products"/>
      <LeftPanelUnit url="/admin/customers" icon="fa-solid fa-users" text="Customers"/>
      <LeftPanelUnit url="/admin/providers" icon="fa-solid fa-brain" text="Providers"/>
      <LeftPanelUnit url="/admin/comments" icon="fa-regular fa-comment" text="Comment"/>
    </div>
  </nav>
</template>

<script>
import LeftPanelUnit from './unit/leftPanelUnit.vue';

export default {
  name: 'LeftPanel',
  components: {
    LeftPanelUnit,
  },
};
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
  }
</style>