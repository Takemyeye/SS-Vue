<template>
   <div class="navigation" v-if="isDesktop">
      <router-link :to="{ name: 'Home' }">
        <h3>Home</h3>
      </router-link>
      <router-link :to="{ name: 'Shop' }">
        <h3>All Art</h3>
      </router-link>
      <router-link :to="{ name: 'Cart' }">
        <h3>Cart</h3>
      </router-link>
      <router-link to="/orders">
        <h3>Orders</h3>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',

  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isDesktop() {
      return this.windowWidth > 640;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
  }
</script>

<style scoped>

.navigation {
  position: relative;
  font-size: clamp(18px, 2vw, 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}

.navigation h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-001);
  transition: width 0.3s ease;
}

.navigation h3:hover::after {
  width: 100%;
}

</style>