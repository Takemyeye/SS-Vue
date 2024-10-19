<template>
  <div class="container">
    <CommentUnit 
      v-for="(comment, index) in paginatedReviews" 
      :key="index" 
      :avatar="comment.user.avatar" 
      :name="`@${comment.user.username}`" 
      :comment="comment.comment"
    />

    <UiPagination
      v-if="totalReviews > itemsPerPage" 
      style="position: absolute; bottom: -6rem; right: 0; border: none;"
      :total-items="totalReviews" 
      :items-per-page="itemsPerPage" 
      :default-page="currentPage" 
      :scroll-to-top="false"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import UiPagination from '@/ui/pagination.vue';
import CommentUnit from './comment.vue';

export default {
  name: 'CommentPanel',
  components: {
    CommentUnit,
    UiPagination,
  },
  setup() {
    const reviews = ref([]);
    const totalReviews = ref(0);
    const currentPage = ref(1); 
    const itemsPerPage = ref(4);

    const fetchReviews = async () => {
      try {
        const response = await fetch('https://soulswap.store/api/reviews');
        const data = await response.json();
        reviews.value = data;
        totalReviews.value = reviews.value.length;
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const onPageChanged = (newPage) => {
      currentPage.value = newPage;
    };

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return reviews.value.slice(start, end);
    });

    onMounted(fetchReviews); 

    return {
      reviews,
      totalReviews,
      currentPage,
      itemsPerPage,
      onPageChanged,
      paginatedReviews,
    };
  },
};
</script>

<style scoped>

.container {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    justify-items: center;
    gap: 1rem;
  }

  @media all and ( max-width: 1680px ) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media all and ( max-width: 768px ) {
    .container {
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
    }
  }

</style>