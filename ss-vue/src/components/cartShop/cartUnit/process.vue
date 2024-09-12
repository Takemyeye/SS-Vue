<template>
    <div class="process">
        <template v-if="order">
            <h2>Order in process</h2>
            <div v-for="item in order.items" :key="item.id" class="order-item">
                <h3>{{ item.title }}</h3>
                <p>{{ item.subtitle }}</p>
                <p>Price: ${{ item.price }}</p>
                <img :src="item.image" alt="Product Image" />
            </div>
            <h3>Total Price: ${{ order.totalPrice }}</h3>
        </template>
    </div>
</template>

<script>
export default {
    name: 'ProcessingOrder',
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
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

.order-item {
    border: 1px solid #ccc;
    padding: 1rem;
    width: 100%;
    max-width: 500px;
}

.order-item img {
    max-width: 100%;
    height: auto;
}
</style>
