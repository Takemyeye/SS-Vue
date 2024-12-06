<template>
  <div class="providers">
    <font-awesome-icon v-if="google" :icon="['fab', 'google']" />
    <font-awesome-icon v-if="discord" :icon="['fab', 'discord']" />
    <font-awesome-icon v-if="github" :icon="['fab', 'github']" />
  </div>
</template>

<script>
export default {
  name: 'ProvidersUi',
  props: {
    google: {
      type: Boolean,
      required: true,
    },
    discord: {
      type: Boolean,
      required: true,
    },
    github: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>

  .providers {
    position: absolute;
    text-align: center;
    padding: 0 2px;
    z-index: 1;
    right: -2px;
    bottom: -2px;
    font-size: 12px;
    color: rgb(24, 24, 24);
    background-color: white;
    border-radius: 3rem;
    border: 1px solid rgba(36, 36, 36, 0.26);
  }
</style>