<template>
  <div class="statistics">
    <div class="text">
      <h1>Top Orders</h1>
      <h5>Top orders by sales volume</h5>
    </div>
    <canvas ref="ordersChartCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'StatisticsAdmin',
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const chartInstance = ref(null);
    const ordersChartCanvas = ref(null);

    const createChart = () => {
      if (!ordersChartCanvas.value || !ordersChartCanvas.value.getContext) {
        console.error('Canvas for orders chart is not ready.');
        return;
      }

      const ctx = ordersChartCanvas.value.getContext('2d');
      const sortedOrders = [...props.orders].sort((a, b) => b.totalPrice - a.totalPrice);

      const labels = sortedOrders.map(order => order.orderId || 'N/A');
      const data = sortedOrders.map(order => order.totalPrice || 0);

      if (chartInstance.value) {
        chartInstance.value.destroy();
      }

      chartInstance.value = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Revenue per Order',
              data,
              backgroundColor: 'rgb(11, 100, 0, 0.5)',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    watch(
      () => props.orders,
      () => {
        createChart();
      },
      { deep: true }
    );

    onMounted(() => {
      createChart();
    });

    onBeforeUnmount(() => {
      if (chartInstance.value) {
        chartInstance.value.destroy();
        chartInstance.value = null;
      }
    });

    return {
      ordersChartCanvas,
    };
  },
};
</script>

<style scoped>
.statistics {
  width: 40%;
  height: 40vh;
  padding: 2.5%;
  border: 1px solid rgba(0, 0, 0, 0.150);
  border-radius: 8px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  background-color: white;
  gap: 1rem;
}

.text {
  width: 100%;
  gap: 8px;
  text-align: start;
}
</style>
