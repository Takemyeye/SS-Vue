<template>
  <div class="topBar">
    <video class="background-video" :src="video.video" muted autoplay loop playsinline></video>
    <div class="text">
      <h1>Unleash Your Fandom</h1>
      <h2>Discover Exclusive Anime & Manga Art at Soul Swap</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      video: {
        video: 'video/video.mp4'
      }
    };
  }
}
</script>

<style scoped>
.topBar {
  width: 80%;
  height: 35vh;
  position: relative; 
  margin-top: 1.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: opacity 1s ease-in-out forwards;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}

.text {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.text h1 {
  font-size: clamp(24px, 2vw, 44px);
  font-weight: lighter;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}

.text h2 {
  color: white;
  font-weight: lighter;
  text-align: center;
}
@media all and (max-width: 768px) {
  .text {
    width: 80%;
  }
  .topBar {
    width: 90%;
    height: 30vh;
  }
}
</style>
