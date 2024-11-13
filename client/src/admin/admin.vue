<template>
  <div class="admin">
    <LeftPanel/>
    <AdminPanel/>
  </div>
</template>

<script>
import AdminPanel from './components/adminPanel.vue';
import LeftPanel from './components/leftPanel.vue';

  export default {
    name: 'AdminPage',
    components: {
      AdminPanel,
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