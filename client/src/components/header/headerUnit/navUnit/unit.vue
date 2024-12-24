<template>
  <router-link :to="link">
    <h3>{{ nav }}</h3>
  </router-link>
</template>

<script>
  export default {
    name: 'NavLink',
    props: {
      link: {
        type: String,
        default: ''
      },
      nav: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  a {
    position: relative;
  }

  h3 {
    color: var(--color-000);
    font-size: clamp(16px, 2vw, 18px);
  }

  h3::after {
    content: '';
    transition: 0.3s ease;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: black;
  }

  h3:hover::after {
    width: 100%;
  }
</style>