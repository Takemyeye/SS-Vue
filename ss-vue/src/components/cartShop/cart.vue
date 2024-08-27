<template>
  <SiteHeader/>
  <CartBlock/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'
import CartBlock from './cartUnit/cartBlock.vue';

  export default {
    name: 'CartShoping',
    components: {
      SiteHeader,
      CartBlock,
    }
  }
</script>
