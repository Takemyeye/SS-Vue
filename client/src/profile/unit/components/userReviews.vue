<template>
  <div class="reviews">
    <div class="text">
      <h2>Reviews</h2>
      <h5>What You've Shared</h5>
    </div>
    <div class="reviews-container">
      <CommentUnit 
        v-for="(comment, index) in paginatedReviews" 
        :key="index" 
        :avatar="comment.user.avatar" 
        :name="`@${comment.user.username}`" 
        :comment="comment.comment"
        :showTrash="true"
        :reviewId="comment.reviewId" 
        @delete-review="deleteReview"
      />
    </div>
      <UiPagination
        v-if="totalReviews > itemsPerPage" 
        style="position: absolute; bottom: -3rem; border: none;"
        :total-items="totalReviews" 
        :items-per-page="itemsPerPage" 
        :default-page="currentPage" 
        :scroll-to-top="false"
        @page-changed="onPageChanged"
      />
  </div>
</template>

<script>
import CommentUnit from '@/components/homeUnit/commentUnit/comment.vue';
import UiPagination from '@/ui/pagination.vue';
import { onMounted, ref, computed } from 'vue';

export default {
  name: 'UserReviews',
  components: {
    UiPagination,
    CommentUnit,
  },
  setup() {
    const reviews = ref([]);
    const totalReviews = ref(0);
    const currentPage = ref(1); 
    const itemsPerPage = ref(3);

    const token = localStorage.getItem('token');

    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://soulswap.store/api/reviews/${token}`);
        const data = await response.json();
        reviews.value = data;
        totalReviews.value = reviews.value.length;
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const deleteReview = async (reviewId) => {
      try {
        const response = await fetch(`https://soulswap.store/api/reviews/${reviewId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          reviews.value = reviews.value.filter(review => review.reviewId !== reviewId);
          totalReviews.value = reviews.value.length;
        } else {
          console.error('Failed to delete review');
        }
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    };

    const onPageChanged = (newPage) => ( currentPage.value = newPage );

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
      deleteReview
    };
  }
}
</script>

<style scoped>
  .reviews {
    position: relative;
    width: 55%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 2rem 2.5%;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
    gap: 1rem;
  }

  .text {
    width: 100%;
    display: flex;
    align-items: start; 
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    padding: 8px 0;
    gap: 8px;
  }

  .reviews-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    gap: 2rem;
  }

  @media all and ( max-width: 1440px ) {
    .reviews-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }
  }

  @media all and ( max-width: 768px ) {
    .reviews {
      width: 80%;
    }
    .reviews-container {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>