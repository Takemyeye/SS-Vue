<template>
  <div class="data">
    <h2>User</h2>
    <UserCard
      v-if="selectedUser"
      :userName="selectedUser.username"
      :userEmail="selectedUser.email"
      :userAvatar="`https://cdn.discordapp.com/avatars/${selectedUser.id}/${selectedUser.avatar}.png`"
    />
    <p v-else>No user selected</p>
  </div>
</template>

<script>
import UserCard from '@/ui/userCard.vue';

  export default {
    name: 'DataUser',
    components: {
      UserCard
    }
  }
</script>

<style scoped>
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