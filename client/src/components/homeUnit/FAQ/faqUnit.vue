<template>
  <div class="faq">
    <div class="item">
      <font-awesome-icon :icon="['far', icon]" />
    </div>
    <div class="text">
      <h3>{{ question }}</h3>
      <h5>{{ answer }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqUnit',
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .faq {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    animation: apper linear;
    animation-timeline: view();
    animation-range: entry 0 cover 20%;
    padding: 1rem;
    gap: 2rem;
  }

  .item {
    font-size: clamp(2rem, 3vw, 3rem);
    color: black;
  }

  h3 {
    color: black;
  }

  @keyframes apper {
    from {
      opacity: 0.1;
      scale: 0.5;
      transform: translateX(-100%);
    }
    20% {
      opacity: 0.1;
    }

    to {
      opacity: 1;
      scale: 1;
    }
  }

</style>