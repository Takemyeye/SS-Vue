<template>
  <div class="top-panel">
    <div class="user" v-if="localUser">
      <img :src="localUser.avatar" alt="User Avatar" class="user-avatar" />
      <div class="info">
        <UiBadge styleBadge="badge4" title="block" @click="banUser"/>
        <p><strong>Id:</strong>{{ localUser.id }}</p>
        <p><strong>Name:</strong>{{ localUser.username }}</p>
        <p><strong>Email:</strong>{{ localUser.email }}</p>
        <p><strong>Status:</strong>{{ localUser.status }}</p>
      </div>
    </div>
    <div class="close-button" @click="closePanel">
      <font-awesome-icon icon="circle-xmark" />
    </div>
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'AdminTopPanel',
  components: {
    UiBadge,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localUser: { ...this.user },
    };
  },
  methods: {
    closePanel() {
      this.$emit('close');
    },
    async banUser() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('No auth token found');
          return;
        }

        const response = await fetch(`http://localhost:3000/api/update-status/${this.localUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
          body: JSON.stringify({
            status: 'banned',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to ban user');
        }

        this.localUser.status = 'banned';

      } catch (error) {
        console.error('Error banning user:', error);
      }
    },
  },
};
</script>

<style scoped>
.top-panel {
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: white;
}

.user {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  padding: 1rem 0;
  gap: 8px;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

p {
  padding: 5px 0;
}

.close-button {
  cursor: pointer;
  color: black;
  font-size: 2rem;
}

.info {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
</style>