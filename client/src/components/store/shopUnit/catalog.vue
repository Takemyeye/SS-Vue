<template>
  <div class="catalog">
    <div class="settings">
      <h3>Catalog:</h3>
      <h5 
        v-for="(category) in categories" 
        :key="category"
        @click="selectCategory(category)"
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
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.$emit('category-selected', category);
    },
  },
};
</script>

<style scoped>
.catalog {
  width: 100%;
  height: 5vh;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: fadeInUp 0.5s ease-in-out forwards;
}

.settings {
  width: 30%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
}

h3 {
  font-family: "Gilda Display", serif;
  font-weight: 600;
  color: var(--color-black);
}

h5 {
  font-family: "Gilda Display", serif;
  border-radius: 1.5rem;
  padding: 4px 12px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  color: black;
}

.active {
  color: hsl(210, 100%, 66%);
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
