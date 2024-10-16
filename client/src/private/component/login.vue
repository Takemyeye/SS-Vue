<template>
  <div class="register">
    <div class="login">
      <TextUnit/>
      <div class="platform">
        <a :href="discordAuthUrl">
          <div class="auth auth-1">
            <font-awesome-icon icon="fa-brands fa-discord" />
            <h5>LogIn with Discord</h5>
          </div>
        </a>
        <a :href="googleAuthUrl">
          <div class="auth auth-2">
            <font-awesome-icon icon="fa-brands fa-google" />
            <h5>LogIn with Google</h5>
          </div>
        </a>
        <a :href="githubAuthUrl">
          <div class="auth auth-3">
            <font-awesome-icon icon="fa-brands fa-github" />
            <h5>LogIn with GitHub</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TextUnit from './textUnit.vue';

export default {
  name: 'LoginCard',
  components: {
    TextUnit
  },
  data() {
    return {
      discordAuthUrl: `https://discord.com/oauth2/authorize?client_id=1274555710423695472&response_type=code&redirect_uri=https%3A%2F%2Fss-vue-yf04.onrender.com%2Fauth%2Fdiscord%2Fcallback&scope=identify+email`,
      googleAuthUrl: `http://localhost:3000/auth/google`,
      githubAuthUrl: `http://localhost:3000/auth/github`,
    };
  },
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
    border: 1px solid rgba(0, 0, 0, 0.200);
    border-radius: 8px;
    position: relative;
    top: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .auth {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .platform {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .auth {
    min-width: 300px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.192);
    padding: 8px;
    flex-direction: row;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-in-out forwards;
  }

  .auth:hover {
    background-color: rgba(0, 0, 0, 0.100);
  }

  .auth-1 {
    animation-delay: 0s;
  }

  .auth-2 {
    animation-delay: 0.3s;
  }

  .auth-3 {
    animation-delay: 0.6s;
  }

  h5 {
    color: black;
  }
</style>