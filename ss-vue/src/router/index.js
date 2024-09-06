import { createRouter, createWebHistory } from 'vue-router';
import CartShoping from '@/components/cartShop/cart.vue';
import NotFound from '@/components/404/NotFound.vue';
import RegisterPage from '@/private/register.vue';
import ArtShop from '@/components/store/shop.vue';
import HomePage from '@/components/home.vue';
import AdminPanel from '@/admin/admin.vue';
import PrivacyPolicy from '@/policy/privacyPolicy.vue';

const ADMIN_TOKEN_GIT = process.env.VUE_APP_ADMIN_TOKEN_GIT;
const ADMIN_TOKEN_GOOGLE = process.env.VUE_APP_ADMIN_TOKEN_GOOGLE;
const ADMIN_TOKEN_DISCORD = process.env.VUE_APP_ADMIN_TOKEN_DISCORD;
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};

const isAdmin = () => {
  const token = localStorage.getItem('token');
  return token === ADMIN_TOKEN_GIT || token === ADMIN_TOKEN_GOOGLE || token === ADMIN_TOKEN_DISCORD;
};

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/shop', name: 'Shop', component: ArtShop },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/privacy', name: 'Privacy', component: PrivacyPolicy},
  {
    path: '/cart',
    name: 'Cart',
    component: CartShoping,
    meta: { requiresAuth: true }, 
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { 
    path: '/admin', 
    name: 'Admin', 
    component: AdminPanel,
    meta: { requiresAdmin: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/register' }); 
  } 
  else if (to.meta.requiresAdmin && !isAdmin()) {
    next({ path: '/' });
  } 
  else {
    next();
  }
});

export default router;
