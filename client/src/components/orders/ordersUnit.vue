<template>
    <div class="process">
      <OrdersItem v-if="orders.length > 0" :orders="orders" /> 
      <OrdersElse v-else />
    </div>
  </template>
  
  <script>
  import OrdersItem from './unit/item';
  import OrdersElse from './unit/else';
  
  export default {
    name: 'OrdersUnit',
    components: {
      OrdersElse,
      OrdersItem,
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
  
        fetch('https://ss-vue-vbac.onrender.com/api/process', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            this.orders = data;
          } else {
            this.orders = [];
          }
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
          this.orders = [];
        });
      }
    },
    mounted() {
      this.fetchOrders();
    }
  }
  </script>  

<style scoped>
.process {
    width: 100%;
    min-height: calc(90vh - 1px );
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-bottom: 5rem;
    gap: 1rem;
}

</style>
