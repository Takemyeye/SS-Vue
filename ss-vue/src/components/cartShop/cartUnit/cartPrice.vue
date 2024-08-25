<template>
  <div class="priceBlock">
    <div class="price">
      <h1>Price</h1>
      <h1></h1>
    </div>
  </div>
</template>

<script> 
  export default {
    name: 'CartPrice'
  }
</script>

<style scoped>
  .priceBlock {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }
</style>