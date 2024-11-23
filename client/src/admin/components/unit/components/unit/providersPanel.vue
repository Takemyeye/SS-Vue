<template>
    <div class="providers-block">
      <div class="providers">
        <h2>Acces with OAuth2</h2>
        <OrdersAdmin id="Mettods" name="Type" total="Bug" date="Last Work" status="Status" actions="Actions" />
        <OrdersAdmin id="Google" name="OAuth2" total="~~" date="20/10/2024" status="Active" actions="~~" />
        <OrdersAdmin id="Discord" name="OAuth2" total="~~" date="20/10/2024" status="Active" actions="~~" />
        <OrdersAdmin id="GitHub" name="OAuth2" total="~~" date="20/10/2024" status="Active" actions="~~" />
      </div>
      <StatProviders />
    </div>
  </template>
  
<script>
import StatProviders from './grafics/statisticsProviders.vue';
import OrdersAdmin from './blockAdmin.vue';
  
  export default {
    name: 'ProvidersPanel',
    components: {
      StatProviders,
      OrdersAdmin,
    },
  };
</script>  

<style scoped>
    .providers-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

    .providers {
        width: 50%;
        height: 40vh;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.150);
        padding: 2.5%;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        scrollbar-width: 8px;
        scrollbar-color: rgb(158, 158, 158) white;
        scroll-behavior: smooth;
        gap: 1rem;
    }
</style>