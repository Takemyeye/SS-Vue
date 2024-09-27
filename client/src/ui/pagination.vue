<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <font-awesome-icon icon="chevron-left" />
    </button>

    <button
      @click="goToPage(1)"
      :class="{ active: currentPage === 1 }"
      class="page-number"
    >
      1
    </button>

    <span v-if="currentPage > 3">...</span>

    <button
      v-for="page in middlePages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
      class="page-number"
    >
      {{ page }}
    </button>

    <span v-if="currentPage < totalPages - 2">...</span>

    <button
      @click="goToPage(totalPages)"
      :class="{ active: currentPage === totalPages }"
      class="page-number"
    >
      {{ totalPages }}
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
    },
    middlePages() {
      if (this.totalPages <= 5) {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1).slice(1, -1);
      }

      if (this.currentPage <= 3) {
        return [2, 3, 4];
      } else if (this.currentPage >= this.totalPages - 2) {
        return [this.totalPages - 3, this.totalPages - 2, this.totalPages - 1];
      } else {
        return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      }
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
    goToPage(page) {
      this.currentPage = page;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.349);
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
