<template>
  <div class="orders-block">
    <OrdersUnit
      :style="'container'" 
      id="ID"
      date="Date"
      total="Total"
      items="Items"
      payment="Payment"
      status="Status"
      type="Type"
      :trash="true"
    >
      <h5>Action</h5>
    </OrdersUnit>
    
    <OrdersUnit 
      v-for="item in filteredOrders"
      :key="item.id"
      :id="item.orderId"
      :date="formatDate(item.createdAt)"
      :style="styleStatus(item.process)" 
      :total="item.totalPrice"
      :items="String(item.cartItems.length)"
      :payment="'fisic'"
      :status="item.process"
      :type="item.digital ? 'digital' : 'normal'"
      :trash="true"
    >
      <UiBadge 
        title="Delete" 
        styleBadge="badge4" 
        style="width: fit-content;" 
        @click="deleteOrder(item.orderId)"
      />
    </OrdersUnit>
  </div>
</template>

<script>
import OrdersUnit from './unit/ordersUnit.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'OrdersBlock',
  components: { OrdersUnit, UiBadge },
  props: {
    orders: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      filteredOrders: [...this.orders],
    };
  },
  methods: {
    applyFilters(filters) {
      this.filteredOrders = this.orders.filter(order => {
        const matchesStatus = filters.status === 'All' || order.process === filters.status;
        const matchesPayment = filters.payment === 'All' || String(order.payment) === filters.payment;
        return matchesStatus && matchesPayment;
      });
    },
    formatDate(date) {
      if (!date) return 'N/A';
      const d = new Date(date);
      return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear().toString().slice(-2)}`;
    },
    styleStatus(status) {
      return status === 'Processing' 
        ? 'container container1' 
        : status === 'Completed' 
        ? 'container container2' 
        : 'container container3';
    },
    async deleteOrder(orderId) {
      try {
        const res = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'Delete' }),
        });
        if (!res.ok) throw new Error('Ошибка при обновлении заказа');
        const updatedOrder = await res.json();
        this.filteredOrders = this.filteredOrders.map(order =>
          order.orderId === updatedOrder.orderId ? updatedOrder : order
        );
      } catch (err) {
        console.error(err);
      }
    },
  },
  watch: {
    orders: {
      immediate: true,
      handler(newOrders) {
        this.filteredOrders = [...newOrders];
      },
    },
  },
};
</script>

<style scoped>
.orders-block {
  width: calc(100% - 2rem - 2px);
  height: 62vh;
  max-height: 62vh;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.150);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: auto;
}

.orders-block::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.orders-block::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px; 
}

.orders-block::-webkit-scrollbar-track {
  background: transparent;
}
</style>
