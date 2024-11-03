<template>
  <div class="description">
    <h2>Gege Akutami</h2>
    <div class="works">
      <h5>The best works:</h5>
      <UiBadge title="Jujutsu Kaisen" styleBadge="badge4" style=" font-size: clamp(10px, 2vw, 12px);"/>
    </div>
    <h3 style="font-size: clamp(14px, 2vw, 15px);">Gege Akutami is a rising star in the manga art world, known for her ethereal style and captivating character designs. With a passion for blending traditional Japanese art with modern manga techniques, Gege's work has garnered international acclaim.</h3>
    <UiButton style="font-weight: 400;" :buttonText="`View Gege's Collection`"/>
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