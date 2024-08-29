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
      @click="removeItemFromCart(item.id)"
    />
  </div>
  <div class="total">
    <h1>Total: {{ totalPrice }} €</h1>
  </div>
</template>

<script>
import UiCard from '@/ui/card.vue';
import { cartState, removeFromCart, clearCart } from '@/services/activeContext';

export default {
  name: 'CartBlock',
  components: {
    UiCard,
  },
  computed: {
    cartItems() {
      return cartState.cartItems;
    },
    totalPrice() {
      return cartState.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    removeItemFromCart(id) {
      removeFromCart(id);
    },
    clearCart() {
      clearCart();
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
