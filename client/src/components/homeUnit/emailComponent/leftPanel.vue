<template>
  <div class="leftPanel">
    <div class="carousel">
      <div class="carousel-inner" :style="carouselStyle">
        <div class="carousel-item" v-for="(item, index) in items" :key="index" :class="{ 'fade': index === currentIndex }">
          <img :src="item.src" :alt="item.alt" />
          <div class="overlay"></div>
        </div>
      </div>
    </div>
    <div class="text">
      <h1>Discover Stunning Artworks</h1>
      <h2>Browse Through Our Collection</h2>
      <router-link :to="{ name: 'Shop' }">
        <UiButton buttonText="View Gallery" />
      </router-link>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';

export default {
  name: 'LeftPanel',
  components: {
    UiButton
  },
  data() {
    return {
      items: [
        { src: 'art/CON1.JPG', alt: 'Image 1' },
        { src: 'art/CON3.JPG', alt: 'Image 2' },
        { src: 'art/JJK1.JPG', alt: 'Image 3' },
        { src: 'art/JJK4.JPG', alt: 'Image 4' },
        { src: 'art/JJK7.JPG', alt: 'Image 5' },
        { src: 'art/JJK8.JPG', alt: 'Image 6' },
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.interval); 
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 5000);
    },
  },
}
</script>

<style scoped>
.leftPanel {
  position: relative;
  width: 25%;
  
  height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

.text {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}

.text h1, h2 {
  color: white;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-inner {
  display: flex;
  transition: transform 1.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  opacity: 0; 
  transition: opacity 1.5s ease-in-out;
  filter: blur(3px);
}

.carousel-item.fade img {
  opacity: 1;
}

.carousel-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(83, 83, 83, 0.253);
  z-index: 1;
  pointer-events: none;
  border-radius: 1rem;
}
@media all and (max-width: 768px) {
  .leftPanel {
    width: 70%;
    height: 50vh;
  }
}
</style>
