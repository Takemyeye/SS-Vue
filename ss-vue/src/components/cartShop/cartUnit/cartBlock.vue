<template>
  <div class="cartBlock">
    <div class="choise">
      <h2>Your Cart</h2>
      <div class="container">
        <div class="continue">
          Continue
        </div>
        <div class="remove" @click="clearCart">
          Remove All
        </div>
      </div>
    </div>
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
  </div>
</template>

<script>
import { cartState, removeFromCart, clearCart } from '@/services/activeContext';
import UiCard from '@/ui/card.vue';

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
.cartBlock {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.choise {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}

.continue, .remove {
  min-width: 100px;
  padding: 6px 0;
  border-radius: 8px;
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
  text-align: center;
}

.continue {
  background-color: white;
  border-color: black;
  color: black;
}

.continue:hover {
  color: white;
  background-color: black;
}

.remove {
  color: white;
  background-color: black;
}

.remove:hover {
  background-color: rgb(43, 43, 43);
}

.cart {
  width: 80%;
  min-height: 70vh;
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
