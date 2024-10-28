<template>
  <div class="createdAt">
    <font-awesome-icon icon="clock" />
    <h4>{{ formattedDate }}</h4>
  </div>
</template>

<script>
export default {
  name: 'OrderDate',
  props: {
    createdAt: {
      type: String,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.createdAt);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    },
  },
};
</script>
