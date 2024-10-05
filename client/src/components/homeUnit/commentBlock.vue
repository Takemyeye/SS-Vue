<template>
  <div class="comment-block">
    <h1>Customer Reviews</h1>
    <div class="container">
      <CommentUnit 
        avatar=""
        name="Samantha Lee"
        messeng="The quality of the artwork I received was outstanding. Soul Swap has become my go-to for anime-inspired art!"/>
      <CommentUnit 
        avatar=""
        name="Alex Johnson"
        messeng="I love the variety of styles available. From pencil sketches to vibrant digital art, there's something for every fan."/>
      <CommentUnit 
        avatar=""
        name="Mike Chen"
        messeng="The customer service is top-notch. They helped me find the perfect piece for my collection. Highly recommended!"/>
    </div>
  </div>
</template>

<script>
import CommentUnit from './commentUnit/comment.vue'

  export default {
    name: 'CommentBlock',
    components: {
      CommentUnit,
    }
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
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    gap: 6rem;
  }
</style>