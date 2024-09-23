<template>
  <div class="profile">
    <div class="user">
      <div class="data">
        <img :src="avatarUrl" :alt="userName">
        <div class="container">
          <h2>{{ userName }}</h2>
          <UiBadge 
            styleBadge="badge1" 
            :title="userNick" 
            style=" width: fit-content; cursor: pointer;" 
            @click="copyText(userNick)"
          />
          <UiBadge 
            styleBadge="badge2" 
            title="Change Nick" 
            style="font-size: small; width: fit-content; cursor: pointer;" 
            @click="updateNick" 
          />
          <textarea data-v-06268d9a v-model="newNick" placeholder="change your nickname..." rows="3"></textarea>
        </div>
      </div>
      <UiButton buttonText="Logout" @click="logout"/>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import UiButton from '@/ui/button.vue';
import UiBadge from '@/ui/badge.vue';
import { computed, ref } from 'vue';

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
    };

    const avatarUrl = computed(() => {
      return user.value?.avatar || '';
    });

    const userName = computed(() => {
      return user.value?.username || '';
    });

    const userNick = computed(() => {
      return user.value?.nickname ? `@${user.value.nickname}` : '@username';
    });

    const newNick = ref('');

    const copyText = (text) => {
      navigator.clipboard.writeText(text)
        .catch(err => {
          console.error('Copy error:', err);
        });
    };

    const updateNick = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('https://ss-vue-yf04.onrender.com/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nickname: newNick.value ? newNick.value.replace(/^@/, '') : null }) // destroy @ if @ was added
      });

      const data = await response.json();
      if (response.ok) {
        user.value.nickname = newNick.value.replace(/^@/, ''); // refresh 
        console.log('Nickname updated:', data.user);
      } else {
        console.error('Error updating nickname:', data.message);
      }
    };

    return {
      avatarUrl,
      userName,
      copyText,
      logout,
      userNick,
      newNick,
      updateNick,
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