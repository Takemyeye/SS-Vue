<template>
  <div class="selected-user-panel">
    <div class="top-panel">
      <div class="user" v-if="user">
        <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <div class="close-button" @click="closePanel">X</div>
    </div>
    <AdminMessageBlock :user="user"/>
  </div>
</template>

<script>
import AdminMessageBlock from './unit/userMessange.vue';

export default {
  name: 'SelectedUserPanel',
  components: {
    AdminMessageBlock,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closePanel() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.selected-user-panel {
  position: absolute;
  bottom: 2%;
  width: 70%;
  height: 75vh;
  padding: 8px 1%;
  border: 1px solid black;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: initial;
  gap: 1rem;
}

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

.close-button {
  cursor: pointer;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 4px 8px;
  font-size: 1rem;
  background-color: black;
}
</style>
