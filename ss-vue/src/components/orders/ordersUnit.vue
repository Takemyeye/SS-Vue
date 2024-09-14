<template>
    <div class="process">
        <template v-if="orders.length > 0">
            <div class="container">
                <div v-for="(order, index) in orders" :key="order._id" class="order-item">
                    <h2 style="padding: 2.5rem">Order #{{ index + 1 }}</h2>
                    <div class="wrapper">
                        <div v-for="item in order.cartItems" :key="item.id" class="data">
                            <div class="image">
                                <img :src="`/art/${item.image}`" alt="Product Image" />
                            </div>
                            <div class="description">
                                <UiBadge style="white-space: nowrap;"  :styleBadge="`badge1`" :title="`${item.title}`" />
                                <h5>{{ item.subtitle }}</h5>
                                <h3>Price: ${{ item.price }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <p>No orders found.</p>
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
            orders: [],
        };
    },
    methods: {
        fetchOrders() {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            fetch('http://localhost:3000/api/orders', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    this.orders = data;
                } else {
                    this.orders = [];
                }
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                this.orders = [];
            });
        }
    },
    mounted() {
        this.fetchOrders();
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
    padding-bottom: 5rem;
    gap: 1rem;
}

.container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    animation: fadeInUp 0.5s ease-in-out forwards;
}

.order-item {
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.144);    
    width: 100%;
    padding: 8px 1rem;    
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 8px;
}

.wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1rem
}

.data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: row;
    gap: 10%;
}

.description {
    max-width: 150px;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

h3 {
    color: black;
}

@media all and ( max-width: 1900px) {
   .wrapper {
        grid-template-columns: repeat(3, 1fr);
   }
   .description {
        width: 150px;
   }
}

@media all and ( max-width: 1440px) {
    .wrapper {
        grid-template-columns: repeat(2, 1fr);
   }
}

@media all and ( max-width: 1024px) {
    img {
        width: 150px;
        height: 150px;
    }
}

@media all and ( max-width: 768px) {
    .wrapper {
        grid-template-columns: repeat(1, 1fr);
   }
   .description {
        width: 300px;
   }
}

@media all and ( max-width: 768px) {
    img {
        width: 120px;
        height: 120px;
    }
}
</style>

<!--
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    -->