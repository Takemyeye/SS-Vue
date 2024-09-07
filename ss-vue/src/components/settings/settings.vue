<template>
  <SiteHeader/>
  <div class="settings">

  </div>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'

  export default {
    name: 'SettingsBlock',
    components: {
      SiteHeader
    }
  }
</script>

<style scoped>
  .settings {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
</style>