<template>
    <div class="statistics">
      <div class="text">
        <h1>Providers Statistics</h1>
        <h5>Number of users per provider</h5>
      </div>
      <canvas ref="chartCanvas"></canvas>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'StatProviders',
    setup() {
      const chartCanvas = ref(null);
      let chartInstance = null;
      const providerCounts = ref({
        google: 0,
        github: 0,
        discord: 0,
      });
  
      const fetchUsers = () => {
        fetch('http://soulswap.store/api/users')
          .then((response) => response.json())
          .then((data) => {
            const counts = {
              google: 0,
              github: 0,
              discord: 0,
            };
  
            data.forEach((user) => {
              if (user.provider) {
                const provider = user.provider.toLowerCase();
                if (counts[provider] !== undefined) {
                  counts[provider]++;
                }
              }
            });
  
            const sortedCounts = Object.entries(counts).sort(([, a], [, b]) => b - a);
  
            const sortedProviderCounts = sortedCounts.map(([name, count]) => ({
              name,
              count,
            }));
  
            providerCounts.value = sortedProviderCounts;
  
            createChart();
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      };
  
      const createChart = () => {
        if (!chartCanvas.value) {
          console.error('Canvas element not available');
          return;
        }
  
        const ctx = chartCanvas.value.getContext('2d');
        if (!ctx) {
          console.error('Failed to get 2D context');
          return;
        }
  
        const labels = providerCounts.value.map((provider) => provider.name);
        const data = providerCounts.value.map((provider) => provider.count);
  
        if (chartInstance) {
          chartInstance.destroy();
        }
  
        chartInstance = new Chart(ctx, {
          type: 'line', 
          data: {
            labels,
            datasets: [
              {
                label: 'Number of users',
                data,
                fill: true,
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 3,
                pointRadius: 6,
                pointBackgroundColor: 'rgba(255, 140, 0, 1)',
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                  font: {
                    size: 14,
                  },
                },
                title: {
                  display: true,
                  text: 'Number of users',
                  font: {
                    size: 16,
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw;
                  },
                },
              },
            },
          },
        });
      };
  
      onMounted(() => {
        fetchUsers();
      });
  
      return {
        chartCanvas,
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
</style>
  