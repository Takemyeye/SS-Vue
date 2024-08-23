<template>
  <div class="rightPanel">
    <router-link v-if="!user" :to="{ name: 'Register' }" class="user">
      <font-awesome-icon icon="user" />
    </router-link>
    <div v-else class="avatar" @click="toggleDropdown">
      <img :src="avatarUrl" alt="User Avatar" />
      <div v-if="isDropdownOpen" class="dropdown">
        <h5>Profile</h5>
        <h5>Settings</h5>
        <h5 @click="logout">Logout</h5>
      </div>
    </div>
    <h3><font-awesome-icon icon="heart" style="color: #d55858;" /></h3>
    <router-link :to="{ name: 'Cart' }">
      <h3>
        <font-awesome-icon icon="cart-shopping" />
      </h3>
    </router-link>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import auth from '@/private/auth';
  export default {
    name: 'RightPanelNavBar',
    
    setup() {
      const { user, getUserFromCode, logout } = auth;
      const isDropdownOpen = ref(false);

      const avatarUrl = computed(() => {
        if (user.value && user.value.avatar) {
          return `https://cdn.discordapp.com/avatars/${user.value.id}/${user.value.avatar}.png`;
        }
        return '';
      });

      const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
      };

      onMounted(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const code = queryParameters.get('code');

        if (code && !user.value) {
          getUserFromCode(code);
        }
      });

      return {
        user,
        avatarUrl,
        isDropdownOpen,
        toggleDropdown,
        logout,
      };
    },
  }
</script>

<style scoped>

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
  font-size: 28px;
}

h1 {
  font-family: "Gilda Display", serif;
  font-weight: 400;
}

.avatar {
  position: relative;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 40px;
  left: -1.5rem;
  padding: 4px;
  min-width: 200px;
  background-color: white;
  border: 1px solid #0000004d;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}
.dropdown h5 {
  width: 100%;
  padding: 4px 0;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  text-align: center
}
.dropdown h5:hover {
  background-color: black;
  color: white;
}
.dropdown a {
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}

.dropdown a:last-child {
  border-bottom: none;
}

.dropdown a:hover {
  background-color: #f0f0f0;
}
</style>