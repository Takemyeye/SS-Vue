<template>
  <div class="topBar">
    <div class="background"></div>
    <div class="text">
      <h1>Unleash Your Fandom</h1>
      <h2>Discover Exclusive Anime & Manga Art at Soul Swap</h2>
    </div>
    <div v-if="showContainer" class="container">
      <router-link to="/shop">
        <UiButton 
          style="min-width: 90px;"
          buttonText="Shop"
        />
      </router-link>
      <button class="btn" @click="scrollToFeatured">
        <h3>More</h3>
      </button>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';

export default {
  name: 'TopBar',
  components: { UiButton },
  props: {
    showContainer: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    scrollToFeatured() {
      const targetPosition = window.scrollY + window.innerHeight * 0.4; // 40vh
      const start = window.scrollY;
      const duration = 500;

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + (targetPosition - start) * ease);
        if (progress < 1) requestAnimationFrame(animateScroll);
      };

      const startTime = performance.now();
      requestAnimationFrame(animateScroll);
    }
  }
};
</script>

<style scoped>
.topBar {
  width: 80%;
  min-height: 30vh;
  position: relative; 
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
}

.background {
  position: absolute;
  left: 0;
  width: 100%;
  height: calc(100% - 4rem);
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(-45deg, hsl(214, 59%, 15%), hsl(281, 38%, 16%), hsl(275, 80%, 71%), hsl(210, 100%, 66%));
	animation: gradient 15s ease-in-out infinite;
	background-size: 400% 400%;
  border-radius: 1.5rem;
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

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 1;
  gap: 1rem;
}

.btn {
  min-width: 90px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: white;
  padding: 6px 10px;
  cursor: pointer;
  transition: 0.5s ease;
  text-align: center;
}

.btn:hover {
  background-color: rgba(216, 216, 216, 0.349);
  border-color: rgba(216, 216, 216, 0.349);
}

.btn h3 {
  color: black;
  font-weight: lighter;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
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
