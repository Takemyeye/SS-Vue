<template>
  <div class="catalog">
    <div class="settings">
      <div class="slider-background" :style="sliderStyle"></div>
      <h3>Catalog:</h3>
      <h5 
        v-for="(category, index) in categories" 
        :key="category"
        :ref="`category-${index}`"
        @click="selectCategory(category, index)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogBlock',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'JJK', 'FF', 'MHA', 'CON', 'SD'],
      sliderPosition: 0,
      sliderWidth: 0
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(${this.sliderPosition}px)`,
        width: `${this.sliderWidth}px`,
      };
    }
  },
  methods: {
    selectCategory(category, index) {
      this.selectedCategory = category;
      this.$emit('category-selected', category);

      this.$nextTick(() => {
        const selectedElement = this.$refs[`category-${index}`];
        if (selectedElement) {
          this.sliderPosition = selectedElement[0].offsetLeft;
          this.sliderWidth = selectedElement[0].offsetWidth;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      const initialIndex = this.categories.indexOf(this.selectedCategory);
      const initialElement = this.$refs[`category-${initialIndex}`];
      if (initialElement) {
        this.sliderPosition = initialElement[0].offsetLeft;
        this.sliderWidth = initialElement[0].offsetWidth;
      }
    });
  }
};
</script>

<style scoped>
.catalog {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: opacity 1s ease forwards;
}

.settings {
  width: 30%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: start;
  position: relative;
}

h3 {
  font-family: "Gilda Display", serif;
  font-weight: 600;
  color: var(--color-black);
}

.slider-background {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #005C97, #363795);
  border-radius: 1.5rem;
  transition: transform 0.5s ease, width 0.5s ease;
  z-index: 0;
}

h5 {
  font-family: "Gilda Display", serif;
  border-radius: 1.5rem;
  padding: 4px 12px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  color: black;
}

.active {
  color: white;
}

@media all and (max-width: 900px) {
  .settings {
    width: 50%;
    gap: 8px;
  }
}
@media all and (max-width: 768px) {
  .settings {
    width: 60%;
    gap: 8px;
  }
}
@media all and (max-width: 500px) {
  .settings {
    width: 100%;
    gap: 8px;
  }
}
</style>
