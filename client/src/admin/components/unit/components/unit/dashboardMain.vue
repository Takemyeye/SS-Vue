<template>
  <div class="main-block">
    <div class="orders">
      <h1>Recent Orders</h1>
      <OrdersAdmin
        order="Order"
        customer="Customer"
        total="Total"
        status="Status"
      />
      <div v-if="orders.length">
        <OrdersAdmin
          v-for="(order, index) in orders"
          :key="index"
          :order="order.orderId || 'N/A'"
          :customer="order.nickName || 'Anonymous'"
          :total="`$ ${order.totalPrice}` || '0.00'"
          :status="order.process || 'Pending'"
        />
      </div>
    </div>
    <WaveAdmin :orders="orders" />
  </div>
</template>

<script>
import OrdersAdmin from './orders.vue';
import { ref, onMounted } from 'vue';
import WaveAdmin from './wave.vue';

export default {
  name: 'DashboardMain',
  components: {
    OrdersAdmin,
    WaveAdmin,
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
    scrollbar-width: 6px; 
    scrollbar-color: #3b3b3b #ffffff; 
    gap: 1rem;
  }

</style>