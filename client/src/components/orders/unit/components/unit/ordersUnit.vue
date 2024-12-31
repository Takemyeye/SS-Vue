<template>
  <div :class="style">
    <div class="order">
      <h5>{{ id }}</h5>
      <h5>{{ date }}</h5>
      <h5>{{ total }}</h5>
      <h5>{{ items }}</h5>
      <h5>{{ type }}</h5>
      <h5>{{ payment }}</h5>
      <h5>{{ status }}</h5>
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
    style: {
      type: String,
      default: null,
    },
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
    status: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: null,
    },
    payment: {
      type: String,
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
    width: calc(100% - 8px);
    min-width: 800px;
    padding: 6px 4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.150);
    border-radius: 4px;
  }
  h5 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .container1 {
    background-color: hsla(34, 84%, 44%, 0.178);
  }
  
  .container2 {
    background-color: hsla(96, 84%, 44%, 0.178);
  }
</style>