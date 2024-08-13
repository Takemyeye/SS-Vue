<template>
  <div class="topBar">
    <div class="text">
      <h1>Unleash Your Fandom</h1>
      <h2>Discover Exclusive Anime & Manga Art at Soul Swap</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  }
</script>

<style scoped>
  .topBar {
    width: 80%;
    height: 35vh;
    background:linear-gradient(to top, #3a7bd5, #3a6073);
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem ;
  }
  .text {
    width: 70%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem ;
  } 
  .text h1 {
    font-size: clamp(24px, 2vw, 44px);
    font-weight: lighter;
    color: white;
  }
  .text h2 {
    color: white;
    font-weight: lighter;
  }
</style>