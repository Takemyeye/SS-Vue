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
  name: 'SdArt',
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
        const response = await fetch('/api/images?category=sd');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched SD images:', data);
        this.images = data;
      } catch (error) {
        console.error('Error fetching SD images:', error);
      }
    }
  }
}
</script>

<style scoped>
.shop {
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  gap: 1rem;
  animation: opacity 0.7s ease forwards;
}
</style>
