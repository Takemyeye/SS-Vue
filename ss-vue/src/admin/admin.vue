<template>
  <SiteHeader />
  <div class="admin">
    <div class="left-panel">
      <UserCard userName="userName" />
    </div>
    <div class="admin-panel">
      <div class="container">
        <UiBlock title="Total Users" number="0"/>
        <UiBlock title="Active Shops" number="0"/>
        <UiBlock title="Total Revenue" number="0"/>
      </div>
      <div class="data">

      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/header/header.vue';
import UserCard from '@/ui/userCard.vue';
import UiBlock from '@/ui/block.vue';

export default {
  name: 'AdminPanel',
  components: {
    SiteHeader,
    UserCard,
    UiBlock,
  },
};
</script>

<style scoped>

  .admin {
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .left-panel {
    width: 15%;
    min-width: 200px;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }

  .admin-panel {
    width: 75%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 4rem;
  }

  .container {
    width: 90%;
    height: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    position: relative;
    top: 2rem;
  }

  .data {
    width: 90%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.315);
    border-radius: 8px;
  }
  
</style>
