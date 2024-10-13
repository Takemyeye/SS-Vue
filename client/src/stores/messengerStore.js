import { ref, computed, onMounted } from 'vue';
import useUserStore from '@/stores/userStore';

export default function useMessengerStore() {
  // Хранение сообщений и сообщения для отправки
  const messages = ref([]);
  const message = ref('');

  // Получение аватара пользователя из хранилища
  const { user } = useUserStore();
  const avatarUrl = computed(() => (user.value && user.value.avatar ? user.value.avatar : ''));

  // Функция для получения сообщений с сервера
  const fetchMessages = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/messages', {
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

  // Функция для отправки сообщений на сервер
  const sendMessageToServer = async (messageText) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/messages', {
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
      messages.value.push(msg); // Добавляем сообщение в список
      await sendMessageToServer(message.value); // Отправляем сообщение на сервер
      message.value = ''; // Очищаем поле ввода после отправки
    }
  };

  onMounted(fetchMessages);

  // Возвращаем доступные данные и методы
  return {
    messages,
    message,
    avatarUrl,
    sendMessage,
    fetchMessages,
  };
}
