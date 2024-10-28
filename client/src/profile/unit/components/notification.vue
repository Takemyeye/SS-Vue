<template>
  <div class="settings">
    <div class="text">
      <h2>Notifications</h2>
      <h5>Manage your notification preferences.</h5>
    </div>
    <div class="notification-container">
      <NotificationUnit 
        title="Marketing emails"
        subtitle="Receive emails about new products and offers"
        toggleId="marketingEmails"
        :toggleState="userNotifications.marketingEmails"
        @switch-change="updateNotificationPreference"
      />
      <NotificationUnit
        style="display: none;"
        title="Order notifications"
        subtitle="Receive notifications about your order status"
        toggleId="orderNotifications"
        :toggleState="userNotifications.orderNotifications"
        @switch-change="updateNotificationPreference"
      />
    </div>
  </div>
</template>

<script>
import NotificationUnit from './unit/notificationUnit.vue';

export default {
  name: 'NotificationSettings',
  components: {
    NotificationUnit,
  },
  data() {
    return {
      userNotifications: {
        marketingEmails: false,
        orderNotifications: false,
      }
    };
  },
  async mounted() {
    await this.fetchNotificationSettings();
  },
  methods: {
    async fetchNotificationSettings() {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3001/ntt/user/notifications', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        this.userNotifications = data; 
      } catch (error) {
        console.error('Ошибка при получении настроек уведомлений:', error);
      }
    },
    async updateNotificationPreference({ id, value }) {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3001/ntt/user/notifications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            toggleId: id,
            value: value,
          }),
        });

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        this.userNotifications[id] = value; 
      } catch (error) {
        console.error('Ошибка при обновлении уведомлений:', error);
      }
    }
  }
};
</script>

<style scoped>
  .settings {
    position: relative;
    width: 55%;
    overflow: hidden;
    padding: 2rem 2.5%;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
    gap: 1rem;
  }

  .settings, .text {
    display: flex;
    align-items: start; 
    justify-content: center;
    flex-direction: column;
  }

  .text {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    padding: 8px 0;
    gap: 8px;
  }

  .notification-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }


  @media all and (max-width:768px) {
    .settings {
      width: 80%;
    }
  }
</style>