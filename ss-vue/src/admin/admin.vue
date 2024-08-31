<template>
  <SiteHeader/>
  <div class="admin">
    
  </div>
</template> 

<script>
import SiteHeader from '@/components/header/header.vue'
  export default {
    name: 'AdminPanel',
    components: {
      SiteHeader,
    }
  }
</script>

<style scoped>
  .admin {
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
</style>
