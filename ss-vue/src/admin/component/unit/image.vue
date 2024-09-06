<template>
  <div class="orderImg">
    <font-awesome-icon icon="image" />
    <div v-for="item in cartItems" :key="item.id" class="imageItem">
      <img :src="`/art/${item.image}`" :alt="item.title" class="itemImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderImage',
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.orderImg {
  height: 90%;
  width: 150px;
  overflow-y: auto;
  scrollbar-width: 16px;
  scrollbar-color: rgb(34, 34, 34) black;
}
.imageItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.itemImage {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
}
</style>