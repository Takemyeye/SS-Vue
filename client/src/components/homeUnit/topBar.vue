<template>
  <div class="topBar">
    <div class="background"></div>
    <div class="text">
      <h1>Unleash Your Fandom</h1>
      <h2>Discover Exclusive Anime & Manga Art at Soul Swap</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped>
.topBar {
  width: 80%;
  height: 30vh;
  position: relative; 
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
