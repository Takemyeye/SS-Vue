import ProcessingOrder from '@/components/orders/process.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CartShoping from '@/components/cartShop/cart.vue';
import PrivacyPolicy from '@/policy/privacyPolicy.vue';
import NotFound from '@/components/404/NotFound.vue';
import RegisterPage from '@/private/register.vue';
import ArtShop from '@/components/store/shop.vue';
import BannedPage from '@/banned/bannedPage.vue';
import ProfilePage from '@/profile/profile.vue';
import HomePage from '@/components/home.vue';
import AdminPanel from '@/admin/admin.vue';

const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};

const isAdmin = () => {
  const ADMIN_TOKEN_DISCORD = process.env.VUE_APP_ADMIN_TOKEN_DISCORD;
  const ADMIN_TOKEN_GOOGLE = process.env.VUE_APP_ADMIN_TOKEN_GOOGLE;
  const ADMIN_TOKEN_GIT = process.env.VUE_APP_ADMIN_TOKEN_GIT;
  const token = localStorage.getItem('token');
  return token === ADMIN_TOKEN_GIT || token === ADMIN_TOKEN_GOOGLE || token === ADMIN_TOKEN_DISCORD;
};

const fetchUserStatus = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const response = await fetch('http://localhost:3000/api/check-status', { 
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user status');
    }

    const data = await response.json();
    return data.status; 
  } catch (error) {
    console.error('Error fetching user status:', error);
    return null;
  }
};

const routes = [
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/privacy', name: 'Privacy', component: PrivacyPolicy },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: ProfilePage,     
    meta: { requiresAuth: true }, 
  },
  { path: '/shop', name: 'Shop', component: ArtShop },
  { path: '/', name: 'Home', component: HomePage },
  { 
    path: '/orders', 
    name: 'Orders', 
    component: ProcessingOrder,
    meta: { requiresAuth: true }, 
  },
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
  },
  {
    path: '/banned',
    name: 'Banned',
    component: BannedPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const requiresAdmin = to.meta.requiresAdmin;

  if (requiresAuth && !isAuthenticated()) {
    next({ path: '/register' });
  } else if (requiresAdmin && !isAdmin()) {
    next({ path: '/' });
  } else {
    const status = await fetchUserStatus();
    if (status === 'banned' && to.name !== 'Banned') {
      next({ path: '/banned' });
    } else {
      next();
    }
  }
});

export default router;
