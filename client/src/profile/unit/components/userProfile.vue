<template>
  <div class="profile">
    <div class="text">
      <h2> Profile</h2>
      <h5>Manage and Update Your Information</h5>
    </div>
    <div class="user">
      <div class="data">
        <img :src="avatarUrl" :alt="userName">
        <div class="container">
          <h2>{{ userName }}</h2>
          <UiBadge 
            styleBadge="badge1" 
            :title="userNick" 
            style="width: fit-content; cursor: pointer;" 
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
    <HoverInfoPanel 
      v-if="isBarOpen" 
      :toggleBar="toggleBar" 
      @nickUpdated="handleNickUpdate"  
      @error="handleError"
    />
    <UserInfo />
    <HoverCircle/>
  </div>
</template>

<script>
import HoverCircle from '../informationUnit/hoverCircle.vue';
import HoverInfoPanel from './hover/hoverInfoPanel.vue';
import useUserStore from '@/stores/userStore';
import UiNewButton from '@/ui/newButton.vue';
import UserInfo from './userInfo.vue';
import UiBadge from '@/ui/badge.vue';
import { computed, ref } from 'vue';

export default {
  name: 'UserProfile',
  components: {
    HoverInfoPanel,
    HoverCircle,
    UiNewButton,
    UserInfo,
    UiBadge,
  },
  emits: ['error', 'nickUpdated'],
  setup(props, { emit }) {
    const { user, clearUser } = useUserStore();
    const isBarOpen = ref(false);

    const handleError = (errorMessage) => {
      emit('error', errorMessage);
    };

    const toggleBar = () => {
      isBarOpen.value = !isBarOpen.value;
    };

    const logout = () => {
      clearUser();
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
      user.value.nickname = newNickname; 
      emit('nickUpdated', newNickname);
    };

    return {
      handleError,
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
    position: relative;
    width: 55%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 2rem 2.5%;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
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

  .text {
    width: 100%;
    display: flex;
    align-items: start; 
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    padding: 8px 0;
    gap: 8px;
  }

  @media all and (max-width:768px) {
    .profile {
      width: 80%;
    }
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