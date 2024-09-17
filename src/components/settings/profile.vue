<template>
  <SiteHeader/>
  <div class="profile">

  </div>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'

  export default {
    name: 'ProfileBlock',
    components: {
      SiteHeader
    }
  }
</script>

<style scoped>
  .profile {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
</style>