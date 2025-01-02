<template>
  <div class="orders">
    <div class="text" style="align-items: center;">
      <h1 class="gradient-text">Orders</h1>
      <h5 class="gradient-text">Manage your orders efficiently</h5>
    </div>
    <TopPanel :orders="orders" @updateFilters="applyFilters" />
    <OrdersBlock :orders="filteredOrders" />
  </div>
</template>

<script>
import OrdersBlock from './components/ordersBlock.vue';
import TopPanel from './components/topPanel.vue';

export default {
  name: 'OrdersPanel',
  components: {
    OrdersBlock,
    TopPanel,
  },
  data() {
    return {
      orders: [],
      filteredOrders: [],
      filters: {
        status: 'All',
      },
    };
  },
  methods: {
    fetchOrders() {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }

      fetch('http://localhost:3000/api/process', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          this.orders = Array.isArray(data) ? data : [];
          this.applyFilters(this.filters);
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    },
    applyFilters(filters) {
      this.filters = filters;
      this.filteredOrders = this.orders.filter(order => {
        const matchesStatus = filters.status === 'All' || order.process === filters.status;
        return matchesStatus;
      });
    },
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>
  
  <style scoped>
  .orders {
    width: 80%;
    padding: 2.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .gradient-text {
    background: linear-gradient(90deg, #33a0bb, #213fe7);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
  </style>
  