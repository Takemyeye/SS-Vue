<template>
  <div class="block">
    <h2>{{ title }}</h2>
    <h2>{{ number }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'UiBlock',
    props: {
      title: {
        type: String,
        required: true,
        default: ''
      },
      number: {
        type: Number,
        required: true
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
  h1, h2 {
    width: 100%;
  }
</style>