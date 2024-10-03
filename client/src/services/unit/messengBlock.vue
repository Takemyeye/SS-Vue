<template>
    <div class="messenger">
      <div class="container">
        <div class="message-item-admin">
          <img src="https://avatars.githubusercontent.com/u/151098313?v=4" alt="User Avatar" class="user-avatar"/>
          <div class="message-text-admin">Which characters from your favorite manga and anime would you love to see come to life?</div>
        </div>
        <div class="message-item" v-for="(msg, index) in messages" :key="index">
          <div class="message-text">{{ msg.text }}</div>
          <img :src="avatarUrl" alt="User Avatar" class="user-avatar" v-if="avatarUrl" />
        </div>
      </div>
      <div class="write">
        <img :src="avatarUrl" alt="User Avatar" v-if="avatarUrl" />
        <textarea 
          v-model="message" 
          placeholder="Message..." 
          rows="3"
          @keydown="handleKeyDown">
        </textarea>
        <button class="send-btn" @click="sendMessage">
          <font-awesome-icon icon="paper-plane" />
        </button>
      </div>
    </div>
  </template>

  <script>
  import useKeyDownHandler from '@/utils/useKeyDownHandler';
  import useMessengerStore from '@/stores/messengerStore';
  
  export default {
    name: 'MessengerBlock',
  
    setup() {
      const { messages, message, avatarUrl, sendMessage } = useMessengerStore();

      //import function
      const { handleKeyDown} = useKeyDownHandler(sendMessage);

      return {
        handleKeyDown,
        sendMessage,
        avatarUrl,
        messages,
        message,
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
    animation: opacity 0.6s ease forwards;
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
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
}

.message-item, .message-item-admin {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 0;
    gap: 1rem;
}

.message-item-admin {
  justify-content: flex-start;
}

.message-text, .message-text-admin {
    background-color: hsl(214, 59%, 15%);
    color: hsl(210, 100%, 66%);
    font-size: clamp(10px, 2vw, 14px);
    padding: 4px 8px;
    font-weight: lighter;
    border-radius: 10px;
    max-width: 70%;
}

.message-text {
  text-wrap: balance;
  overflow: hidden;
}

.message-text-admin {
  background-color: hsl(357, 46%, 16%); 
  color: hsl(358, 100%, 69%);
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
