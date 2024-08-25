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
      :showI="true" />
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
    }
  }
}
</script>

<style scoped>
.shop {
  animation: opacity 0.7s ease forwards;
}
</style>
