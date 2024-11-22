<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="text">
      <h1>Products</h1>
      <h5>Manage your store's products</h5>
    </div>
    <div class="container-block">
      <UiBlock title="Google" :number="`+  $`" icon="fa-brands fa-google" />
      <UiBlock title="GitHub" :number="`+ `"  icon="fa-brands fa-github"  />
      <UiBlock title="Discord" :number="'a'" icon="fa-brands fa-discord" />
    </div>
  </div>
  
</template>

<script>
import HeaderAdmin from '../serchAdmin.vue';
import UiBlock from '@/ui/block.vue';

  export default {
    name: 'CustomersAdmin',
    components: {
      HeaderAdmin,
      UiBlock
    }
  }
</script>

<style scoped>
  .main-block {
    width: 98%;
    height: 95%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }

  .container-block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4rem;
  }
  .text {
    width: 100%;
    gap: 8px;
    text-align: start;
  }
</style>