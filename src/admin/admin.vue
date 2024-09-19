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
        <UiBlock 
          :title="'Total Users'" 
          :number="totalUsers" 
          :styleBadge="'badge1'" />
        <UiBlock 
          :title="'Active Shops'" 
          :number="activeOrders" 
          :styleBadge="'badge2'" />
        <UiBlock 
          :title="'Total Revenue'" 
          :number="0" 
          :styleBadge="'badge3'" />
      </div>
      <DataUser/>
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
  methods: {
    handleClosePanel() {
      this.selectedUser = null;
    },
  },
  setup() {
    const users = ref([]);
    const totalUsers = ref(0);
    const activeOrders = ref(0);
    const selectedUser = ref(null);

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        if (response.ok) {
          const data = await response.json();
          users.value = data;
          totalUsers.value = data.length;
        } else {
          console.error('Ошибка при получении данных пользователей');
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователей:', error);
      }
    };

    const fetchOrdersCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/orders/count');
        if (response.ok) {
          const data = await response.json();
          activeOrders.value = data.count; 
        } else {
          console.error('Ошибка при получении количества заказов');
        }
      } catch (error) {
        console.error('Ошибка при получении количества заказов:', error);
      }
    };

    const handleUserClick = (userId) => {
      console.log('User ID clicked:', userId);
      selectedUser.value = users.value.find(user => user.id === userId);
      console.log('Selected User:', selectedUser.value);
    };

    onMounted(() => {
      fetchUsers();
      fetchOrdersCount(); 
    });

    return {
      users,
      totalUsers,
      activeOrders, 
      selectedUser, 
      handleUserClick,
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
