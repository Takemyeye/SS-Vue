<template>
  <SiteHeader />
  <div class="profile-page">
      <UserProfile @nickUpdated="updateUserNick" @error="showNickError" />
      <UserReviews/>
      <NotificationSettings/>
      <NickError :message="nickErrorMessage" :visible="nickErrorVisible" />
  </div>
  <SiteFooter />
</template>

<script>
import NotificationSettings from './unit/components/notification.vue';
import UserProfile from './unit/components/userProfile.vue';
import UserReviews from './unit/components/userReviews.vue';
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import NickError from './unit/error/nickError.vue';

export default {
  name: 'ProfilePage',
  components: {
    NotificationSettings,
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
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding: 5vh 0;
    gap: 2rem;
    animation: fadeInUp 1s ease-in-out forwards;
  }

</style>