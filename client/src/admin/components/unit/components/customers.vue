<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="text">
      <h1>Products</h1>
      <h5>Manage your store's products</h5>
    </div>
    <div class="container-block">
      <UiBlock :title="'Google'" :number="providerCounts.google" icon="fa-brands fa-google" />
      <UiBlock :title="'Discord'" :number="providerCounts.discord" icon="fa-brands fa-discord" />
      <UiBlock :title="'GitHub'" :number="providerCounts.github" icon="fa-brands fa-github" />
    </div>
  </div>
</template>

<script>
import HeaderAdmin from '../serchAdmin.vue';
import UiBlock from '@/ui/block.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'CustomersAdmin',
  components: {
    HeaderAdmin,
    UiBlock
  },
  setup() {
    const users = ref([]);
    const providerCounts = ref({
      google: 0,
      github: 0,
      discord: 0
    });

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

        const counts = {
          google: 0,
          github: 0,
          discord: 0
        };

        data.forEach(user => {
          if (user.provider) {
            const provider = user.provider.toLowerCase();
            if (counts[provider] !== undefined) {
              counts[provider]++;
            }
          }
        });

        providerCounts.value = counts;
      });
    };

    onMounted(() => {
      fetchUsers();
    });

    return {
      providerCounts
    };
  }
};
</script>

<style scoped>
  .main-block {
    width: 98%;
    height: 95%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }

  .container-block {
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