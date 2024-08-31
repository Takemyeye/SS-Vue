import { createRouter, createWebHistory } from 'vue-router';
import AuthComponent from '@/components/auth/authComponent.vue';
import HomePage from '@/components/home.vue';
import AboutPage from '@/components/about.vue';
import RegisterPage from '@/private/register.vue';
import ArtShop from '@/components/store/shop.vue';
import CartShoping from '@/components/cartShop/cart.vue';
import NotFound from '@/components/404/NotFound.vue';

// Функция для проверки аутентификации
const isAuthenticated = () => {
  // Проверяем, есть ли данные пользователя в localStorage
  return !!localStorage.getItem('user'); // Вернет true, если данные пользователя есть, и false, если их нет
};

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/shop', name: 'Shop', component: ArtShop },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  {
    path: '/cart',
    name: 'Cart',
    component: CartShoping,
    meta: { requiresAuth: true }, 
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/', component: AuthComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/register' }); 
  } else {
    next();
  }
});

export default router;
