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
      />
      <NotificationUnit
        title="Order notifications"
        subtitle="Receive notifications about your order status"
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
    }
  }
</script>

<style scoped>
  .settings {
    position: relative;
    width: 55%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding: 2rem 2.5%;
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
    gap: 1rem;
  }

  .text {
    width: 100%;
    display: flex;
    align-items: start; 
    justify-content: center;
    flex-direction: column;
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

</style>