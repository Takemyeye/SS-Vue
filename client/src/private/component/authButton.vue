<template>
  <a :href="authUrl" class="auth-button">
    <div :class="['auth', buttonClass]">
      <font-awesome-icon :icon="icon" />
      <h5>{{ text }}</h5>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    authUrl: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonClass: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.auth {
  min-width: 300px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.192);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-in-out forwards;
}

.auth:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.auth-1 {
  animation-delay: 0s;
}

.auth-2 {
  animation-delay: 0.3s;
}

.auth-3 {
  animation-delay: 0.6s;
}

h5 {
  color: black;
}
</style>
