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

    <UiBanner 
      routerPath=""
      v-if="showBanner"
      :src="`https://firebasestorage.googleapis.com/v0/b/soulswap-90b65.appspot.com/o/logo.png?alt=media&token=56016cc0-f211-4129-9a54-db039a817c4f`"
      :title="`Review`"
      :text="errorMessage"
      style="position: absolute;"
    />
  </div>
</template>

<script>
import UiNewButton from '@/ui/newButton.vue';
import UiBanner from '@/ui/banner.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'CommitLeft',
  components: {
    UiNewButton,
    UiBanner,
    UiBadge,
  },
  data() {
    return {
      comment: '', 
      errorMessage: '', 
      showBanner: false, 
      bannerTimeout: null, 
    };
  },
  methods: {
    validateForm() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.errorMessage = 'Missing token. Please log in.';
        return false;
      }
      if (!this.comment) {
        this.errorMessage = 'Please provide a comment.';
        return false;
      }
      this.errorMessage = '';
      return true;
    },

    async submitReview() {
      if (!this.validateForm()) return;

      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://soulswap.store/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            comment: this.comment,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'An error occurred while submitting the review.');
        }
        
        this.comment = ''; 
        this.errorMessage = 'Review submitted successfully!';

      } catch (error) {
        this.errorMessage = error.message;
      }

      this.showBanner = true;

      if (this.bannerTimeout) {
        clearTimeout(this.bannerTimeout);
      }

      this.bannerTimeout = setTimeout(() => {
        this.showBanner = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
  .commit-panel, .commit {
    display: flex;
    align-items: start;
  }
   .commit-panel {
    width: 50%;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }
    .container {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  .commit {
    width: 100%;
  }
  .container {
    width: 100%;
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