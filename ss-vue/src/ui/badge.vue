<template>
  <div :class="styleBadge" class="badge-container">
    <slot></slot>
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: 'UiBadge',
  props: {
    styleBadge: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: 'Макс Лох'
    }
  }
}
</script>

<style scoped>
  .badge-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .badge1, .badge2, .badge3, .badge4 {
    padding: 4px 6px;
    border-radius: 12px;
    display: flex;
    align-items: center;
  }

  h5 {
    font-size: medium;
  }

  .badge1 {
    background-color: hsl(214, 59%, 15%);
  }

  .badge1 h5 {
    color: hsl(210, 100%, 66%);
  }

  .badge2 {
    background-color: hsl(281, 38%, 16%);
  }

  .badge2 h5 {
    color: hsl(275, 80%, 71%);
  }

  .badge3 {
    background-color: hsl(135, 70%, 16%);
  }

  .badge3 h5 {
    color: hsl(174, 90%, 41%);
  }

  .badge4 {
    background-color: hsl(357, 46%, 16%);
    cursor: pointer;
  }

  .badge4 h5 {
    color: hsl(358, 100%, 69%);
  }
</style>
