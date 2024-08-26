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

export default {
  name: 'MhaArt',
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
        const response = await fetch('http://localhost:3000/api/images?category=mha');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.images = data;
      } catch (error) {
        console.error('Error fetching MHA images:', error);
      }
    },
    async addToCart(image) {
      try {
        const response = await fetch('http://localhost:3000/api/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: image.id,
            price: image.price,
            title: image.title,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    },
  }
}
</script>

<style scoped>
.shop {
  animation: opacity 0.7s ease forwards;
}
</style>
