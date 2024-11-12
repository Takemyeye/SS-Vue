<template>
  <div class="admin">
    <LeftPanel/>
  </div>
</template>

<script>
import LeftPanel from './components/leftPanel.vue';

  export default {
    name: 'AdminPage',
    components: {
      LeftPanel
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