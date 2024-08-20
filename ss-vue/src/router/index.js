import { createRouter, createWebHistory } from 'vue-router';
import AuthComponent from '@/components/auth/authComponent.vue';
import HomePage from '@/components/home.vue';
import AboutPage from '@/components/about.vue';
import RegisterPage from '@/private/register.vue';
import ArtShop from '@/components/store/shop.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ArtShop,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/', 
    component: AuthComponent
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
