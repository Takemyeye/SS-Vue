<template>
    <SiteHeader/>
    <ErrorBlock/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'
import ErrorBlock from './ErrorBlock.vue';

 export default {
    name: 'NotFound',
    components: {
        SiteHeader,
        ErrorBlock
    },
 };
</script>
