<template>
  <div class="absolut">
    <div class="panel">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HoverInfoPanel'
  }
</script>

<style scoped>
  .absolut {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
  }
  .panel {
    position: relative;
    width: 289px;
    padding: 2rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
    border-radius: 8px;
    gap: 2rem;
  }
</style>