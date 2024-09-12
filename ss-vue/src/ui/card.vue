<template>
  <div class="card">
    <img :src="src" :alt="alt">
    <div class="container">
      <div class="cardText">
        <h4>{{ title }} {{ price }}</h4>
        <h5>{{ subtitle }}</h5>
      </div>
      <UiButton 
      :showText="showT"
      :buttonText="btn" 
      :showIcon="showI" 
      />
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
    price: {
      type: String,
      required:true,
      default: ''
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
  animation: apper linear;
  animation-timeline: view();
  animation-range: entry 0;
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
.cardText {
  max-width: 250px;
}
h4 {
  font-weight: bold;
  color: var(--color-black);
}

@keyframes apper {
  from {
    opacity: 0;
    scale: 0.5;
  }
  20% {
    opacity: 0;
  }
  to {
    opacity: 1;
    scale: 1;
  }

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
