<template>
  <HeaderAdmin />
  <div class="dashboard">
    <div class="text">
      <h1>Dashboard</h1>
      <h5>Welcome! Here's an overview of your platform's performance.</h5>
    </div>
    <div class="container">
      <UiBlock title="Total Revenue" :number="`+ ${stats.revenue} $`" icon="fa-solid fa-dollar-sign" />
      <UiBlock title="Active Now" :number="`+ ${stats.activeOrders}`"  icon="fa-solid fa-credit-card"  />
      <UiBlock title="Total Users" :number="stats.totalUsers" icon="fa-solid fa-users" />
    </div>
    <DashboardMain />
  </div>
</template>

<script>
import DashboardMain from './unit/dashboardMain.vue';
import HeaderAdmin from '../serchAdmin.vue';
import UiBlock from '@/ui/block.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'DashboardAdmin',
  components: {
    DashboardMain,
    HeaderAdmin,
    UiBlock,
  },
  setup() {
    const users = ref([]);
    const stats = ref({ totalUsers: 0, activeOrders: 0, revenue: 0 });

    const fetchData = async (url, onSuccess) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          onSuccess(data);
        } else {
          console.error(`Error fetching data from ${url}`);
        }
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    const fetchUsers = () => {
      fetchData('http://localhost:3000/api/users', (data) => {
        users.value = data;
        stats.value.totalUsers = data.length;
      });
    };

    const fetchOrdersCount = () => {
      fetchData('http://localhost:3000/api/orders', (data) => {
        stats.value.activeOrders = data.length;
                
        stats.value.revenue = data.reduce((total, order) => total + order.totalPrice, 0);
      });
    };

    onMounted(() => {
      fetchUsers();
      fetchOrdersCount();
    });

    return {
      users,
      stats,
    };
  }
}
</script>

<style scoped>
  .dashboard {
    width: 98%;
    height: 95%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4rem;
  }
  .text {
    width: 100%;
    gap: 8px;
    text-align: start;
  }
</style>
