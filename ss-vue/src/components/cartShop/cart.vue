<template>
  <SiteHeader/>
  <CartBlock/>
  <SiteFooter/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'
import SiteFooter from '@/components/footer/footer.vue'
import CartBlock from './cartUnit/cartBlock.vue';

  export default {
    name: 'CartShoping',
    components: {
      SiteHeader,
      SiteFooter,
      CartBlock,
    }
  }
</script>
