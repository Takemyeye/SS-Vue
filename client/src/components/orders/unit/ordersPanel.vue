<template>
    <div class="orders">
        <TopPanel />
    </div>
</template>

<script>
import TopPanel from './components/topPanel.vue';

    export default {
        name: 'OrdersPanel',
        components: {
            TopPanel
        }
    }
</script>

<style scoped>
    .orders {
        width: 80%;
        padding: 2.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    }
</style>