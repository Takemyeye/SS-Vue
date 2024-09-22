<template>
  <div class="profile">
      <div class="user">
        <div class="data">
          <img :src="avatarUrl" :alt="userName">
          <div class="container">
            <h2>{{ userName }}</h2>
            <UiBadge 
              styleBadge="badge1" 
              :title="userId" 
              style="width: fit-content;" 
              @click="copyText( userId )"
            />
          </div>
        </div>
        <UiButton buttonText="logout" @click="logout"/>
      </div>
    </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import UiButton from '@/ui/button.vue';
import UiBadge from '@/ui/badge.vue';
import { computed } from 'vue';

  export default {
    name: 'UserProfile',
    components: {
      UiButton,
      UiBadge,
    },
    setup() {
    const { user, clearUser } = useUserStore();

    const logout = () => {
      clearUser();
      localStorage.removeItem('token');
      window.location.href = '/';
    };

    const avatarUrl = computed(() => {
      return user.value?.avatar || '';
    });

    const userName = computed(() => {
      return user.value?.username || '';
    });

    const userId = '@userId';

    const copyText = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log(`Скопировано: ${text}`);
        })
        .catch(err => {
          console.error('Ошибка при копировании:', err);
        });
    };

    return {
      avatarUrl,
      userName,
      copyText,
      logout,
      userId,
    };
  },
  }
</script>

<style scoped>
  .profile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .data {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
  }

  img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    box-shadow: 0 0 8px hsl(357, 46%, 16%);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>