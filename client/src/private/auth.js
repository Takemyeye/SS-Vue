import { reactive } from 'vue';

const state = reactive({
  token: localStorage.getItem('token') || null,
});

const clearUserFromServer = async () => {
  if (!state.token) return;

  try {
    await fetch('http://localhost:3000/api/current_user', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
  } catch (error) {
    console.error('Ошибка при удалении пользователя с сервера:', error);
  }
};

// Очистка данных пользователя
const clearUser = () => {
  state.token = null;
  localStorage.removeItem('token');
  clearUserFromServer();
};

export default {
  clearUser,
};
