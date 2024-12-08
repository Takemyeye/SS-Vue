<template>
  <div class="block">
    <div class="users" @click="toggleDropBar">
      <img :src="avatarUrl" :alt="userName" />
      <ProvidersUi
        :google="hasGoogle"
        :discord="hasDiscord"
        :github="hasGithub"
      />
    </div>
    <DropDown v-if="isDropDownOpen"/>
  </div>
</template>

<script>
import DropDown from './userUnit/dropDown.vue';
import useUserStore from '@/stores/userStore';
import ProvidersUi from '@/ui/provider.vue';
import { computed, onMounted, ref } from 'vue';

  export default {
    name: 'UserHeader',
    components: {
      ProvidersUi,
      DropDown
    },
    data() {
      return {
        google: "fa-brands fa-google",
        discord: "fa-brands fa-discord",
        github: "fa-brands fa-github"
      };
    },
    setup() {
      const token = localStorage.getItem('token');
      const { user, setUser } = useUserStore();

      const isDropDownOpen = ref(false);

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

      const toggleDropBar = () => {
        isDropDownOpen.value = !isDropDownOpen.value;
      };

      onMounted(async () => {
      const activeToken = token; 

      if (!user.value && activeToken) {
        await fetchUser(activeToken);
      }
    });

      const avatarUrl = computed(() => user.value?.avatar || '');
      const userName = computed(() => user.value?.username || '');

      const hasGoogle = computed(() => user.value?.provider === 'google');
      const hasDiscord = computed(() => user.value?.provider === 'discord');
      const hasGithub = computed(() => user.value?.provider === 'github');

      return {
        isDropDownOpen,
        toggleDropBar,
        hasDiscord,
        hasGoogle,
        hasGithub,
        avatarUrl,
        userName,
      }
    }
  }
</script>

<style scoped>
  .block { 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;  
  }

  .users {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 50%;
  }
  
</style>