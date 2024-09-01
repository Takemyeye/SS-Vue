<template>
  <div class="block">
    <h1>{{ title }}</h1>
    <h4>{{ number }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'UiBlock',
    props: {
      title: {
        type: String,
        default: ''
      },
      number: {
        type: Number,
        default: -1
      }
    }
  }
</script>

<style scoped>
  .block {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.315);
    border-radius: 8px;
  }
  h1, h4 {
    width: 100%;
  }
</style>