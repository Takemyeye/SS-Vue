<template>
  <div class="description">
    <h2>{{ name }}</h2>
    <div class="works">
      <h5>The best works:</h5>
      <UiBadge :title="manga" styleBadge="badge4" style=" font-size: clamp(10px, 2vw, 12px);"/>
    </div>
    <h3 style="font-size: clamp(14px, 2vw, 15px);">{{ text }}</h3>
    <a :href="link">
      <UiButton style="font-weight: 400;" :buttonText="btn"/>
    </a>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';
import UiBadge from '@/ui/badge.vue';

  export default {
    name: 'ArtistContainer',
    components: {
      UiButton,
      UiBadge
    },
    props: {
      name: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      btn: {
        type: String,
        required: true
      },
      manga: {
        type: String,
        required: true
      },
    }
  }
</script>

<style scoped>
  .works {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 8px;
  }

  .description {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  @media all and (max-width: 1444px) {

  }

</style>