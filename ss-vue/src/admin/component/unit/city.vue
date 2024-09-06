<template>
  <div class="country">
    <font-awesome-icon icon="city" />
    <h4>{{ country }}</h4>
  </div>
</template>

<script>
export default {
  name: 'OrderCity',
  props: {
    country: {
      type: String,
      required: true,
    },
  },
};
</script>
