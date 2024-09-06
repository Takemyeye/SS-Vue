<template>
  <div class="data">
    <h2>Orders</h2>
    <div v-for="order in orders" :key="order.createdAt" class="container">
      <div class="orderImg">
        <font-awesome-icon icon="image" />
        <div v-for="item in order.cartItems" :key="item.id" class="imageItem">
          <img :src="`/art/${item.image}`" :alt="item.title" class="itemImage" />
        </div>
      </div>
      <div class="Price">
        <font-awesome-icon icon="money-bill" />
        <h4>{{ order.totalPrice }} € </h4>
      </div>
      <div class="country">
        <font-awesome-icon icon="city" />
        <h4>{{ order.country }}</h4>
      </div>
      <div class="createdAt">
        <font-awesome-icon icon="clock" />
        <h4>{{ formatDate(order.createdAt) }}</h4>
      </div>
      <div class="userData">
        <font-awesome-icon icon="user" />
        <div class="unit">
          <img :src="order.userAvatar" alt="AvatarUser" class="userAvatar" />
          <h4>{{ order.userName }}</h4>
        </div>
        <h4>{{ order.userEmail }}</h4>
      </div>
      <UiBadge 
        :styleBadge="`badge4`"
        :title="`Delete`"
        @click="deleteOrder(order.token, order.createdAt)">
        <font-awesome-icon icon="trash" style="color: hsl(358, 100%, 69%); font-size: small;" />
      </UiBadge>
    </div>
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'DataUser',
  components: {
    UiBadge,
  },
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

    const deleteOrder = async (token, createdAt) => {
  try {
    const response = await fetch(`http://localhost:3000/api/orders/${token}/${createdAt}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      orders.value = orders.value.filter(order => !(order.token === token && order.createdAt === createdAt));
      console.log('Order deleted successfully');
    } else {
      console.error('Error deleting order');
    }
  } catch (error) {
    console.error('Error deleting order:', error);
  }
};


    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    onMounted(fetchOrders);

    return {
      orders,
      formatDate,
      deleteOrder,
    };
  }
};
</script>

<style scoped>
.data {
  width: 90%;
  height: 70vh;
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
.Price, .createdAt, .country, .orderImg, .userData {
  height: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  font-size: larger;
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
.itemImage {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
}
h4 {
  text-align: center;
}
.unit {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}
.userAvatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.btn {
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
}
</style>
