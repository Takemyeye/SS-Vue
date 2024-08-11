<script>

export default {
  name: 'SiteFooter',
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

<template>

  <footer>
    <div class="container">
      <h2>Soul Swap</h2>
      <h4>Discover the perfect balance between style and sustainability with Soul Swap, your one-stop shop for ethical and eco-friendly fashion.</h4>
    </div>
    <div class="container">
      <h2>Quick Links</h2>
      <h3>About</h3>
      <h3>Contact</h3>
      <h3>Privacy Policy</h3>
    </div>
    <div class="container">
      <h2>Follow Us</h2>
      <div class="social">
        <h4><font-awesome-icon icon="fa-brands fa-instagram" /></h4>
        <h4><font-awesome-icon icon="fa-brands fa-tiktok" /></h4>
        <h4><font-awesome-icon icon="fa-brands fa-telegram" /></h4>
      </div>
    </div>
    <div class="container">
      <h4>© 2024 Soul Swap. All rights reserved.</h4>
    </div>
    <div class="container">
      <h3 @click="scrollToTop">Back to top</h3>
    </div>
  </footer>

</template>


<style scoped>

  footer {
    width: 100%;
    height: 25vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, auto);
    font-family: var(--text-font-family);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    padding-bottom: 2rem;
  }
  .container {
    max-width: 300px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .container h3 {
    cursor: pointer;
  }
  h2 {
    font-size: clamp(20px, 2vw, 24px);
    font-family: "Gilda Display", serif;
    font-weight: 600;
  }
  .social {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    color: var(--color-001);
  }
  .social h4 {
    color: var(--color-000);
    font-size: clamp(18px, 2vw, 24px);
    transition: color 0.3s ease;
    cursor: pointer;
  }
  .social h4:hover {
    color: black;
  }
  .container h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-000);
    transition: width 0.3s ease;
  }
  .container h3:hover::after {
    width: 100%; 
  }
</style>