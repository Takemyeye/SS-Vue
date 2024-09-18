<template>
  <div class="selected-user-panel">
    <div class="user" v-if="user">
      <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div class="messang">
      <h1>Admin Chat</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SelectedUserPanel',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.selected-user-panel {
  position: absolute;
  bottom: 5%;
  width: 70%;
  height: 75vh;
  padding: 0 1%;
  border: 1px solid black;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
}

.user {
  padding: 1rem 0;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

p {
  padding: 5px 0;
}

.messange {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

</style>
