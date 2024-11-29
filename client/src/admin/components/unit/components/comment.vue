<template>
  <HeaderAdmin @search="setSearchQuery" />
  <div class="main-block">
    <div class="wrapper">
      <div class="text">
        <h2>Comment</h2>
        <h5>Manage your store's products</h5>
      </div>

      <CommentUnit 
        src="/img/user.png"
        id="Id"
        name="Name"
        date="Date"
        data="Comment"
        status="status"
        :trash="true"
      >
        <h5>Action</h5>
      </CommentUnit>

      <CommentUnit 
        v-for="comment in filteredReviews" 
        :key="comment.reviewId"
        :src="comment.user.avatar"
        :id="comment.reviewId"
        :name="comment.user.username"
        :date="new Date(comment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })"
        :data="comment.comment"
        :status="comment.status || '~~'"
        :trash="true"
      >
        <div class="container-btn">
          <UiBadge
            styleBadge="badge4"
            title="Delete"
            style="cursor: pointer;"
            @click="deleteReview(comment.reviewId)"
          />
          <UiBadge
            styleBadge="badge3"
            title="Approve"
            style="cursor: pointer;"
            @click="approveReview(comment.reviewId)" 
          />
        </div>
      </CommentUnit>
    </div>
  </div>
</template>

<script>
import CommentUnit from './unit/commentUnit.vue';
import HeaderAdmin from '../serchAdmin.vue';
import UiBadge from '@/ui/badge.vue';
import { ref, onMounted, computed } from 'vue';

export default {
  name: 'CommentAdmin',
  components: {
    CommentUnit,
    HeaderAdmin,
    UiBadge,
  },
  setup() {
    const reviews = ref([]);
    const searchQuery = ref('');

    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        reviews.value = await response.json();
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const deleteReview = async (reviewId) => {
      try {
        const response = await fetch(`http://localhost:3000/api/reviews/${reviewId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete review');
        }
        reviews.value = reviews.value.filter((review) => review.reviewId !== reviewId);
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    };

    const approveReview = async (reviewId) => {
      try {
        const response = await fetch(`http://localhost:3000/api/reviews/${reviewId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'approved' }),
        });
        if (!response.ok) {
          throw new Error('Failed to approve review');
        }
        const index = reviews.value.findIndex((review) => review.reviewId === reviewId);
        if (index !== -1) {
          reviews.value[index].status = 'approved';
        }
      } catch (error) {
        console.error('Error approving review:', error);
      }
    };

    // Search funcion
    const filteredReviews = computed(() => {
      if (!searchQuery.value) return reviews.value;
      return reviews.value.filter((review) => 
        review.reviewId.toString().includes(searchQuery.value)
      );
    });

    const setSearchQuery = (query) => {
      searchQuery.value = query;
    };

    onMounted(fetchReviews);

    return {
      reviews,
      searchQuery,
      filteredReviews,
      deleteReview,
      approveReview,
      setSearchQuery,
    };
  },
};
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    gap: 2rem;
  }

  .wrapper {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(221, 221, 221, 0.15);
    border-radius: 8px;
    overflow-y: auto;
    scrollbar-width: 16px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
  }

  .container-btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .text {
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
</style>