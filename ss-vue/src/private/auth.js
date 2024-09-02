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

// Сохранение пользователя на сервере и получение токена
const saveUserToServer = async (user) => {
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
    state.token = data.token; // Сохраняем токен
    localStorage.setItem('token', data.token); // Сохраняем токен в localStorage
  } catch (error) {
    console.error('Ошибка при сохранении пользователя на сервере:', error);
  }
};

// Получение пользователя с сервера по токену
const fetchUserFromServer = async () => {
  if (!state.token) return;

  try {
    const response = await fetch(`http://localhost:3000/api/user/${state.token}`);
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
  saveUserToServer(user); // Сохранение пользователя на сервере
};

// Очистка данных пользователя как на клиенте, так и на сервере
const clearUserFromServer = async () => {
  if (!state.token) return;

  try {
    await fetch(`http://localhost:3000/api/user/${state.token}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Ошибка при удалении пользователя с сервера:', error);
  }
};

const clearUser = () => {
  state.user = null;
  state.token = null;
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  clearUserFromServer(); // Удаление пользователя на сервере
};

const logout = () => {
  clearUser();
  localStorage.removeItem('token');
};

const getUserFromCode = async (code) => {
  try {
    const token = await oauthClient.getAccessToken(code);
    const user = await oauthClient.getUser(token.accessToken);
    if (user) {
      setUser(user);
    }
  } catch (error) {
    console.error(error);
  }
};

// Получаем текущего пользователя при загрузке
fetchUserFromServer();

export default {
  ...toRefs(state),
  setUser,
  clearUser,
  logout,
  getUserFromCode,
};
