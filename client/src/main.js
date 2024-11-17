import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import { 
  faCartPlus, faMoneyBill, faCircleXmark, faClock, 
  faPaperPlane, faChevronLeft, faChevronRight, 
  faCity, faImage, faTrash, faXmark, 
  faHouse, faCartShopping, faHeart,
  faMagnifyingGlass,
  faBoxesStacked,
  faDollarSign,
  faCreditCard,
  faMicrochip,
  faCheck,
  faUsers,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faTelegram, faTiktok, faGoogle, faGithub, faDiscord, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far, faComment, faMap, faClipboard } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faMagnifyingGlass,
  faCartShopping,
  faChevronRight,
  faBoxesStacked,
  faChevronLeft,
  faCircleXmark,
  faCreditCard,
  faDollarSign,
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