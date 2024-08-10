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
});

const setUser = (user) => {
  state.user = user;
  localStorage.setItem('user', JSON.stringify(user));
};

const clearUser = () => {
  state.user = null;
  localStorage.removeItem('user');
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

export default {
  ...toRefs(state),
  setUser,
  clearUser,
  logout,
  getUserFromCode,
};