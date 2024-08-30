<template>
  <div class="search">
    <h3>Search:</h3>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search your Characters"
      @input="handleSearch"
    />
  </div>
</template> 

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery.toLowerCase());
    }
  }
}
</script>

<style scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 2rem;
  gap: 1rem;
  animation: fadeInUp 0.5s ease-in-out forwards;}
h3 {
  font-family: "Gilda Display", serif;
    font-weight: 600;
    color: var(--color-black);
}
input {
  width: 30%;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #00000025;
}
input:focus {
  border-color: #003772;
  outline: none;
}

@media all and (max-width: 900px) {
  input {
    width: 50%;
  }
}
@media all and (max-width: 768px) {
  input {
    width: 60%;
  }
}
</style>
