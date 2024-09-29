<template>
  <div class="data">
    <h2 v-if="orders.length > 0">Orders</h2>
    <h2 v-else>No orders</h2>
    <div v-for="order in orders" :key="order.createdAt" class="container">
      <OrderImage :cartItems="order.cartItems" />
      <OrderPrice :totalPrice="order.totalPrice" />
      <OrderCountry :country="order.country" />
      <OrderDate :createdAt="order.createdAt" />
      <OrderUser 
        :userAvatar="order.userAvatar" 
        :userName="order.userName" 
        :userEmail="order.userEmail" />
      <div class="badge-block">
        <UiBadge 
          :styleBadge="`badge3`"
          :title="`Checked`"
          @click="updateOrderStatus(order._id, 'checked')">
          <font-awesome-icon icon="check" style="color: hsl(174, 90%, 41%); font-size: small;" />
        </UiBadge>
        <UiBadge 
          :styleBadge="`badge5`"
          :title="`In Process`"
          @click="updateOrderStatus(order._id, 'processing')">
          <font-awesome-icon icon="microchip" style="color: hsl(39, 90%, 50%); font-size: small;" />
        </UiBadge>
        <UiBadge 
          :styleBadge="`badge4`"
          :title="`Delete`"
          @click="deleteOrder(order.token, order.createdAt)">
          <font-awesome-icon icon="trash" style="color: hsl(358, 100%, 69%); font-size: small;" />
        </UiBadge>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import UiBadge from '@/ui/badge.vue';
import OrderImage from './unit/image.vue';
import OrderPrice from './unit/price.vue';
import OrderCountry from './unit/city.vue';
import OrderDate from './unit/orderData.vue';
import OrderUser from './unit/user.vue';

export default {
  name: 'DataUser',
  components: {
    UiBadge,
    OrderImage,
    OrderPrice,
    OrderCountry,
    OrderDate,
    OrderUser,
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

    const updateOrderStatus = async (orderId, status) => {
      try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ process: status }),
        });

        if (response.ok) {
          const updatedOrder = await response.json();
          orders.value = orders.value.map(order => order._id === updatedOrder._id ? updatedOrder : order);
          console.log('Order status updated successfully');
        } else {
          console.error('Error updating order status');
        }
      } catch (error) {
        console.error('Error updating order status:', error);
      }
    };

    onMounted(fetchOrders);

    return {
      orders,
      deleteOrder,
      updateOrderStatus,
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
.badge-block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
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

</style>
