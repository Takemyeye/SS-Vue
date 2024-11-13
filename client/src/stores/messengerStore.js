import { ref, computed, onMounted } from 'vue';
import useUserStore from './userStore';

export default function useMessengerStore() {
  const messages = ref([]);
  const message = ref('');

  const { user } = useUserStore();
  const avatarUrl = computed(() => user.value?.avatar || '');

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
      const response = await fetch('http://localhost:3000/api/messages', {
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

  // Функция для отправки сообщения
  const sendMessage = async () => {
    if (message.value.trim()) {
      const msg = { text: message.value, user: avatarUrl.value };
      messages.value.push(msg);
      await sendMessageToServer(message.value);
      message.value = '';
    }
  };

  onMounted(fetchMessages);

  return {
    messages,
    message,
    avatarUrl,
    sendMessage,
    fetchMessages,
  };
}
