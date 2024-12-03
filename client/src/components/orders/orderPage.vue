<template>
  <SiteHeader /> 
  <div class="order">
    <OrdersPanel />
  </div>
</template>

<script>
import OrdersPanel from './unit/ordersPanel.vue';
import SiteHeader from '../header/header.vue';

  export default {
    name: 'OrderPage',
    components: {
      OrdersPanel,
      SiteHeader,
    }
  }
</script>

<style scoped>
  .order {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
</style>