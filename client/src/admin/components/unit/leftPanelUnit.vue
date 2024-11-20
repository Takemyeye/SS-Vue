<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'LeftPanelUnit'
  }
</script>

<style scoped>
  .wrapper { 
    color: rgb(24, 24, 27);
    width: 80%;
    display: flex;
    align-items: start;
    flex-direction: row;
    cursor: pointer;
    padding: 6px 0;
    gap: 1rem;
  }
</style>