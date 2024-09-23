<template>
  <div class="Price">
    <font-awesome-icon icon="money-bill" />
    <h4>{{ totalPrice }} € </h4>
  </div>
</template>

<script>
export default {
  name: 'OrderPrice',
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>
