<template>
  <div class="cart">
    <UiCard
      v-for="item in cartItems"
      :key="item.id"
      :src="`/art/${item.image}`"
      :alt="item.title"
      :title="`${item.price} €`"
      :subtitle="item.subtitle"
      :btn="'Remove'"
      :showT="false"
      :showI="true"
      @click="removeFromCart(item.id)"
    />
    <div class="total">
      Total: {{ totalPrice }} €
    </div>
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
  margin: 0 auto;
}

.total {
  text-align: right;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
