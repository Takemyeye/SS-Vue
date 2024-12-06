<template>
    <HeaderAdmin @search="setSearchQuery" />
    <div class="main-block">
        <div class="wrapper">
            <div class="text">
                <h2>Customers</h2>
                <h5>Manage your store's products</h5>
            </div>

            <CustomersUnit
                src="/img/user.png"
                name="Name"
                data="Email"
                status="Status"
                nick="NickName"
                provider="Provider"
                :trash="true"
            >
                <h5>Actions</h5>
            </CustomersUnit>

            <CustomersUnit
                v-for="user in filteredUsers"
                :key="user.id"
                :src="user.avatar"
                :name="user.username"
                :data="user.email"
                :status="user.status"
                :nick="user.nickname || 'A/N'"
                :provider="user.provider"
                :trash="true"
            >
                <div class="container-btn">
                    <UiBadge
                        styleBadge="badge4"
                        title="Block"
                        @click="banUser(user.id)"
                        style="cursor: pointer;"
                    />
                    <UiBadge
                        styleBadge="badge3"
                        title="Unblock"
                        @click="unBanUser(user.id)"
                        style="cursor: pointer;"
                    />
                </div>
            </CustomersUnit>
        </div>
    </div>
</template>

<script>
import CustomersUnit from './unit/customersUnit.vue';
import HeaderAdmin from '../serchAdmin.vue';
import UiBadge from '@/ui/badge.vue';
import { ref, computed, onMounted } from 'vue';

export default {
    name: 'CustomersAdmin',
    components: {
        CustomersUnit,
        HeaderAdmin,
        UiBadge,
    },
    setup() {
        const users = ref([]);
        const searchQuery = ref('');

        const fetchData = async (url, onSuccess) => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    onSuccess(data);
                } else {
                    console.error(`Error fetching data from ${url}: ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Error fetching data from ${url}:`, error);
            }
        };

        const fetchUsers = () => {
            fetchData('http://localhost:3000/api/users', (data) => {
                users.value = data;
            });
        };

        const updateUserStatus = async (userId, newStatus) => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    console.error('No auth token found');
                    return;
                }

                const response = await fetch(`http://localhost:3000/api/update-status/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ status: newStatus }), 
                });

                if (!response.ok) {
                    throw new Error(`Failed to update user status: ${response.statusText}`);
                }

                const responseData = await response.json();
                console.log(responseData);

                const user = users.value.find((u) => u.id === userId);
                if (user) {
                    user.status = newStatus;
                }
            } catch (error) {
                console.error(`Error updating user status:`, error);
            }
        };

        const banUser = (userId) => {
            updateUserStatus(userId, 'banned');
        };

        const unBanUser = (userId) => {
            updateUserStatus(userId, 'active');
        };

        const setSearchQuery = (query) => {
            searchQuery.value = query.toLowerCase();
        };

        //filter user search
        const filteredUsers = computed(() =>
            users.value.filter((user) =>
                user.nickname?.toLowerCase().includes(searchQuery.value)
            )
        );

        onMounted(() => {
            fetchUsers();
        });

        return {
            users,
            banUser,
            unBanUser,
            setSearchQuery,
            filteredUsers,
        };
    },
};
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    gap: 2rem;
  }

  .wrapper {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(221, 221, 221, 0.15);
    border-radius: 8px;
    overflow-y: auto;
    scrollbar-width: 16px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
  }

  .container-btn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

</style>
