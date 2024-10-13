<template>
  <div class="contact" @click="toggleMessenger">
    <img :src="imgSrc" :alt="altText">
  </div>
  <MessengBlock v-if="isMessengerOpen" @close-messenger="toggleMessenger"/>
</template>

<script>
import MessengBlock from './messeng.vue'

export default {
  name: 'ContactUs',
  components: {
    MessengBlock
  },
  props: {
    imgSrc: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/contact.png?alt=media&token=4718c945-1460-4de5-9e1a-6c6217a6c94d'
    },
    altText: {
      type: String,
      default: 'Contact Us'
    }
  },
  data() {
    return {
      isMessengerOpen: false
    };
  },
  methods: {
    toggleMessenger() {
      this.isMessengerOpen = !this.isMessengerOpen;
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 8px;
  border-radius: 50px;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background-color: white;
  cursor: pointer;
  z-index: 1;
}

.contact:hover img {
  width: 38px;
  height: 38px;
}

img {
  width: 32px;
  height: 32px;
  transition: 0.3s ease;
}
</style>
