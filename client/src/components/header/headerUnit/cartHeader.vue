<template>
  <router-link :to="'/cart'">
    <div class="cartIcon">
      <font-awesome-icon icon="cart-shopping" />
      <div class="circle" v-if="cartItemsCount >= 1">{{ cartItemsCount }}</div>
    </div>
  </router-link>
</template>

<script>
import { cartState } from '@/services/activeContext';
import { computed } from 'vue';

  export default {
    name: 'CartHeader',
    setup() {
      const cartItemsCount = computed(() => cartState.totalItems);

      return {
        cartItemsCount
      }
    }
  }
</script>

<style scoped>

.cartIcon {
  position: relative;
  font-size: clamp(18px, 2vw, 22px);
  color: var(--color-000);
  font-weight: 500;
  padding: 8px;
}

.circle {
  border-radius: 50px;
  background-color: hsl(358, 100%, 69%);
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 1px 0;
  width: 1rem;
  right: 0;
  top: 0;
}

</style>