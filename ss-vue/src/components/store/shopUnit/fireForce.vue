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
      :showI="true"
      @click="addToCart(image)"/>

  </div>
</template>

<script>
import UiCard from '@/ui/card.vue';
import { addToCart } from '@/services/activeContext'; 

export default {
  name: 'FfArt',
  components: {
    UiCard
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
        const response = await fetch('http://localhost:3000/api/images?category=fireForce');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.images = data;
      } catch (error) {
        console.error('Error fetching FireForce images:', error);
      }
    },
    addToCart(image) {
      addToCart(image);
    },
  }
}
</script>

<style scoped>
.shop {
  animation: opacity 0.7s ease forwards;
}
</style>
