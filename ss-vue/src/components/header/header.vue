<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <h1>Soul Swap</h1>
      </router-link>
      <div class="navigation">
        <router-link :to="{ name: 'Home' }">
          <h3>Home</h3>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <h3>About</h3>
        </router-link>
        <h3>Blog</h3>
        <h3>All Art</h3>
      </div>
      <div class="rightPanel">
        <router-link v-if="!user" :to="{ name: 'Register' }" class="user">
          <font-awesome-icon icon="user" />
          <h2>Sign In</h2>
        </router-link>
        <div v-else class="avatar">
          <img :src="avatarUrl" alt="User Avatar" />
        </div>
        <h3><font-awesome-icon icon="heart" /></h3>
        <h3><font-awesome-icon icon="cart-shopping" /></h3>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, onMounted } from 'vue';
import auth from '@/private/auth';

export default {
  name: 'SiteHeader',
  setup() {
    const { user, getUserFromCode } = auth;

    const avatarUrl = computed(() => {
      if (user.value && user.value.avatar) {
        return `https://cdn.discordapp.com/avatars/${user.value.id}/${user.value.avatar}.png`;
      }
      return '';
    });

    onMounted(() => {
      const queryParameters = new URLSearchParams(window.location.search);
      const code = queryParameters.get('code');

      if (code && !user.value) {
        getUserFromCode(code);
      }
    });

    return {
      user,
      avatarUrl
    };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
}
.container {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.navigation {
  position: relative;
  font-size: clamp(18px, 2vw, 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}
.navigation h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-001);
  transition: width 0.3s ease;
}
.navigation h3:hover::after {
  width: 100%;
}
.rightPanel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: var(--color-001);
  gap: 2rem;
}
.rightPanel h3 {
  font-size: clamp(18px, 2vw, 24px);
}
.rightPanel img {
  width: 34px;
  height: 34px;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.774);
}
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  font-size: 34px;
}
h1 {
  font-family: "Gilda Display", serif;
  font-weight: 400;
}
</style>


<!--        
heart red
<h3><font-awesome-icon icon="heart" style="color: #d55858;" /></h3>
-->