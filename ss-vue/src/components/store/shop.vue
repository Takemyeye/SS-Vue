<template>
  <div>
    <SiteHeader />
    <div class="shop">
      <UiCard
        v-for="image in images"
        :key="image.id"
        :src="`/art/${image.image}`"
        :alt="image.title"
        :title="image.title"
        :subtitle="image.subtitle"
        :btn="`${image.price} €`"
        :showT="false"
        :showI="true" />
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';
import UiCard from '@/ui/card.vue';

export default {
  name: 'ArtShop',
  components: {
    SiteHeader,
    SiteFooter,
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
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched images:', data);
        this.images = data;
      } catch (error) {
        console.error('Error fetching images:', error);
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
  animation: opacity 4s ease forwards;
}

.image-item {
  width: 420px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
}

.image-item img {
  width: 100%;
  object-fit: contain;
}

.image-info {
  text-align: center;
}
</style>
