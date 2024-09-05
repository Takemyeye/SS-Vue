<template>
  <div :class="styleBadge">
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: 'UiBadge',
  props: {
    styleBadge: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: 'Макс Лох'
    }
  }
}
</script>

<style scoped>
  .badge1, .badge2, .badge3 {
    padding: 4px 6px;
    border-radius: 12px;
  }
  .badge1{
    background-color: hsl(214, 59%, 15%);
  }
  .badge1 h5 {
    color: hsl(210, 100%, 66%);
    font-size: medium;
  }
  .badge2{
    background-color: hsl(281, 38%, 16%);
  }
  .badge2 h5 {
    color: hsl(275, 80%, 71%);
    font-size: medium;
  }
  .badge3{
    background-color: hsl(135,70%,16%);
  }
  .badge3 h5 {
    color: hsl(174, 90%, 41%);
    font-size: medium;
  }
</style>