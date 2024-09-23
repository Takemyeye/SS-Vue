<template>
  <div class="top-panel">
      <div class="user" v-if="user">
        <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
        <div class="info">
          <p><strong>Id:</strong>{{ user.id }}</p>
          <p><strong>Name:</strong>{{ user.username }}</p>
          <p><strong>Email:</strong>{{ user.email }}</p>
        </div>
      </div>
      <div class="close-button" @click="closePanel">
        <font-awesome-icon icon="circle-xmark"/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'AdminTopPanel',
    props: {
      user: {
        type: Object,
        Required: true
      }
    },
    methods: {
      closePanel() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
.top-panel {
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: white;
}

.user {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  padding: 1rem 0;
  gap: 8px;
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

.close-button {
  cursor: pointer;
  color: black;
  font-size: 2rem;
}

.info {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
</style>