<template>
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
      :number="completedOrdersCount"
    />
  </div>
</template>

<script>
import UiBlock from '@/ui/block.vue';

  export default {
    name: 'BlockUnit',
    components: {
      UiBlock,
    },
    props: {
      orders: {
        type: Array,
        required: true
      }
    },
    computed: {
      totalOrders() {
        return this.orders.length;
      },
      totalRevenue() {
        return this.orders.reduce((total, order) => total + (order.totalPrice || 0), 0).toFixed(2);
      },
      processingOrdersCount() {
        return this.orders.filter(order => order.process === 'Processing').length;
      },
      completedOrdersCount() {
        return this.orders.filter(order => order.process === 'Completed').length;
      },
    },
  }
</script>

<style scoped>

  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 1rem;
  }

  .container > .block {
    min-height: 100px;
  }
  
  @media all and (max-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media all and (max-width: 425px) {
    .container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    .container > .block {
      min-height: 60px;
    }
  }

</style>
