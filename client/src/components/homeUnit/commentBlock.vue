<template>
  <div class="comment-block">
    <h1>Customer Reviews</h1>
    <CommentPanel/>
    <CommitPanel style="margin-top: 2rem"/>
  </div>
</template>

<script>
import CommentPanel from './commentUnit/commentPanel.vue';
import CommitPanel from './commentUnit/commitPanel.vue';

  export default {
    name: 'CommentBlock',
    components: {
      CommentPanel,
      CommitPanel,
    },
  }
</script>

<style scoped>
  .comment-block {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem 0;
    gap: 4rem;
  }
</style>