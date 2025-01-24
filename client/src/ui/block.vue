<template>
  <div class="block">
    <div class="text">
      <h5>{{ title }}</h5>
      <h5 v-if="icon">
        <font-awesome-icon :icon="icon" />
      </h5>
    </div>
    <h3>{{ number }}</h3>
  </div>
</template>

<script>
export default {
  name: 'UiBlock',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    number: {
      type: [String, Number],
      required: true,
    },
    icon: {
      type: [Array, String],
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
  .block {
    width: calc(100% - 24px - 2px);
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.150);
    background-color: white;
    border-radius: 8px;
  }

</style>