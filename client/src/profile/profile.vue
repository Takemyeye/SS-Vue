<template>
  <SiteHeader />
  <div class="profile-page">

      <UserProfile @nickUpdated="updateUserNick" @error="showNickError" />
      
      <UserReviews/>
    
    <NickError :message="nickErrorMessage" :visible="nickErrorVisible" />
  </div>
  
  <SiteFooter />
</template>

<script>
import UserProfile from './unit/components/userProfile.vue';
import UserReviews from './unit/components/userReviews.vue';
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import NickError from './unit/error/nickError.vue';

export default {
  name: 'ProfilePage',
  components: {
    UserReviews,
    UserProfile,
    SiteFooter,
    SiteHeader,
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
    width: 100%;
    min-height: calc(85vh - 1px);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-top: 5vh;
    gap: 1rem;
  }

</style>