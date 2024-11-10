<template>
  <SiteHeader/>
  <div class="cart">
    <CartBlock/>
  </div>
  <FooterPanel/>
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
    min-height: calc(90vh - 1px);
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>