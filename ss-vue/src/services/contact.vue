<template>
  <div class="contact">
    <img :src="imgSrc" :alt="altText">
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
    imgSrc: {
      type: String,
      default: 'img/contact.png'
    },
    altText: {
      type: String,
      default: 'Contact Us'
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
  z-index: 1;
  cursor: pointer;
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
