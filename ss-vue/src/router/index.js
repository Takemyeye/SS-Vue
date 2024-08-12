import { createRouter, createWebHistory } from 'vue-router';
import AuthComponent from '@/components/auth/authComponent.vue';
import HomePage from '@/components/home.vue';
import AboutPage from '@/components/about.vue';
import RegisterPage from '@/private/register.vue';

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
    path: '/register',
    name: 'Register',
    component: RegisterPage,
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
