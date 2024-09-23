<template>
  <div class="imageItem">
    <img :src="`/art/${item.image}`" :alt="item.title" class="itemImage" />
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
