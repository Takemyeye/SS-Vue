<template>
  <div class="messeng">
    <div class="exit" @click="exitMessenger">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessengBlock',
  methods: {
    exitMessenger() {
      this.$emit('close-messenger');
    }
  }
}
</script>

<style scoped>
  .messeng {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 350px;
    height: 500px;
    background-color: aqua;
    padding: 8px;
    border-radius: 1rem;
    z-index: 1000;
  }
  .exit {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
</style>