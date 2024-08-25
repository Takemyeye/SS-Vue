<template>
  <div class="priceBlock">
    <div class="price">
      <h1>Total Price</h1>
      <h1>{{ totalPrice }} €</h1>
      <UiButton 
        buttonText="Clear Price"
        @click="clearCart"/>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue'
export default {
  name: 'CartPrice',
  components: {
    UiButton
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  created() {
    this.fetchCartPrice();
  },
  methods: {
    async fetchCartPrice() {
      try {
        const response = await fetch('/api/cart');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.totalPrice = data.totalPrice;
      } catch (error) {
        console.error('Error fetching cart price:', error);
      }
    },
    async clearCart() {
      try {
        const response = await fetch('/api/cart/clear', {
          method: 'POST',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.totalPrice = 0; 
        console.log('Cart cleared:', data);
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    },
  },
}
</script>

<style scoped>
  .priceBlock {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

</style>
