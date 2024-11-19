<template>
  <div class="container">
    <div class="order">
      <h5>{{ order }}</h5>
      <h5>{{ customer }}</h5>
      <h5>{{ total }}</h5>
      <h5>{{ date }}</h5>
      <h5>{{ status }}</h5>
      <h5 v-if="actions">{{ actions }}</h5>
      <h5 v-if="trash">
        <slot></slot>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrdersAdmin',
  props: {
    order: {
      type: String,
      default: '',
    },
    customer: {
      type: String,
      default: '',
    },
    total: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      required: false,
      default: '',
    },
    actions: {
      type: String,
      required: false,
      default: null,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
  .container {
    width: 95%;
    padding: 1rem 2.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.150);
  }

  .order {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

</style>