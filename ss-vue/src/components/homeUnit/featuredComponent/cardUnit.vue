<template>
  <div class="cardUnit">
    <router-link :to="{ name: 'Shop' }">
      <UiCard 
      src="art/MHA1.JPG" 
      alt="Pencil Drawings" 
      title="Pencil Drawings" 
      subtitle="Beauty of pencil sketches"
      btn="Shop"
      :show="false" />
    </router-link>

    <router-link :to="{ name: 'Shop' }">
      <UiCard 
        v-if="isDesktop"
        src="art/JJK12.JPG" 
        alt="Ink and Marker Art" 
        title="Ink and Marker Art" 
        subtitle="Detailed illustrations with ink and markers"
        btn="Shop"
        :show="false" />
    </router-link>

    <router-link :to="{ name: 'Shop' }">
      <UiCard 
        v-if="isDesktop"
        src="art/CON2.JPG" 
        alt="Colored Artwork" 
        title="Colored Artwork" 
        subtitle="Vibrant and colorful creations"
        btn="Shop"
        :show="false" />
    </router-link>
  </div>
</template>

<script> 
import UiCard from '@/ui/card.vue';

export default {
  name: 'CardUnit',
  components: {
    UiCard
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isDesktop() {
      return this.windowWidth > 600;
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
.cardUnit {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}

@media all and (max-width: 1440px) {
  .cardUnit {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 600px) {
  .cardUnit {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
