<template>
  <div class="container">
    <div class="text">
      <h4>{{ title }}</h4>
      <h5>{{ subtitle }}</h5>
    </div>
    <UiSwitch/>
  </div>
</template>

<script>
import UiSwitch from '@/ui/switch.vue';

  export default {
    name: 'NotificationUnit',
    components: {
      UiSwitch
    },
    props: {
      title: {
        type: String,
        Required: true,
        default: ''
      },
      subtitle: {
        type: String,
        Required: true,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h4 {
    color: black;
    font-weight: 600;
  }
</style>
