<template>
  <div class="user-card">
    <img :src="userAvatar" alt="" />
    <h5>{{ userName }}</h5>
    <h5> {{ userMail }}</h5>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    userName: {
      type: String,
      default: '',
    },
    userAvatar: {
      type: String, 
      default: '',
    },
    userMail: {
      type: String,
      default: '',
    }
  },
};
</script>

<style scoped>
  .user-card {
    width: 90%;
    height: 50px;
    position: relative;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.315);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    top: 1rem;
  }
  img {
    width: 38px;
    height: 38px;
    border-radius: 40px;
  }
</style>
