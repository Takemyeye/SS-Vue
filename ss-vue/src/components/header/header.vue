<template>
  <header>
    <h1>Header</h1>
    <div class="rightPanel">
      <div class="avatar">
        <img v-if="user" :src="avatarUrl" alt="User Avatar" />
      </div>
      <div class="user-name">
        <h1 v-if="user">{{ user.username }}</h1>
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
.rightPanel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}
header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}
</style>
