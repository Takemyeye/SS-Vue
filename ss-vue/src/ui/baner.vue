<template>
  <router-link :to="{ name: 'Cart' }">
    <div class="baner">
      <img :src="src" :alt="alt">
      <div class="text">
        <h4>{{ title }}</h4>
        <h5>{{ added }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'UiBaner',
    props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Image'
    },
    title: {
      type: String,
      required: true
    },
    added: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
  .baner {
    position: fixed;
    right: 1%;
    bottom: 1%;
    width: 250px;
    height: 60px;
    background-color: white;
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.301);
    border-radius: 8px;
    padding: 8px 1rem;
    border: 1px solid rgba(0, 0, 0, 0.199);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    animation: toTop 1s ease forwards;
  }
  img {
    max-width: 80px;
    max-height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
  .text {
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
  }

  @keyframes toTop {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    50% {
      opacity: 0;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>