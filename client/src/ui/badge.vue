<template>
  <div :class="styleBadge" class="badge-container">
    <slot></slot>
    <div>{{ title }}</div>
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
      default: ''
    }
  }
}
</script>

<style scoped>
  .badge-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: medium;
    color: var(--color-000);
    font-weight: 500;
    gap: 4px;
  }

  .badge1, .badge2, .badge3, .badge4 {
    padding: 4px 6px;
    border-radius: 12px;
    display: flex;
    align-items: center;
  }

  .badge1 {
    background-color: hsl(214, 59%, 15%);
  }

  .badge1 div {
    color: hsl(210, 100%, 66%);
  }

  .badge2 {
    background-color: hsl(281, 38%, 16%);
  }

  .badge2 div {
    color: hsl(275, 80%, 71%);
  }

  .badge3 {
    background-color: hsl(135, 70%, 16%);
  }

  .badge3 div {
    color: hsl(174, 90%, 41%);
  }

  .badge4 {
    background-color: hsl(357, 46%, 16%);
    cursor: pointer;
  }

  .badge4 div {
    color: hsl(358, 100%, 69%);
  }
</style>
