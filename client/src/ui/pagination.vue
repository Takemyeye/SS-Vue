<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
      class="page-number"
    >
      {{ page }}
    </button>

    <button @click="nextPage" :disabled="currentPage === totalPages">
      <font-awesome-icon icon="chevron-right" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'UiPagination',
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 8
    },
    defaultPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: this.defaultPage
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
  },
  watch: {
    currentPage(newPage) {
      this.$emit('page-changed', newPage);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    // to top
    goToPage(page) {
      this.currentPage = page;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
      });
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
}

button {
  border: 1px solid rgba(0, 0, 0, 0.267);
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  color: white;
  font-weight: lighter;
  background-color: black;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: rgb(59, 59, 59);
  color: white;
}

.page-number.active {
  background-color: rgb(59, 59, 59);
}
</style>
