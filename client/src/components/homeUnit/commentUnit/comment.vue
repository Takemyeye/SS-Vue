<template>
  <div class="comment">
    <div class="user">
      <img :src="avatar" alt="">
      <UiBadge :title="name" styleBadge="badge1"/>
    </div>
    <div class="messeng">
      <h5>{{ comment }}</h5>
    </div>
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue';

  export default {
    name: 'CommentUnit',
    components : {
      UiBadge
    },
    props: {
      avatar: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .comment {
    width: 280px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.151);
    padding: 2rem 1rem ;
    z-index: 1;
    gap: 2rem;
  }
  .user {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 8px;
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 30px;
  }
  .messeng {
    width: 100%;
    text-wrap: balance;
  }

  @media all and ( max-width: 1680px ) {
    .comment {
      width: 90%;
    }
  }
</style>