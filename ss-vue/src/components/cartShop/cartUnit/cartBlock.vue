<template>
  <div class="cart">
    <UiCard
      v-for="item in cartItems"
      :key="item.id"
      :src="`/art/${item.image}`"
      :alt="item.title"
      :title="`${item.title}`"
      :subtitle="item.subtitle"
      :showT="false"
      :showI="true"
    />
  </div>
</template>

<script>
import UiCard from '@/ui/card.vue'

export default {
  name: 'CartBlock',
  components: {
    UiCard
  },
  data() {
    return {
      cartItems: [],
    };
  },
  created() {
    this.fetchCartItems();
  },
  methods: {
    async fetchCartItems() {
      try {
        const response = await fetch('http://localhost:3000/api/cart');
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data = await response.json();
        this.cartItems = data.items;
      } catch (error) {
        console.error('Ошибка при получении данных корзины:', error);
      }
    },
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}
.cartItem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}
</style>
