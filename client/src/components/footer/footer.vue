<template>
  <footer>
    <FooterUnit/>
  </footer>
</template>

<script>
import FooterUnit from './footerUnit/footerUnit.vue';

export default {
  name: 'SiteFooter',
  components: {
    FooterUnit
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  padding-bottom: 1rem;
  padding-top: 2rem;
}

@media all and (max-width: 768px) {
  footer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
