<template>
  <div class="cartBlock" v-if="totalPrice > 0">
    <ClearContinue />
    <div class="cartItem">
      <UiCard
        v-for="item in cartItems"
        :key="item.id"
        :src="item.image"
        :alt="item.title"
        :title="`${item.title}`"
        :price="`${item.price} €`"
        :subtitle="item.subtitle"
        :btn="'Remove'"
        :showT="true"
        :showI="false"
        @click="removeItemFromCart(item.id)"
      />
    </div>
  </div>
  <div class="total">
    <h1 v-if="totalPrice > 0">Total: {{ totalPrice }} €</h1>
    <h1 v-else style="position: absolute; top: 50vh;">No items in the cart</h1>
  </div>
</template>

<script>
import { cartState, removeFromCart } from '@/services/activeContext';
import ClearContinue from './clearContinue.vue';
import UiCard from '@/ui/card.vue';

export default {
  name: 'CartBlock',
  components: {
    ClearContinue,
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
  },
};
</script>

<style>
.cartBlock, .total {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cartItem {
  width: 80%;
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
}

.total {
  height: calc(10vh - 1px);
  text-align: center;
  font-weight: bold;
}

@media all and (max-width: 1810px) {
  .cart {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (max-width: 1370px) {
  .cart {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 600px) {
  .cart {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
