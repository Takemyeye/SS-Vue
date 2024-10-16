<template>
  <div class="profile-info">
    <UserBioPanel/>
    <div class="info">
      <h2>Contact</h2>
      <h5>{{ userEmail }}</h5>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import UserBioPanel from './userBioPanel.vue'
import { computed } from 'vue';

export default {
  name: 'UserInfo',
  components: {
    UserBioPanel
  },
  
  setup() {
    const { user } = useUserStore();

    const userEmail = computed(() => {
      return user.value?.email || '';
    });

    return {
      userEmail,
    };
  }
}
</script>

<style scoped>
  .profile-info {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-weight: 600;
  }

  .info {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
</style>
