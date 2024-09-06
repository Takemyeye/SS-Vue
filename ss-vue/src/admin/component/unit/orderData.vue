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
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Date(this.createdAt).toLocaleDateString(undefined, options);
    },
  },
};
</script>
