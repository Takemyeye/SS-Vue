<template>
  <div class="faq-block">
    <h1>FAQ</h1>
    <div class="container">
      <FaqUnit 
        question="What if the item is damaged?"
        answer="Send us photos within 48 hours for a replacement or refund."
        icon="clipboard"
      />
      <FaqUnit
        question="What payment methods do you accept?"
        answer="We accept PayPal and physical cards."
        icon="credit-card" 
      />
      
      <FaqUnit
        question="Do you offer international shipping?"
        answer="Yes, but currently we can't ship to regions outside Rome."
        icon="map"
      />
      
      <FaqUnit
        question="Can I request custom anime or manga art?"
        answer="Sometimes. Contact our admins for details."
        icon="comment" 
      />
    </div>
  </div>
</template>

<script>
import FaqUnit from './FAQ/faqUnit.vue';

  export default {
    name: 'FaqBlock',
    components: {
      FaqUnit
    }
  }
</script>

<style scoped>
  .faq-block {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(197, 191, 180, 0.445);
    padding: 3rem 0;
    gap: 1rem;
  }
  .container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    gap: 2rem;
  }

  @media all and (max-width: 1680px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media all and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>