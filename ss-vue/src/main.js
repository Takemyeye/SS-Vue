import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faCartShopping, faHeart, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHouse,
  faCartShopping,
  faHeart,
  faUser,
  faCartPlus,
  faInstagram,
  faTiktok,
  faTelegram
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
