<template>
  <div class="commit-panel">
    <div class="text">
      <h2>Leave a Review</h2>
      <h5>Your feedback is important to us.</h5>
    </div>
    <div class="container">
      <UiBadge title="Review" styleBadge="badge3"/>
      <textarea 
        v-model="comment" 
        class="textarea" 
        placeholder="Share your thoughts about our platform" 
        style="width: 1447px; height: 92px;"
        maxlength="250"  
      ></textarea>
    </div>
    <div class="commit">
      <UiNewButton text="Commit" @click="submitReview"/>
    </div>
  </div>
</template>

<script>
import UiNewButton from '@/ui/newButton.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'CommitLeft',
  components: {
    UiNewButton,
    UiBadge
  },
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    async submitReview() {
      const token = localStorage.getItem('token');

      if (!token || !this.comment) {
        alert('Please provide a token and a comment.');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            comment: this.comment
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'An error occurred while submitting the review.');
        }

        const data = await response.json();
        alert(data.message); 
        
        this.comment = '';
      } catch (error) {
        alert(error.message); 
      }
    }
  }
}
</script>

<style scoped>
   .commit-panel {
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }
  .text {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  .commit {
    width: 100%;
    display: flex;
    justify-content: start;
  }
  .container {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 6px;
    font-size: 1rem;
    max-height: 8rem;
    max-width: 80%;
    min-height: 8rem;
    min-width: 80%;
    padding: 1%;
    transition: all .3s ease;
  }
  textarea:focus {
    border: 1px solid rgba(0, 0, 0, 0.596);
    outline: none; 
  }
  h2 {
    font-weight: 700;
  }

  @media all and ( max-width: 768px ) {
    .commit-panel {
      width: 100%;
    }
    textarea {
      max-width: 95%;
      min-width: 95%;
    }
  }

</style>