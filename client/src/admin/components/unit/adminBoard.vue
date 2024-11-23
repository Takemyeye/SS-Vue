<template>
  <div class="admin-board">
    <DashboardAdmin v-if="currentRoute === '/admin'" />
    <OrdersPanel v-if="currentRoute === '/admin/orders'" />
    <ProductsAdmin v-if="currentRoute === '/admin/products'" />
    <ProvidersAdmin v-if="currentRoute === '/admin/providers'" />
    <CustomersAdmin v-if="currentRoute === '/admin/customers'"/>
    <CommentAdmin v-if="currentRoute === '/admin/comments'"/>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import DashboardAdmin from './components/dashboard.vue';
import ProvidersAdmin from './components/providers.vue';
import CustomersAdmin from './components/customers.vue';
import ProductsAdmin from './components/product.vue';
import CommentAdmin from './components/comment.vue';
import OrdersPanel from './components/orders.vue';

export default {
  name: 'AdminBoard',
  components: {
    DashboardAdmin,
    ProvidersAdmin,
    CustomersAdmin,
    ProductsAdmin,
    CommentAdmin,
    OrdersPanel,
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
    background-color: rgba(108, 137, 163, 0.150);

  }
</style>