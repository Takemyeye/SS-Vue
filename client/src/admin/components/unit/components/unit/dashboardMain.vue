<template>
    <div class="main-block">
      <div class="orders">
        
      </div>

    </div>
</template>

<script>
    export default {
        name: 'DashboardMain',
        components: {

        },
        setup() {

            const orders = ref([]);

            const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/orders');
                if (response.ok) {
                orders.value = await response.json();
                } else {
                console.error('Ошибка при получении данных заказов');
                }
            } catch (error) {
                console.error('Ошибка при получении данных заказов:', error);
            }
            };

            const deleteOrder = async (orderId) => {
                try {
                    const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        orders.value = orders.value.filter(order => order.orderId !== orderId);
                    } else {
                        const errorData = await response.json();
                        console.error('Error deleting order:', errorData);
                    }
                } catch (error) {
                    console.error('Error deleting order:', error);
                }
            };

            return {

            }
        }
    }
</script>

<style scoped>
    .main-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
  }

    .orders {
        width: 55%;
        height: 100%;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.150);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

</style>