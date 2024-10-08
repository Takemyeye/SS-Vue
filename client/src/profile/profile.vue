<template>
  <SiteHeader />
  <div class="profile-page">
    <div class="container">
      <div class="text">
        <h2> Profile</h2>
        <h5>Manage and Update Your Information</h5>
      </div>
      <UserProfile @nickUpdated="updateUserNick" @error="showNickError" />
      <UserInfo />
    </div>
    <div class="container">
      <UserReviews/>
    </div>
    <NickError :message="nickErrorMessage" :visible="nickErrorVisible" />
  </div>
  <SiteFooter />
</template>

<script>
import UserProfile from './unit/components/userProfile.vue';
import UserReviews from './unit/components/userReviews.vue';
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import UserInfo from './unit/components/userInfo.vue';
import NickError from './unit/error/nickError.vue';

export default {
  name: 'ProfilePage',
  components: {
    UserReviews,
    UserProfile,
    SiteFooter,
    SiteHeader,
    NickError,
    UserInfo,
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
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 2.5%;
    gap: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
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
  .container {
    width: 70%;
  }
}
</style>