<template>
  <div class="comment">
    <div class="user">
      <img :src="avatar" alt="">
      <h3>{{ name }}</h3>
    </div>
    <div class="messeng">
      <h5>{{ messeng }}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentUnit',
    props: {
      avatar: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      messeng: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .comment {
    max-width: 300px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.158);
    padding: 1rem;
    gap: 2rem;
  }
  .user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 8px;
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 30px;
  }
  .messeng {
    width: 100%;
    text-wrap: balance;
  }
</style>