<template>
  <div class="main-block">
    <div class="wrapper">
      <div class="text">
        <h2>Comment</h2>
        <h5>Manage your store's products</h5>
      </div>

      <CommentUnit 
        src="/img/user.png"
        name="Name"
        date="Date"
        data="Comment"
        status="status"
        :trash="true"
      >
        <h5>Action</h5>
      </CommentUnit>

      <CommentUnit 
        v-for="(comment, index) in reviews" 
        :key="index" 
        :src="comment.user.avatar || '/default-avatar.png'"
        :name="`@${comment.user.username}`"
        :date="new Date(comment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })"
        :data="comment.comment"
        status="~~"
        :trash="true"   
      >
        <div class="container-btn">
          <UiBadge
            styleBadge="badge4"
            title="Delete"
            style="cursor: pointer;"
          />
          <UiBadge
            styleBadge="badge3"
            title="Approve"
            style="cursor: pointer;"
          />
        </div>
      </CommentUnit>
    </div>
  </div>
</template>

<script>
import CommentUnit from './unit/commentUnit.vue';
import UiBadge from '@/ui/badge.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'CommentAdmin',
  components: {
    CommentUnit,
    UiBadge
  },
  setup() {
    const reviews = ref([]);

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

    onMounted(fetchReviews);

    return {
      reviews
    };
  }
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