<template>
  <div class="register">
    <div class="login">
      <TextUnit />
      <div class="platform">
        <AuthButton
          v-for="button in authButtons"
          :key="button.text"
          :authUrl="button.authUrl"
          :icon="button.icon"
          :text="button.text"
          :buttonClass="button.buttonClass"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthButton from './authButton.vue';
import TextUnit from './textUnit.vue';

export default {
  name: 'LoginCard',
  components: {
    TextUnit,
    AuthButton
  },
  data() {
    return {
      authButtons: [
        {
          authUrl: "https://discord.com/oauth2/authorize?client_id=1274555710423695472&response_type=code&redirect_uri=https%3A%2F%2Fsoulswap.store%2Fapi%2Fauth%2Fdiscord%2Fcallback&scope=identify+email",
          icon: "fa-brands fa-discord",
          text: "LogIn with Discord",
          buttonClass: "auth-1"
        },
        {
          authUrl: "http://localhost:3000/api/auth/google",
          icon: "fa-brands fa-google",
          text: "LogIn with Google",
          buttonClass: "auth-2"
        },
        {
          authUrl: "http://localhost:3000/api/auth/github",
          icon: "fa-brands fa-github",
          text: "LogIn with GitHub",
          buttonClass: "auth-3"
        }
      ]
    };
  }
}
</script>

<style scoped>
.register {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: start;
  justify-content: center;
  font-family: var(--text-font-family);
  font-optical-sizing: var(--text-font-optical-sizing);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
}

.login {
  padding: 2rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}

.platform {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

</style>
