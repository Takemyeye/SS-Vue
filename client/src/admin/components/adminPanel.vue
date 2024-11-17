<template>
  <div class="main">
    <AdminBoard />
  </div>
</template>

<script>
import AdminBoard from './unit/adminBoard.vue';

  export default {
    name: 'AdminPanel',
    components: {
      AdminBoard,
    }
  }
</script>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(108, 137, 163, 0.103);
  }
</style>