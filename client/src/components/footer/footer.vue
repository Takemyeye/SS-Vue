<template>
  <footer>
    <div class="footer">
      <FooterUnit/>
    </div>
    <div class="soulswap">
      <h5>© 2024 Manga Art Store. All rights reserved.</h5>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--text-font-family);
  font-weight: var(--text-font-weight);
  font-style: var(--text-font-style);
  padding-top: 2rem;
  gap: 2rem;
}

.footer {
  width: 80%;
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}

.soulswap {
  width: 80%;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.205);
  padding: 2rem 0;
}

@media all and (max-width: 1300px) {
  .footer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
