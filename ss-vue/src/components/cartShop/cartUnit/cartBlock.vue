<template>
  <div class="cart">
    <div class="cartItem">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartBlock'
  }
</script>

<style scoped>
  .cart {
    width: 100%;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;  
  }
  .cartItem {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
</style>