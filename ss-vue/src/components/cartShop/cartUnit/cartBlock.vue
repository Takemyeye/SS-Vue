<template>
  <div class="cart">
    <UiCard
      v-for="item in cartItems"
      :key="item.id"
      :src="`/art/${item.image}`"
      :alt="item.title"
      :title="`${item.title} `"
      :subtitle="item.subtitle"
      :btn="'Remove'"
      :showT="true"
      :showI="false"
      @click="removeFromCart(item.id)"
    />
  </div>
  <div class="total">
    <h1>Total: {{ totalPrice }} €</h1>
  </div>
</template>

<script>
import UiCard from '@/ui/card.vue';
import { getCart, clearCart } from '@/services/cartService';

export default {
  name: 'CartBlock',
  components: {
    UiCard,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
  },
  created() {
    this.loadCartItems();
  },
  methods: {
    loadCartItems() {
      this.cartItems = getCart();
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    clearCart() {
      clearCart();
      this.cartItems = [];
    },
  },
};
</script>

<style>
.cart {
  width: 80%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}

.total {
  width: 100%;
  height: 10vh;
  text-align: center;
  font-weight: bold;
}
</style>
