<template>
  <div class="leftPanel">
    <div class="image-container">
      <img src="art/CON3.JPG" alt="Image 1" />
      <div class="overlay"></div>
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

 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  opacity: 0; 
  transition: opacity 1.5s ease-in-out;
  filter: blur(3px);
  opacity: 1;
}

.overlay {
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
