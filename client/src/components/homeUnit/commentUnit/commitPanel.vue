<template>
  <div class="commit-panel">
    <div class="text">
      <h2>Leave a Review</h2>
      <h5>Your feedback is important to us.</h5>
    </div>
    <div class="container">
      <h5>Review</h5>
      <textarea class="textarea" placeholder="Share your thoughts about our platform" style="width: 1447px; height: 92px;"></textarea>
    </div>
    <div class="commit">
      <UiNewButton text="Commit"/>
    </div>
  </div>
</template>

<script>
import UiNewButton from '@/ui/newButton.vue';

  export default {
    name: 'CommitPanel',
    components: {
      UiNewButton,
    }
  }
</script>

<style scoped>
  .commit-panel {
    width: 100;
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
    border: 1px dashed rgba(0, 0, 0, 0.267);
    border-radius: 6px;
    font-size: 1rem;
    max-height: 8rem;
    max-width: 40%;
    min-height: 8rem;
    min-width: 40%;
    padding: 1%;
    transition: all .3s ease;
  }
  textarea:focus {
    border: 1px solid rgba(0, 0, 0, 0.445);
    outline: none; 
  }
</style>