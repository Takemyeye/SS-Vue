<template>
  <SiteHeader/>
  <CartBlock/>
  <CartPrice/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'
import CartBlock from './cartUnit/cartBlock.vue';
import CartPrice from './cartUnit/cartPrice.vue';

  export default {
    name: 'CartShoping',
    components: {
      SiteHeader,
      CartPrice,
      CartBlock,
    }
  }
</script>
