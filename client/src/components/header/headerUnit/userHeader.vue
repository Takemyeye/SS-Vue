<template>
  <div class="block" v-if="userExists">
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
  <router-link to="/register" v-else>
    <h2><font-awesome-icon icon="fa-solid fa-user" /></h2>
  </router-link>
</template>

<script>
import DropDown from './userUnit/dropDown.vue';
import { computed, onMounted, ref } from 'vue';
import useUserStore from '@/stores/userStore';
import ProvidersUi from '@/ui/provider.vue';

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
          const response = await fetch('https://soulswap.store/api/current_user', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();

            setUser(data);  
            localStorage.setItem('userStatus', data.status)

            if (data.status === 'banned') {
              window.location.href = '/banned';
            }
          } else {
            console.error('Error of taken data of user:', response.statusText);
          }
        } catch (error) {
          console.error('Error of question:', error);
        }
      };

      onMounted(async () => {
        const queryParameters = new URLSearchParams(window.location.search);
        const urlToken = queryParameters.get('token');

        if (urlToken) {
          localStorage.setItem('token', urlToken);
        }

        const activeToken = urlToken || token;

        if (!user.value && activeToken) {
          await fetchUser(activeToken);
        }
        if (urlToken) {
          window.location.href = '/';
        }
      }); 

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

      const userExists = computed(() => !!user.value);

      return {
        isDropDownOpen,
        toggleDropBar,
        hasDiscord,
        userExists,
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
  
  .users > img {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 5rem;
  }
  
</style>