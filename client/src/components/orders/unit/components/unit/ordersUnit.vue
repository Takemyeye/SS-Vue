<template>
  <div class="container">
    <div class="order">
      <h5>{{ id }}</h5>
      <h5>{{ date }}</h5>
      <h5>{{ total }}</h5>
      <h5>{{ items }}</h5>
      <h5>{{ payment }}</h5>
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
  name: 'OrdersUnit',
  props: {
    id: {
      type: String,
      required: false,
      default: null,
    },
    total: {
      type: Number,
      required: true,
      default: null,
    },
    items: {
      type: String,
      default: '',
    },
    payment: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: null,
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
    }
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 4px 2px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.150);
  }
</style>