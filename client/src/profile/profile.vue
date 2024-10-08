<template>
  <SiteHeader />
  <div class="profile-page">
    <div class="container">
      <UserProfile @nickUpdated="updateUserNick" @error="showNickError" />
      <UserInfo />
    </div>
    <div class="container">
      
    </div>
    <NickError :message="nickErrorMessage" :visible="nickErrorVisible" />
  </div>
  <SiteFooter />
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import NickError from './unit/error/nickError.vue';
import UserProfile from './unit/userProfile.vue';
import UserInfo from './unit/userInfo.vue';

export default {
  name: 'ProfilePage',
  components: {
    SiteHeader,
    SiteFooter,
    UserProfile,
    UserInfo,
    NickError,
  },
  data() {
    return {
      nickErrorVisible: false,
      nickErrorMessage: '',
      updatedNick: '',
    };
  },
  methods: {
    showNickError(message) {
      this.nickErrorMessage = message;
      this.nickErrorVisible = true;
      setTimeout(() => {
        this.nickErrorVisible = false;
        this.nickErrorMessage = '';
      }, 3000);
    },
    updateUserNick(newNickname) {
      this.updatedNick = newNickname;
      console.log('Nickname updated to:', newNickname);
    }
  }
}
</script>

<style scoped>
  .profile-page {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    position: relative;
    width: 100%;
    min-height: calc(85vh - 1px);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-top: 5vh;
    gap: 1rem;
  }

  .container {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 2.5%;
    gap: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
  }

@media all and (max-width:768px) {
  .container {
    width: 70%;
  }
}
</style>