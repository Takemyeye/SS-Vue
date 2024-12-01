<template>
    <div class="container">
        <div class="product">
            <h5>{{ id }}</h5>
            <img :src="src" alt="">
            <h5>{{ price }}</h5>
            <h5>{{ name }}</h5>
            <h5>{{ category }}</h5>
            <h5 v-if="actions">{{ actions }}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductAdmin',
        props: {
            id: {
                type: String,
                default: '',
            },
            src: {
                type: String,
                default: '',
            },
            price: {
                type: String,
                default: '',
            },
            name: {
                type: String,
                default: '',
            },
            category: {
                type: String,
                required: false,
                default: '',
            },
            actions: {
                type: String,
                required: false,
                default: null,
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 95%;
        padding: 1rem 2.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, 0.150);
    }

    .product {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        align-items: center;
    }

    img {
        object-fit: contain;
        width: 90px;
        max-height: 40px;
    }

</style>
