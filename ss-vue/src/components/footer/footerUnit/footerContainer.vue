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

</style>
