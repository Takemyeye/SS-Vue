<template>
  <SiteHeader/>
  <div class="profile-page">
    <div class="profile">
      <div class="user">
        <img :src="avatarUrl" :alt="userName">
        <h3> {{ userName }}</h3>
      </div>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import useUserStore from '@/stores/userStore';
import { computed } from 'vue';

  export default {
    name: 'ProfilePage',
    components: {
      SiteHeader,
      SiteFooter,
    },
    setup() {
      const { user } = useUserStore();
      
      const avatarUrl = computed(() => {
        if (user.value && user.value.avatar) {
          return user.value.avatar; 
        }
        return ''; 
      });

      const userName = 'Oleh'

      return {
        user,
        avatarUrl,
        userName
      }
    },
  }
</script>

<style scoped>
  .profile-page {
    width: 100%;
    min-height: calc(90vh - 1px);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }

  .profile {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;
    gap: 1rem;
  }

  .user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 8px;
  }

  img {
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
</style>