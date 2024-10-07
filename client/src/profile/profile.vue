<template>
  <SiteHeader/>
  <div class="profile-page">
    <div class="container">
      <UserProfile @nickUpdated="updateUserNick" @error="showNickError"/>
      <UserInfo/>
    </div>

    <div v-if="nickErrorVisible" class="nick-error">
      <svg height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
          <g id="Error_1_">
            <g id="Error">
              <circle cx="16" cy="16" id="BG" r="16" style="fill:#D72828;" />
              <path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style="fill:#E6E6E6;" />
            </g>
          </g>
        </g>
      </svg>
      <h5>{{ nickErrorMessage }}</h5>
    </div>
  </div>
  <SiteFooter/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import UserProfile from './unit/userProfile.vue';
import UserInfo from './unit/userInfo.vue';

export default {
  name: 'ProfilePage',
  components: {
    SiteHeader,
    SiteFooter,
    UserProfile,
    UserInfo,
  },
  data() {
    return {
      nickErrorVisible: false, 
      nickErrorMessage: '', 
      updatedNick: '',
    };
  },
  emits: ['error', 'nickUpdated'],

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

  .nick-error {
    position: fixed;
    right: 1%;
    bottom: 1%;
    width: 250px;
    height: 60px;
    background-color: white;
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.301);
    border-radius: 8px;
    padding: 8px 1rem;
    border: 1px solid rgba(0, 0, 0, 0.199);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    animation: fadeInUp 0.3s ease forwards;
    z-index: 2;
  }

@media all and (max-width:768px) {
  .container {
    width: 70%;
  }
}
</style>