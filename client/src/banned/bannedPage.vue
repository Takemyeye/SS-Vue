<template> 
  <div class="banned-page">
    <div class="container">
      <font-awesome-icon icon="lock" style="font-size: 60px;"/>
      <div class="text">
        <h1>Account Suspended</h1>
        <h5>Your account has been suspended due to a violation of the site's terms of use.</h5>
      </div>
      <div class="text">
        <h5>If you believe this was a mistake, please contact our support team to resolve this issue.</h5>
        <h5>To continue, please switch accounts or contact customer support.</h5>
      </div>
      <div class="container-btn">
        <UiButton buttonText="Contact Support" style="width: 100%;"/>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';

  export default {
    name: 'BannedPage',
    components: {
      UiButton,
    },
  }
</script>

<style scoped>
  .banned-page {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .container {
    position: relative;
    max-width: 400px;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .container-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  h1 {
    font-size: clamp(22px, 2vw, 34px);
    text-align: center;
    font-weight: 800;
  }

  h5 {
    font-size: clamp(14px, 2vw, 16px);
    text-align: center;
    font-weight: 400;
  }

  @media all and ( max-width: 768px ) {
    .container {
      max-width: 280px;
      padding: 1rem;
    }
  }
</style>
