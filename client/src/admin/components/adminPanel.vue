<template>
  <div class="main">
    <HeaderAdmin />
    <AdminBoard />
  </div>
</template>

<script>
import HeaderAdmin from './unit/serchAdmin.vue';
import AdminBoard from './unit/adminBoard.vue';

  export default {
    name: 'AdminPanel',
    components: {
      HeaderAdmin,
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