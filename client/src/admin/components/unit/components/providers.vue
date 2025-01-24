<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="text">
      <h1 style="padding-top: 1rem;">Providers</h1>
    </div>
    <div class="container-block">
      <UiBlock :title="'Google'" :number="providerCounts.google" icon="fa-brands fa-google" />
      <UiBlock :title="'Discord'" :number="providerCounts.discord" icon="fa-brands fa-discord" />
      <UiBlock :title="'GitHub'" :number="providerCounts.github" icon="fa-brands fa-github" />
    </div>
    <ProvidersPanel />
  </div>
</template>

<script>
import ProvidersPanel from './unit/providersPanel.vue';
import HeaderAdmin from '../serchAdmin.vue';
import UiBlock from '@/ui/block.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'ProvidersAdmin',
  components: {
    ProvidersPanel,
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
      fetchData('http://soulswap.store/api/users', (data) => {
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

</style>