<template>
  <FooterContainer>
      <h2>Soul Swap</h2>
      <h5>Discover the perfect balance between style with Soul Swap, your one-stop shop for ethical and eco-friendly fashion.</h5>
    </FooterContainer>
    <FooterContainer>
      <h2>Quick Links</h2>
      <router-link to="/shop">
        <h5>Store</h5>
      </router-link>
      <router-link to="/orders">
        <h5>Orders</h5>
      </router-link>
      <router-link to="/privacy">
        <h5>Privacy Policy</h5>
      </router-link>
      <a href="https://revolut.me/bratok">
        <h5>Donat</h5>
      </a>
    </FooterContainer>
    <FooterContainer>
      <h2>Follow Us</h2>
      <h5>Instagram</h5>
      <h5>Telegram</h5>
      <h5>YouTube</h5>
      <h5>TikTok</h5>
    </FooterContainer>
    <FooterContainer>
      <h2>Contact Information</h2>
      <h5>Phone: ***</h5>
      <h5>Email: info@soulswap.store</h5>
    </FooterContainer>
</template>

<script>
import FooterContainer from './footerContainer.vue';

export default {
  name: 'FooterUnit',
  components: {
    FooterContainer
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>

h2 {
  font-size: clamp(20px, 2vw, 24px);
  font-family: "Gilda Display", serif;
  font-weight: 600;
}

.container h5 {
  cursor: pointer;
}

</style>