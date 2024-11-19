<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="orders-block">
      <div class="text">
        <h1>Orders</h1>
        <h5>Manage your store's orders</h5>
      </div>
      <div class="filter">
        <h5>хуй</h5>
      </div>
      <OrdersAdmin
        style="grid-template-columns: repeat(6, 1fr);"
        order="Order ID"
        customer="Customer"
        total="Total"
        status="Status"
        date="Date"
        actions="Actions"
      />

      <div v-if="orders.length">
        <OrdersAdmin
          v-for="(order, index) in orders"
          :key="index"
          :order="order.orderId || 'N/A'"
          :customer="order.nickName || 'Anonymous'"
          :total="`$ ${order.totalPrice}` || '0.00'"
          :status="order.process || 'Pending'"
          :date="order.date || 'N/A'"
          :trash="true"
        >
          <UiBadge 
            style="cursor: pointer; width: fit-content;"
            :styleBadge="`badge4`"
            :title="`Delete`"
            @click="deleteOrder(order.orderId)"
          >
            <font-awesome-icon icon="trash" style="color: hsl(358, 100%, 69%); font-size: small;" />
          </UiBadge>
        </OrdersAdmin>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from '../serchAdmin.vue';
import OrdersAdmin from './unit/orders.vue';
import UiBadge from '@/ui/badge.vue';
import { ref, onMounted } from 'vue';

  export default {
    name: 'OrdersPanel',
    components: {
      HeaderAdmin,
      OrdersAdmin,
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
            console.error('Error fetching orders');
          }
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      const deleteOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                orders.value = orders.value.filter(order => order.orderId !== orderId);
            } else {
                const errorData = await response.json();
                console.error('Error deleting order:', errorData);
            }
        } catch (error) {
            console.error('Error deleting order:', error);
        }
      };

      onMounted(fetchOrders);

      return {
        deleteOrder,
        orders,
      };
    },
  }
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

  .orders-block {
    width: 90%;
    height: 90%;
    padding: 0 2.5%;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.150);
    border-radius: 8px;
  }
</style>
