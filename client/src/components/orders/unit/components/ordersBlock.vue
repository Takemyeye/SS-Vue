<template>
  <div class="orders-block">
    <OrdersUnit 
      id="ID"
      
    />
  </div>
</template>

<script>
import OrdersUnit from './unit/ordersUnit.vue';

  export default {
    name: 'OrdersBlock',
    components: {
      OrdersUnit
    },
    props: {
      orders: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
  .orders-block {
    width: calc(100% - 2rem - 2px);
    height: 62vh;
    max-height: 62vh;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.150);
  }
</style>