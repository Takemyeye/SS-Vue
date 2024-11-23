<template>
  <div class="main-block">
    <div class="orders">
      <h1>Recent Orders</h1>
      <OrdersAdmin
        id="Order"
        name="Customer"
        total="Total"
        date="Date"
        status="Status"
      />
      <div v-if="orders.length">
        <OrdersAdmin
          v-for="(order, index) in orders"
          :key="index"
          :id="order.orderId || 'N/A'"
          :name="order.nickName || 'Anonymous'"
          :total="`$ ${order.totalPrice}` || '0.00'"
          :date="order.createdAt || 'N/A'"
          :status="order.process || 'Pending'"
        />
      </div>
    </div>
    <StatisticsAdmin :orders="orders" />
  </div>
</template>

<script>
import OrdersAdmin from './blockAdmin.vue';
import { ref, onMounted } from 'vue';
import StatisticsAdmin from './grafics/statisticsOrders.vue';

export default {
  name: 'DashboardMain',
  components: {
    StatisticsAdmin,
    OrdersAdmin,
  },
  setup() {
    const orders = ref([]);

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (response.ok) {
          orders.value = await response.json();
        } else {
          console.error('Error fetching orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    onMounted(fetchOrders);

    return {
      orders,
    };
  },
};
</script> 

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .orders {
    width: 50%;
    height: 40vh;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.150);
    padding: 2.5%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: 8px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
    gap: 1rem;
  }

</style>