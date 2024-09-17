<template>
  <div class="cart">
    <SiteHeader/>
    <CartBlock/>
    <FooterPanel/>
  </div>
</template>

<script>
import FooterPanel from '@/components/footer/footer.vue';
import SiteHeader from '@/components/header/header.vue';
import CartBlock from './cartUnit/cartBlock.vue';

  export default {
    name: 'CartShoping',
    components: {
      FooterPanel,
      SiteHeader,
      CartBlock,
    }
  }
</script>

<style scoped>
  .cart {
    width: 100%;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    display: block;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>