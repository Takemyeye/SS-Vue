import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import { 
  faHouse, faCartShopping, faHeart, faUser, 
  faCartPlus, faMoneyBill, faCircleXmark, faClock, 
  faCity, faImage, faTrash, faComment, faXmark, 
  faPaperPlane, faChevronLeft, faChevronRight, 
  faCheck,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faCartShopping,
  faChevronRight,
  faChevronLeft,
  faCircleXmark,
  faPaperPlane,
  faInstagram,
  faMoneyBill,
  faMicrochip,
  faCartPlus,
  faTelegram,
  faDiscord,
  faComment,
  faTiktok,
  faGoogle,
  faGithub,
  faPaypal,
  faCheck,
  faHouse,
  faHeart,
  faClock,
  faImage,
  faTrash,
  faXmark,
  faCity,
  faUser,
);

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);