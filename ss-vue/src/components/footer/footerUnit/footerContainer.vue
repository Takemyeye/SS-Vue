<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FooterContainer',
};
</script>

<style scoped>
.container {
  max-width: 300px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

@media all and (max-width: 1024px) {
  .container {
    max-width: 250px;
  }
}
@media all and (max-width: 768px) {
  .container {
    max-width: 150px;
  }
}
</style>
