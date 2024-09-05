import { reactive, toRefs, onMounted } from 'vue';

const state = reactive({
  user: null,
  token: localStorage.getItem('token') || null,
  id: localStorage.getItem('id') || null,
  username: localStorage.getItem('username') || null,
});

const fetchUserFromServer = async () => {
  if (!state.token) return;

  try {
    const response = await fetch('http://localhost:3000/api/current_user', {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных пользователя');
    }

    const user = await response.json();
    state.user = user;
    localStorage.setItem('id', user.id);
    localStorage.setItem('username', user.username);
  } catch (error) {
    console.error('Ошибка при получении пользователя с сервера:', error);
  }
};

const setUser = (user) => {
  state.user = user;
  localStorage.setItem('id', user.id);
  localStorage.setItem('username', user.username);
  saveOrUpdateUserOnServer(user); // Отправляем данные на сервер
};

const saveOrUpdateUserOnServer = async (user) => {
  try {
    const response = await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Ошибка при сохранении пользователя на сервере');
    }

    const data = await response.json();
    state.token = data.token;
    localStorage.setItem('token', data.token);
  } catch (error) {
    console.error('Ошибка при сохранении пользователя на сервере:', error);
  }
};

const clearUserFromServer = async () => {
  if (!state.token) return;

  try {
    await fetch('http://localhost:3000/api/user', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
  } catch (error) {
    console.error('Ошибка при удалении пользователя с сервера:', error);
  }
};

const clearUser = () => {
  state.user = null;
  state.token = null;
  state.id = null;
  state.username = null;
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  clearUserFromServer();
};

const logout = () => {
  clearUser();
};

const getUserFromCode = async (code) => {
  try {
    // Используем OAuth клиента для получения данных пользователя
    const tokenResponse = await oauthClient.getAccessToken(code);
    const userResponse = await oauthClient.getUser(tokenResponse.accessToken);
    
    if (userResponse) {
      const { id, username, email } = userResponse;
      const tokenResponse = await fetch('http://localhost:3000/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, email }),
      });

      if (!tokenResponse.ok) {
        throw new Error('Ошибка при получении токена с сервера');
      }

      const data = await tokenResponse.json();
      const { token } = data;

      if (token) {
        state.token = token;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('username', username);
        fetchUserFromServer();
      }
    }
  } catch (error) {
    console.error('Ошибка при получении пользователя из кода:', error);
  }
};

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (code) {
    getUserFromCode(code);
  }
});

export default {
  ...toRefs(state),
  setUser,
  clearUser,
  logout,
  getUserFromCode,
};
