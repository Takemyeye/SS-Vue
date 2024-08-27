<template>
  <div class="shop">
    <UiCard
      v-for="image in images"
      :key="image.id"
      :src="`/art/${image.image}`"
      :alt="image.title"
      :title="`${image.price} €`"
      :subtitle="image.subtitle"
      :btn="`${image.price} €`"
      :showT="false"
      :showI="true "
      @click="addToCart(image)"
    />
  </div>
</template>

<script>
import UiCard from '@/ui/card.vue';
import { addToCart } from '@/services/cartService';

export default {
  name: 'AllArt',
  components: {
    UiCard,
  },
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await fetch('http://localhost:3000/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.images = data;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    addToCart(image) {
      addToCart(image); 
    },
  },
};
</script>

<style>
.shop {
  width: 80%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  padding-bottom: 5rem;
  gap: 1rem;
  animation: opacity 0.7s ease forwards;
}

@media all and (max-width: 1810px) {
  .shop {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (max-width: 1370px) {
  .shop {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
