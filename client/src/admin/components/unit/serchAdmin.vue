<template>
  <div class="serch-admin">
    <SerchAdmin @search="$emit('search', $event)" />
    <img :src="avatarUrl" :alt="userName" />
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

    const avatarUrl = computed(() => user.value?.avatar || '');
    const userName = computed(() => user.value?.username || '');

    onMounted(async () => {
      const activeToken = token; 

      if (!user.value && activeToken) {
        await fetchUser(activeToken);
      }
    });

    return {
      avatarUrl,
      userName,
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

  img {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 50%;
  }
</style>