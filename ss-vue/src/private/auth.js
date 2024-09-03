import { reactive, toRefs } from 'vue';
const Client = require('discord-oauth2-api');

const clientID = process.env.VUE_APP_DISCORD_CLIENT_ID;
const clientSecret = process.env.VUE_APP_DISCORD_CLIENT_SECRET;
const redirectURI = process.env.VUE_APP_DISCORD_REDIRECT_URI;

const oauthClient = new Client({
  clientID,
  clientSecret,
  scopes: ['guilds', 'email', 'identify'],
  redirectURI,
});

const state = reactive({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
});

// Сохранение или обновление пользователя на сервере
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
      throw new Error('Ошибка при сохранении пользователя');
    }

    const data = await response.json();
    state.token = data.token;
    localStorage.setItem('token', data.token);
  } catch (error) {
    console.error('Ошибка при сохранении пользователя на сервере:', error);
  }
};

// Получение пользователя с сервера по токену
const fetchUserFromServer = async () => {
  if (!state.token) return;

  try {
    const response = await fetch('http://localhost:3000/api/user', {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении данных пользователя');
    }

    const user = await response.json();
    setUser(user);
  } catch (error) {
    console.error('Ошибка при получении пользователя с сервера:', error);
  }
};

// Установка пользователя и сохранение его на сервере
const setUser = (user) => {
  state.user = user;
  localStorage.setItem('user', JSON.stringify(user));
  saveOrUpdateUserOnServer(user);
};

// Очистка данных пользователя на сервере
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

// Очистка данных пользователя и токена
const clearUser = () => {
  state.user = null;
  state.token = null;
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  clearUserFromServer();
};

// Выход пользователя
const logout = () => {
  clearUser();
};

// Получение пользователя из кода авторизации
const getUserFromCode = async (code) => {
  try {
    const token = await oauthClient.getAccessToken(code);
    const user = await oauthClient.getUser(token.accessToken);
    if (user) {
      state.token = token.accessToken;
      localStorage.setItem('token', token.accessToken);
      setUser(user);
    }
  } catch (error) {
    console.error('Ошибка при получении пользователя из кода:', error);
  }
};

// Получаем текущего пользователя при загрузке только если токен присутствует
if (state.token) {
  fetchUserFromServer();
}

export default {
  ...toRefs(state),
  setUser,
  clearUser,
  logout,
  getUserFromCode,
};
