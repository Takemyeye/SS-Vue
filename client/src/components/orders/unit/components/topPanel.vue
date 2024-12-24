<template>
  <div class="top-panel">
   <div class="container">
      <div class="status">

      </div>
      <div class="payment">

      </div>
    </div>
    <div class="container">
      <UiBlock title="Total Orders" icon="fa-solid fa-brain" />
      <UiBlock title="Revenue" icon="fa-solid fa-dollar-sign" />
      <UiBlock title="Processing"  icon="fa-solid fa-credit-card" />
      <UiBlock title="Completed" icon="fa-solid fa-check" />
    </div>
  </div>
</template>

<script>
import UiBlock from '@/ui/block.vue';

  export default {
    name: 'TopPanel',
    components: {
      UiBlock
    }
  }
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
</style>