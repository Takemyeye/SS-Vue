<template>
  <div class="userData">
    <font-awesome-icon icon="user" />
    <div class="unit">
      <img :src="userAvatar" alt="AvatarUser" class="userAvatar" />
      <h4>{{ userName }}</h4>
    </div>
    <h4>{{ userEmail }}</h4>
  </div>
</template>

<script>
export default {
  name: 'OrderUser',
  props: {
    userAvatar: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .unit {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}
.userAvatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
</style>
