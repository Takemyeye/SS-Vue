<template>
  <div class="data">
    <h2>Orders</h2>
    <div v-for="order in orders" :key="order.createdAt" class="container">
      <div class="orderImg">
        <font-awesome-icon icon="image" />
        <div v-for="item in order.cartItems" :key="item.id" class="imageItem">
          <h3>{{ item.title }}</h3>
          <h3>{{ getImageName(item.image) }}</h3>
        </div>
      </div>
      <div class="Price">
        <font-awesome-icon icon="money-bill" />
        <h3>{{ order.totalPrice }} € </h3>
      </div>
      <div class="country">
        <font-awesome-icon icon="city" />
        <h3>{{ order.country }}</h3>
      </div>
      <div class="createdAt">
        <font-awesome-icon icon="clock" />
        <h3>{{ formatDate(order.createdAt) }}</h3>
      </div>
      <div class="userData">
        <font-awesome-icon icon="user" />
        <div class="unit">
          <img :src="order.userAvatar" alt="AvatarUser">
          {{ order.userName }}
        </div>
        <h3>{{ order.userEmail }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'DataUser',
  setup() {
    const orders = ref([]);

    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (response.ok) {
          orders.value = await response.json();
        } else {
          console.error('Ошибка при получении данных заказов');
        }
      } catch (error) {
        console.error('Ошибка при получении данных заказов:', error);
      }
    };

    const getImageName = (imageName) => {
      return imageName;
    };

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    onMounted(fetchOrders);

    return {
      orders,
      getImageName,
      formatDate,
    };
  }
};
</script>

<style scoped>
.data {
  width: 90%;
  height: 60vh;
  overflow-y: auto;
  scrollbar-width: 16px;
  scrollbar-color: rgb(34, 34, 34) black;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.315);
  border-radius: 8px;
  padding: 1rem 0;
}
.container {
  width: 90%;
  min-height: 200px;
  max-height: 200px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.315);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 2.5%;
}
.Price, .createdAt, .country, .orderImg, .userData{
  height: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  gap: 1rem;
}
.orderImg {
  height: 90%;
  width: 150px;
  overflow-y: auto;
  scrollbar-width: 16px;
  scrollbar-color: rgb(34, 34, 34) black;
}
.imageItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  text-align: center;
}
img {
  width: 42px;
  height: 42px;
  border-radius: 40px;
}
</style>
