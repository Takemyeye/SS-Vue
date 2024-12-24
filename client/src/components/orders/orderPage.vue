<template>
  <SiteHeader /> 
  <div class="order">
    <OrdersPanel />
  </div>
  <SiteFooter />
</template>

<script>
import OrdersPanel from './unit/ordersPanel.vue';
import SiteHeader from '../header/header.vue';
import SiteFooter from '../footer/footer.vue';

  export default {
    name: 'OrderPage',
    components: {
      OrdersPanel,
      SiteHeader,
      SiteFooter,
    }
  }
</script>

<style scoped>
  .order {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
  }
</style>