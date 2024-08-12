import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';

// FontAwesomeIcon
library.add(faHouse, faCartShopping, faHeart, faInstagram, faTiktok, faTelegram, faUser);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
