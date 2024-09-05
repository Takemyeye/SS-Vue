import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faCartShopping, faHeart, faUser, faCartPlus, faMoneyBill, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord, faPaypal } from '@fortawesome/free-brands-svg-icons';

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
  faMoneyBill,
  faPaypal,
  faCircleXmark
);

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);