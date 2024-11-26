<template>
  <div class="main-block">
    <div class="wrapper">
      <div class="text">
        <h2>Comment</h2>
        <h5>Manage your store's products</h5>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentAdmin'
  }
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    gap: 2rem;
  }

  .wrapper {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(221, 221, 221, 0.15);
    border-radius: 8px;
    overflow-y: auto;
    scrollbar-width: 16px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
  }

  .container-btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .text {
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
</style>