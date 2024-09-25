<template>
  <div class="profile">
    <div class="text">
      <h2>Favorite Characters</h2>
    </div>
    <div class="characters">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserCharacters'
  }
</script>

<style scoped>
  .profile {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 1rem;
  }
  img {
    width: 200px;
    height: 200px;
  }
</style>