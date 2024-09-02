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
        <h2>User</h2>
        <UserCard userName="userName" userEmail="userEmail" />

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
    min-height: calc(90vh - 1px);
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
    min-height: calc(90vh - 1px);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }

  .admin-panel {
    width: 75%;
    min-height: calc(90vh - 1px);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 4rem;
  }

  .container {
    width: 90%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
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
    padding: 1rem 0;
  }

</style>
