<template>
  <div class="serch-admin">
    <SerchAdmin />
  </div>
</template>

<script>
import SerchAdmin from './components/serch.vue';

  export default {
    name: 'HeaderAdmin',
    components: {
      SerchAdmin,
    }
  }
</script>

<style scoped>
  .serch-admin {
    width: 95%;
    padding: 2rem 2.5%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.164);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.219);
    border-radius: 8px;
  }

</style>