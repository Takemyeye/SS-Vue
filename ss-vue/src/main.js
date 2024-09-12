import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import { faHouse, faCartShopping, faHeart, faUser, faCartPlus, faMoneyBill, faCircleXmark, faClock, faCity, faImage, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

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
  faCircleXmark,
  faClock,
  faCity,
  faImage,
  faTrash
);

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);