<template>
  <div class="profile">
    <div class="info">
      <h2>Bio</h2>
      <h5>{{ userBio }}</h5>
    </div>
    <div class="info">
      <h2>Contact</h2>
      <h5>{{ userEmail }}</h5>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import { computed } from 'vue';

  export default {
    name: 'UserInfo',
    components: {

    },
    setup() {
      const { user } = useUserStore();

      const userEmail = computed(() => {
        return user.value?.email || '';
      });

      const userBio = 'bio';

      return {
        userEmail,
        userBio,
      }
    }
  }
</script>

<style scoped>
  .profile {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .info {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  h2 {
    font-weight: 600;
  }
</style>
