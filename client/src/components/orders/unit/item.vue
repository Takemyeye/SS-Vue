<template>
  <div class="container">
    <h1> Orders</h1>
    <CatalogOrders @sort-orders="sortOrders" />
    <div v-for="(order) in sortedOrders" :key="order._id" class="order-item">
      <div class="information">
        <h2 style="padding: 2.5rem 0">Order - {{ formatDate(order.createdAt) }}</h2>
        <h3>Total Price: {{ getTotalPrice(order.cartItems).toFixed(2) }} $</h3>
        <UiBadge 
          style="white-space: nowrap; position: absolute; right: 0;" 
          :styleBadge="order.process === 'Checked' ? 'badge3' : 'badge5'"
          :title="order.process" />
      </div>
      <div class="wrapper">
        <div v-for="item in order.cartItems" :key="item.id" class="data">
          <div class="image">
            <img :src="`/art/${item.image}`" alt="Product Image" />
          </div>
          <div class="description">
            <UiBadge style="white-space: nowrap;" :styleBadge="'badge1'" :title="item.title" />
            <h5>{{ item.subtitle }}</h5>
            <h3>Price: ${{ item.price.toFixed(2) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogOrders from './catalogOrder.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'OrdersItem',
  components: {
    CatalogOrders,
    UiBadge,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortByTime: 'newest',
      sortByStatus: 'all',
    };
  },
  computed: {
    sortedOrders() {
      const ordersCopy = [...this.orders];

      if (this.sortByTime === 'newest') {
        ordersCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else {
        ordersCopy.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }

      if (this.sortByStatus !== 'all') {
        return ordersCopy.filter(order => order.process.toLowerCase() === this.sortByStatus);
      }

      return ordersCopy;
    },
  },
  methods: {
    sortOrders({ sortByTime, sortByStatus }) {
      this.sortByTime = sortByTime;
      this.sortByStatus = sortByStatus;
    },
    getTotalPrice(cartItems) {
      return cartItems.reduce((total, item) => total + item.price, 0);
    },
    formatDate(date) {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<style scoped>

.container {
    width: 80%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding-top: 1rem;
    gap: 1rem;
    animation: fadeInUp 0.5s ease-in-out forwards;
}

.order-item {
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.144);    
    width: 100%;
    padding: 8px 1rem;    
    border-radius: 1rem;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
}

.wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1rem
}

.data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: row;
    gap: 10%;
}

.description {
    max-width: 150px;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

h3 {
    color: black;
}

.information {
  position: relative;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}

@media all and ( max-width: 1900px) {
   .wrapper {
        grid-template-columns: repeat(3, 1fr);
   }
   .description {
        width: 150px;
   }
}

@media all and ( max-width: 1440px) {
    .wrapper {
        grid-template-columns: repeat(2, 1fr);
   }
}

@media all and ( max-width: 1024px) {
    img {
        width: 150px;
        height: 150px;
    }
}

@media all and ( max-width: 768px) {
    .wrapper {
        grid-template-columns: repeat(1, 1fr);
   }
   .description {
        width: 300px;
   }
   .information {
    flex-direction: column;
    align-items: start;
    justify-content: center;
   }
}

@media all and ( max-width: 768px) {
    img {
        width: 120px;
        height: 120px;
    }
}
</style>