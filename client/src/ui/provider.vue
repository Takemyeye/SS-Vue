<template>
  <div class="providers">
    <template v-for="provider in providers" :key="provider.name">
      <h5 v-if="provider.active">{{ provider.name }}</h5>
      <font-awesome-icon v-if="provider.active" :icon="['fab', provider.name]" />
    </template>
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
  computed: {
    providers() {
      return [
        { name: 'google', active: this.google },
        { name: 'discord', active: this.discord },
        { name: 'github', active: this.github },
      ];
    },
  },
};
</script>

<style scoped>
.providers {
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  z-index: 1;
  right: -2px;
  bottom: -2px;
  font-size: 12px;
  color: rgb(24, 24, 24);
  background-color: white;
  border-radius: 3rem;
  border: 1px solid rgba(36, 36, 36, 0.26);
  transition: 0.5s ease;
  overflow: hidden
}

.providers > h5 {
  display: none;
}

.providers:hover > h5 {
  display: flex;
}

.providers:hover {
  justify-content: space-between;
  flex-direction: row;
  width: 60px;
  padding: 2px 4px;
}
</style>
