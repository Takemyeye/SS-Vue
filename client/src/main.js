import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import { 
  faHouse, faCartShopping, faHeart,
  faCartPlus, faMoneyBill, faCircleXmark, faClock, 
  faCity, faImage, faTrash, faXmark, 
  faPaperPlane, faChevronLeft, faChevronRight, 
  faMicrochip,
  faCheck,
  faLock,
  faBoxesStacked,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far, faCreditCard, faComment, faMap, faClipboard } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faCartShopping,
  faChevronRight,
  faBoxesStacked,
  faChevronLeft,
  faCircleXmark,
  faCreditCard,
  faPaperPlane,
  faInstagram,
  faMoneyBill,
  faMicrochip,
  faClipboard,
  faCartPlus,
  faTelegram,
  faComment,
  faDiscord,
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
  faUsers,
  faUser,
  faLock,
  faCity,
  faMap,
  far,
);

const app = createApp(App);

app.use(router);

app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);