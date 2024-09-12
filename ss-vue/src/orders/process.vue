<template>
    <div class="container">
        <HeaderPanel/>
        <OrdersUnit/>
    </div>
</template>

<script>
import HeaderPanel from '@/components/header/header.vue';
import OrdersUnit from './ordersUnit.vue';

export default {
    name: 'ProcessingOrder',
    components: {
        HeaderPanel,
        OrdersUnit
    },
}
</script>


<style scoped>
    .container {
        font-family: var(--text-font-family);
        font-optical-sizing: var(--text-font-optical-sizing);
        font-weight: var(--text-font-weight);
        font-style: var(--text-font-style);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
    }
</style>
