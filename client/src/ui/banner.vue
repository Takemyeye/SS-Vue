<template>
  <router-link :to="routerPath ">
    <div class="baner">
      <img :src="src" :alt="alt">
      <div class="text">
        <h4>{{ title }}</h4>
        <h5>{{ text }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'UiBanner',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'Image'
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    routerPath: {
      type: String,
      default: "/cart",
    }
  }
}
</script>

<style scoped>
  .baner {
    position: fixed;
    right: 70px;
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
    z-index: 2;
  }
  img {
    max-width: 80px;
    max-height: 60px;
    object-fit: cover;
    border-radius: 4px;
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

  @media all and (max-width:768px) {
    .baner {
      width: 175px;
    }
  }
</style>