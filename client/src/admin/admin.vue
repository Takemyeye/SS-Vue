<template>
  <div class="admin">
    <LeftPanel/>
    <AdminPaenl/>
  </div>
</template>

<script>
import AdminPaenl from './components/adminPanel.vue';
import LeftPanel from './components/leftPanel.vue';

  export default {
    name: 'AdminPage',
    components: {
      AdminPaenl,
      LeftPanel,
    }
  }
</script>

<style scoped>
  .admin {
    font-family: "Sora", serif;
    font-optical-sizing: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
</style>