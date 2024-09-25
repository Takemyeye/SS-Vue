<template>
  <div class="messeng">
    <div class="wrapper">
      <div class="container">
        <img src='img/logo.png' alt="">
        <h3>Soul Swap</h3>
        <div class="exit" @click="exitMessenger">
          <font-awesome-icon icon="xmark" style="font-size: 24px;" />
        </div>
      </div>
      <video src="video/video2.mp4" muted autoplay loop playsinline></video>
    </div>
    <MessengerBlock/>
  </div>
</template>

<script>
import MessengerBlock from './unit/messengBlock.vue';

export default {
  name: 'MessengBlock',
  components: {
    MessengerBlock
  },
  methods: {
    exitMessenger() {
      this.$emit('close-messenger');
    }
  }
}
</script>

<style scoped>
  .messeng {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    height: 550px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.479);
    padding: 8px;
    border-radius: 1rem;
    z-index: 1000;
    animation: opacity 0.5s ease-in-out forwards;
  }
  
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  img {
    width: 32px;
    height: 32px;
  }

  .exit {
    padding: 4px 8px;
    cursor: pointer;
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
  }

  video {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

@media all and (max-width:768px) {
  .messeng {
    max-width: 300px;
  }
}
</style>