<template>
  <div class="top-panel">
    <div class="container">
      <div class="status">

      </div>
      <div class="payment">
        
      </div>
    </div>
    <BlockUnit :orders="orders"/>
  </div>
</template>

<script>
import BlockUnit from './unit/blockUnit.vue';

export default {
  name: 'TopPanel',
  components: {
    BlockUnit,
  },
  props: {
    orders: {
      type: Array,
      required: true,
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}

</style>
