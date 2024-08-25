<template>
  <div class="card">
    <img :src="src" :alt="alt">
    <div class="container">
      <div class="cardText">
        <h4>{{ title }}</h4>
        <h5>{{ subtitle }}</h5>
      </div>
      <UiButton 
      :showText="showT"
      :buttonText="btn" 
      :showIcon="showI" />
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';

export default {
  name: 'UiCard',
  components: {
    UiButton
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Image'
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      required: true
    },
    showT: {
      type: Boolean,
      default: true
    },
    showI: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.card {
  width: 320px;
  max-height: 370px;
  font-optical-sizing: var(--text-font-optical-sizing);
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.144);
  padding: 8px 1rem;
  gap: 1rem;
}
img {
  width: 100%;
  max-height: 230px;
  border-radius: 6px;
  object-fit: contain;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
h4 {
  font-weight: bold;
  color: var(--color-black);
}
@media all and (max-width: 900px) {
  .card {
    width: 240px;
    max-height: 270px;
  }
  img {
    max-height: 175px;
  }
}
</style>
