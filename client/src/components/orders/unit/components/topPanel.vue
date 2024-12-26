<template>
  <div class="top-panel">
    <div class="container">
      <div class="status">

      </div>
      <div class="payment">
        
      </div>
    </div>
    <div class="container">
      <UiBlock 
        title="Total Orders" 
        icon="fa-solid fa-brain" 
        :number="totalOrders" 
      />
      <UiBlock 
        title="Revenue" 
        icon="fa-solid fa-dollar-sign" 
        :number="totalRevenue + '$'" 
      />
      <UiBlock 
        title="Processing"  
        icon="fa-solid fa-credit-card" 
        :number="processingOrdersCount" 
      />
      <UiBlock 
        title="Completed" 
        icon="fa-solid fa-check" 
        :number="'0'"
      />
    </div>
  </div>
</template>

<script>
import UiBlock from '@/ui/block.vue';

export default {
  name: 'TopPanel',
  components: {
    UiBlock,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalOrders() {
      return this.orders.length;
    },
    totalRevenue() {
      return this.orders.reduce((total, order) => total + (order.amount || 0), 0).toFixed(2);
    },
    processingOrdersCount() {
      return this.orders.filter(order => order.process === 'Processing').length;
    },
  },
};
</script>

<style scoped>
.top-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}

.container > .block{
  min-height: 100px;
}
</style>
