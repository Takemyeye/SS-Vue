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
            @click="toggleBar"
          />
        </div>
      </div>
      <div class="btn">
        <UiNewButton text="Logout" @click="logout"/>
      </div>
    </div>
    <HoverInfoPanel v-if="isBarOpen" :toggleBar="toggleBar" @nickUpdated="handleNickUpdate"/>
  </div>
</template>

<script>
import HoverInfoPanel from './hoverInfoPanel.vue';
import useUserStore from '@/stores/userStore';
import UiNewButton from '@/ui/newButton.vue';
import UiBadge from '@/ui/badge.vue';
import { computed, ref } from 'vue';

export default {
  name: 'UserProfile',
  components: {
    HoverInfoPanel,
    UiNewButton,
    UiBadge,
  },
  setup() {
    const { user, clearUser } = useUserStore();
    const isBarOpen = ref(false);

    const toggleBar = () => {
      isBarOpen.value = !isBarOpen.value;
    };

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

    const copyText = (text) => {
      navigator.clipboard.writeText(text)
        .catch(err => {
          console.error('Copy error:', err);
        });
    };

    // Handle the updated nickname from the child component
    const handleNickUpdate = (newNickname) => {
      user.value.nickname = newNickname; // Update the user nickname in the store
    };

    return {
      toggleBar,
      isBarOpen,
      avatarUrl,
      userName,
      userNick,
      copyText,
      handleNickUpdate,
      logout,
    };
  }
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
    justify-content: start;
    flex-direction: row;
    width: 100%;
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

  @media all and (max-width:768px) {
   .user {
    flex-direction: column;
    gap: 1rem;
   }
   .btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
   }
  }
</style>