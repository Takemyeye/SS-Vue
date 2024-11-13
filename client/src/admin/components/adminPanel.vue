<template>
  <div class="main">
    <HeaderAdmin />
  </div>
</template>

<script>
import HeaderAdmin from './unit/serchAdmin.vue';

  export default {
    name: 'AdminPaenl',
    components: {
      HeaderAdmin
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
  }
</style>