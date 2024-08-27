import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faCartShopping, faHeart, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHouse,
  faCartShopping,
  faHeart,
  faUser,
  faCartPlus,
  faInstagram,
  faTiktok,
  faTelegram,
  faGoogle,
  faGithub,
  faDiscord,
  faHouse,
);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
