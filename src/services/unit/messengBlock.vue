<template>
    <div class="messenger">
      <div class="container">
        <div class="message-item" v-for="(msg, index) in messages" :key="index">
          <div class="message-text">{{ msg.text }}</div>
          <img :src="avatarUrl" alt="User Avatar" class="user-avatar" v-if="avatarUrl" />
        </div>
      </div>
      <div class="write">
        <img :src="avatarUrl" alt="User Avatar" v-if="avatarUrl" />
        <textarea v-model="message" placeholder="Message..." rows="3"></textarea>
        <button class="send-btn" @click="sendMessage">
          <font-awesome-icon icon="paper-plane" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import useUserStore from '@/stores/userStore';
  
  export default {
    name: 'MessengerBlock',
  
    setup() {
      const { user } = useUserStore();
      const message = ref('');
      const messages = ref([]);
  
      const avatarUrl = computed(() => {
        return user.value && user.value.avatar ? user.value.avatar : '';
      });
  
      const fetchMessages = async () => {
        const token = localStorage.getItem('token');
        try {
          const response = await fetch('http://localhost:3000/api/messages', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (!response.ok) {
            throw new Error('Ошибка при загрузке сообщений');
          }
  
          const data = await response.json();
          messages.value = data.messages;
        } catch (error) {
          console.error('Ошибка при загрузке сообщений с сервера:', error);
        }
      };
  
      const sendMessageToServer = async (messageText) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3000/api/messages/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ message: messageText }),
            });

            if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Ошибка при отправке сообщения: ${errorText}`);
            }

        } catch (error) {
            console.error('Ошибка при отправке сообщения на сервер:', error);
        }
        };


  
      const sendMessage = async () => {
        if (message.value.trim()) {
          const msg = { text: message.value, user: avatarUrl.value };
          messages.value.push(msg);
          await sendMessageToServer(message.value);
          message.value = '';
        }
      };
  
      fetchMessages();
  
      return {
        avatarUrl,
        message,
        messages,
        sendMessage,
      };
    },
  };
  </script>  

<style scoped>
.messenger {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container {
    width: 95%;
    height: 265px;
    overflow-y: auto;
    scrollbar-width: 12px;
    scrollbar-color: rgb(255, 237, 237) rgb(199, 199, 199);
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
}

.message-item {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 0;
    gap: 1rem;
}

.message-text {
    background-color: hsl(214, 59%, 15%);
    color: hsl(210, 100%, 66%);
    font-size: clamp(10px, 2vw, 14px);
    padding: 4px 8px;
    font-weight: lighter;
    border-radius: 10px;
    max-width: 70%;
}

.user-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50px;
}

.write {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 4px 6px;
}

img {
    width: 34px;
    height: 34px;
    border-radius: 50px;
}

textarea {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    resize: none;
    width: 250px;
    padding: 4px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.37);
    font-size: 14px;
}

.send-btn {
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    background-color: black;
    transition: 0.3s ease;
}

.send-btn:hover {
    background-color: rgba(0, 0, 0, 0.808);
}
</style>
