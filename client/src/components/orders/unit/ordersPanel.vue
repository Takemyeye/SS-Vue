<template>
    <div class="orders">
      <TopPanel :orders="orders" />
      <OrdersBlock :orders="orders"/>
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
          .then((response) => response.json())
          .then((data) => {
            this.orders = Array.isArray(data) ? data : [];
          })
          .catch((error) => {
            console.error('Error fetching orders:', error);
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
  </style>
  