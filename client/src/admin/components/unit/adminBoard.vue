<template>
  <div class="admin-board">
    <DashboardAdmin />
  </div>
</template>

<script>
import DashboardAdmin from './components/dashboard.vue';

  export default {
    name: 'AdminBoard',
    components: {
      DashboardAdmin
    }
  }
</script>

<style scoped>
  .admin-board {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>