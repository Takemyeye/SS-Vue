<template>
    <div class="process">
        <template v-if="order">
            <h1 style="padding: 2.5rem ">Orders in process</h1>
            <div class="container">
                <div v-for="item in order.items" :key="item.id" class="order-item">
                    <div class="data">
                        <div class="image">
                            <img :src="`/art/${item.image}`" alt="Product Image" />
                        </div>
                        <div class="description">
                            <UiBadge :styleBadge="`badge1`" :title="`${item.title}`" />
                            <h5>{{ item.subtitle }}</h5>
                        </div>
                    </div>
                    <h3>Price: ${{ item.price }}</h3>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue';

    export default {
        name: 'OrdersUnit',
        components: {
            UiBadge
        },
        data() {
        return {
            order: null, 
        };
    },
    methods: {
        fetchOrder() {
            const token = localStorage.getItem('token'); 
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            fetch('http://localhost:3000/api/order', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.items && data.items.length > 0) {
                    this.order = data;
                } else {
                    this.order = null;
                }
            })
            .catch(error => {
                console.error('Error fetching order:', error);
                this.order = null;
            });
        }
    },
    mounted() {
        this.fetchOrder();
    }
    }
    
</script>

<style scoped>
.process {
    width: 100%;
    min-height: calc(90vh - 1px );
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
}

.container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
}

.order-item {
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.144);    padding: 1rem;
    width: 320px;
    max-height: 370px;
    padding: 8px 1rem;    
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
}

.data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem; 
}

.description {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
}

img {
    width: 100%;
    max-height: 230px;
    object-fit: contain;
}

h3 {
    color: black;
}

@media all and ( max-width: 1440px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media all and ( max-width: 1024px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media all and ( max-width: 768px) {
    .container {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>