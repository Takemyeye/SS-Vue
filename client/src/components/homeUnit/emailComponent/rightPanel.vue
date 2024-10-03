<template>
  <div class="rightPanel">
    <h1>Stay Updated on New Arrivals</h1>
    <h3>Sign up for our newsletter to be the first to know about our latest anime and manga inspired art collections.</h3>
    <div class="email">
      <input type="email" placeholder="Enter your email">
      <UiButton buttonText="Subscribe" />
    </div>
    <h5>We'll never share your email. Read our
      <router-link to="/privacy">
          Privacy Policy .
      </router-link> 
    </h5>
  </div> 
</template>

<script>
import UiButton from '@/ui/button.vue';

  export default {
    name: 'RightPanel',
    components: {
      UiButton
    }
  }
</script>

<style scoped>
  .rightPanel {
    width: 35%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  h1 {
    color: var(--color-black);
  }
  .email {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.342);
    border-radius: 8px;
    padding: 4px 2rem 4px 8px;
  }
  a {
  color: rgba(0, 0, 0, 0.842);
  text-decoration: none;
  position: relative; 
  }
  a::after {
    content: ''; 
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.842);
    position: absolute;
    bottom: -2px; 
    left: 0;
  }

@media all and (max-width: 768px) {
  .rightPanel {
    width: 70%;
  }
}
</style>