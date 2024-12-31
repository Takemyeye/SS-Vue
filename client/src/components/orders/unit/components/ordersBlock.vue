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
      v-for="item in orders"
      :key="item.id"
      :id="item.orderId"
      :date="formatDate(item.createdAt)"
      :style="styleStatus(item.process)" 
      :total="item.totalPrice"
      :items="item.cartItems.length"
      payment="Fisic"
      :status="item.process"
      :type="item.digital ? 'digital' : 'normal'"
      :trash="true"
    >
      <UiBadge title="delete" styleBadge="badge4" style="width: fit-content;"/>
    </OrdersUnit>
  </div>
</template>

<script>
import OrdersUnit from './unit/ordersUnit.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'OrdersBlock',
  components: {
    OrdersUnit,
    UiBadge,
  },
  props: {
    orders: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    },
    styleStatus(status) {
      return status === 'Processing' ? 'container container1' : 'container container2';
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
  }
</style>