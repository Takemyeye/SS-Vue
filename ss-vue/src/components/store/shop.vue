<template>
  <div>
    <SiteHeader />
     <div class="shop">
      <div v-for="image in images" :key="image" class="image-item">
        <img :src="`/art/${image}`" :alt="image" />
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import SiteFooter from '@/components/footer/footer.vue';

export default {
  name: 'ArtShop',
  components: {
    SiteHeader,
    SiteFooter,
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
  gap: 1rem;
}

.image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item img {
  width: 100%;
  object-fit: cover;
}

.image-info {
  text-align: center;
}
</style>
