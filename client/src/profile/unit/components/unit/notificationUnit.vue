<template>
  <div class="container">
    <div class="text">
      <h4>{{ title }}</h4>
      <h5>{{ subtitle }}</h5>
    </div>
    <UiSwitch :toggle="toggleId" @change="handleSwitchChange" />
  </div>
</template>

<script>
import UiSwitch from '@/ui/switch.vue';

export default {
  name: 'NotificationUnit',
  components: {
    UiSwitch,
  },
  props: {
    toggleId: { 
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    handleSwitchChange() {
      this.$emit('switch-change', this.toggleId);
    }
  }
};
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
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h4 {
    color: black;
    font-weight: 600;
  }
</style>
