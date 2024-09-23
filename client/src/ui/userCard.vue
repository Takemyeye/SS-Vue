<template>
  <div class="user-card" @click="handleClick">
    <img :src="userAvatar" alt="" />
    <h5>{{ userName }}</h5>
    <h5> {{ userEmail }}</h5>
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
    userEmail: {
      type: String,
      default: '',
    },
    userId: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.userId);
    },
  },
};
</script>


<style scoped>
  .user-card {
    width: 80%;
    height: 50px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.315);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 8px;
  }
  img {
    width: 38px;
    height: 38px;
    border-radius: 40px;
  }
</style>
