<template>
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
</template>

<script>
  export default {
    name: 'AdminMessageBlock',
    props: {
      user: {
        type: Object,
        Required: true
      }
    },

    data() {
      return {
        messages: [],
      };
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
  }
</script>

<style scoped>
  
.messang {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: start;
  justify-content: start;
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
 img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>