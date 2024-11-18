<template>
  <div class="admin-board">
    <DashboardAdmin v-if="currentRoute === '/admin'" />
    <CustomersAdmin v-if="currentRoute === '/admin/customers'" />
    <ProductsAdmin v-if="currentRoute === '/admin/products'" />
    <OrdersAdmin v-if="currentRoute === '/admin/orders'" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import DashboardAdmin from './components/dashboard.vue';
import CustomersAdmin from './components/customers.vue';
import ProductsAdmin from './components/product.vue';
import OrdersAdmin from './components/orders.vue';

export default {
  name: 'AdminBoard',
  components: {
    DashboardAdmin,
    CustomersAdmin,
    ProductsAdmin,
    OrdersAdmin,
  },
  setup() {
    const route = useRoute();

    const currentRoute = computed(() => route.path);

    return {
      currentRoute,
    };
  },
};
</script>


<style scoped>
  .admin-board {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>