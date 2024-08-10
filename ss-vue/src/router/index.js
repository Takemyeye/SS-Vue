import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/home.vue';
import AboutPage from '@/components/about.vue';
import AuthComponent from '@/components/auth/authComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/', 
    component: AuthComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
