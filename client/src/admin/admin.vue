<template>
  <div class="admin">
    <div class="left-panel">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :userName="user.username"
        :userAvatar="user.avatar"
        :userId="user.id"
        @click="handleUserClick(user.id)"
      />
    </div>
    <div class="admin-panel">
      <div class="container">
        <UiBlock title="Total Users" :number="stats.totalUsers" styleBadge="badge1" />
        <UiBlock title="Active Shops" :number="stats.activeOrders" styleBadge="badge2" />
        <UiBlock title="Total Revenue" :number="0" styleBadge="badge3" />
      </div>
      <DataUser />
      <SelectedUserPanel 
        v-if="selectedUser" 
        :user="selectedUser" 
        @close="handleClosePanel"
      />
    </div>
  </div>
</template>

<script>
import SelectedUserPanel from './component/selectedUserPanel.vue';
import DataUser from './component/data.vue';
import UserCard from '@/ui/userCard.vue';
import UiBlock from '@/ui/block.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'AdminPanel',
  components: {
    SelectedUserPanel,
    UserCard,
    DataUser,
    UiBlock,
  },
  setup() {
    const users = ref([]);
    const stats = ref({ totalUsers: 0, activeOrders: 0 });
    const selectedUser = ref(null);

    const fetchData = async (url, onSuccess) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          onSuccess(data);
        } else {
          console.error(`Ошибка при получении данных с ${url}`);
        }
      } catch (error) {
        console.error(`Ошибка при получении данных с ${url}:`, error);
      }
    };

    const fetchUsers = () => {
      fetchData('http://localhost:3000/api/users', (data) => {
        users.value = data;
        stats.value.totalUsers = data.length;
      });
    };

    const fetchOrdersCount = () => {
      fetchData('http://localhost:3000/api/orders/count', (data) => {
        stats.value.activeOrders = data.count;
      });
    };

    const handleUserClick = (userId) => {
      selectedUser.value = users.value.find(user => user.id === userId);
    };

    const handleClosePanel = () => {
      selectedUser.value = null;
    };

    onMounted(() => {
      fetchUsers();
      fetchOrdersCount();
    });

    return {
      users,
      stats,
      selectedUser,
      handleUserClick,
      handleClosePanel,
    };
  },
};
</script>

<style scoped >
  .admin {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
  }

  .left-panel {
    width: 15%;
    min-width: 200px;
    height: 90vh;
    overflow-y: auto;
    scrollbar-width: 16px;; 
    scrollbar-color: #888 #f1f1f1; 
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }

  .admin-panel {
    width: 80%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 3rem;
  }

  .container {
    width: 90%;
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }
</style>
