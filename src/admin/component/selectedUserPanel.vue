<template>
  <div class="selected-user-panel">
    <button class="close-button" @click="closePanel">X</button>
    <div class="user" v-if="user">
      <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div class="messang">
      <h1>Admin Chat</h1>
      <div class="chat" v-if="messages.length">
        <div class="message-item" v-for="(msg, index) in messages" :key="index">
          <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
          <p>{{ msg.text }}</p>
        </div>
      </div>
      <div v-else>
        <p>No messages</p>
      </div>
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
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    closePanel() {
      this.$emit('close');
    },
  },
  async mounted() {
    if (this.user && this.user.token) {
      try {
        const response = await fetch('http://localhost:3000/api/messages', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${this.user.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.messages = data.messages || [];
      } catch (error) {
        console.error('Ошибка при получении сообщений:', error);
      }
    }
  },
};
</script>

<style scoped>
.selected-user-panel {
  position: absolute;
  bottom: 2%;
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
  overflow: hidden;
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

.chat {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 8px 0;
  gap: 1rem;
}

.message-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
}

.message-item img {
  width: 32px;
  height: 32px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
