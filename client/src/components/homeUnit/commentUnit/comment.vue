<template>
  <div class="comment">
    <div class="user">
      <div class="text">
        <img :src="avatar" alt="">
        <UiBadge :title="name" styleBadge="badge1"/>
      </div>
      <font-awesome-icon 
        v-if="showTrash" 
        icon="trash" 
        style="color: hsl(358, 100%, 69%); font-size: medium; cursor: pointer;" 
        @click="deleteComment"
      />
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
  components: {
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
    },
    showTrash: {
      type: Boolean,
      default: false
    },
    reviewId: {
      type: String,
      required: true
    }
  },
  emits: ['delete-review'], 
  methods: {
    deleteComment() {
      this.$emit('delete-review', this.reviewId); 
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
    justify-content: space-between;
    flex-direction: row;
    gap: 8px;
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 30px;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
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