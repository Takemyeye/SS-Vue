<template>
  <div class="serch-admin">
    <SerchAdmin @search="$emit('search', $event)" />
    <div class="users">
      <img :src="avatarUrl" :alt="userName" />
      <div class="providers">
        <font-awesome-icon v-if="hasGoogle" icon="fa-brands fa-google" />
        <font-awesome-icon v-if="hasDiscord" icon="fa-brands fa-discord" />
        <font-awesome-icon v-if="hasGithub" icon="fa-brands fa-github" />
      </div>
    </div>
  </div>
</template>

<script>
import SerchAdmin from './components/serch.vue';
import useUserStore from '@/stores/userStore';
import { computed, onMounted } from 'vue';

export default {
  name: 'HeaderAdmin',
  components: {
    SerchAdmin,
  },
  data() {
    return {
      google: "fa-brands fa-google",
      discord: "fa-brands fa-discord",
      github: "fa-brands fa-github"
    };
  },
  emits: ['search'],
  setup() {
    const { user, setUser } = useUserStore();
    const token = localStorage.getItem('token');

    const fetchUser = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/api/current_user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        setUser(data);  

        localStorage.setItem('userStatus', data.status);

        if (data.status === 'banned') {
          window.location.href = '/banned';
        }
      } else {
        console.error('Ошибка получения данных пользователя:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при запросе пользователя:', error);
    }
  };

    // User Data

    const avatarUrl = computed(() => user.value?.avatar || '');
    const userName = computed(() => user.value?.username || '');

    const hasGoogle = computed(() => user.value?.provider === 'google');
    const hasDiscord = computed(() => user.value?.provider === 'discord');
    const hasGithub = computed(() => user.value?.provider === 'github');

    onMounted(async () => {
      const activeToken = token; 

      if (!user.value && activeToken) {
        await fetchUser(activeToken);
      }
    });

    return {
      avatarUrl,
      userName,
      hasGoogle,
      hasDiscord,
      hasGithub,
    };
  },
};
</script>

<style scoped>
  .serch-admin {
    width: 95%;
    padding: 11px 2.5%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.164);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.219);
    border-radius: 8px;
  }
  .users {
    position: relative;
    width: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 50%;
  }
  .providers {
    position: absolute;
    padding: 0 2px;
    z-index: 1;
    right: -2px;
    bottom: -2px;
    font-size: 12px;
    color: rgb(24, 24, 24);
    background-color: white;
    border-radius: 3rem;
    border: 1px solid rgba(36, 36, 36, 0.26);
  }
</style>
