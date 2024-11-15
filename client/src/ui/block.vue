<template>
  <div class="block">
    <UiBadge :styleBadge="styleBadge" :title="title" />
    <h2>{{ number }}</h2>
  </div>
</template>

<script>
import UiBadge from './badge.vue'

export default {
  name: 'UiBlock',
  components: {
    UiBadge,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    number: {
      type: Number,
      required: true
    },
    styleBadge: {
      type: String,
      required: true,
      default: 'badge' 
    }
  }
}
</script>

<style scoped>
  .block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.150);
    background-color: white;
    border-radius: 8px;
  }
</style>