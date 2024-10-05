<template>
  <div class="block">
    <CommitLeft/>
    <CommitRight/>
  </div>
</template>

<script>
import CommitRight from './commitRight.vue';
import CommitLeft from './comminleft.vue';

  export default {
    name: 'CommitPanel',
    components: {
      CommitRight,
      CommitLeft
    }
  }
</script>

<style scoped>
  .block {
    width: calc(100% - 2rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem ;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.151);
    border-radius: 8px;
  }

  @media all and ( max-width: 768px ) {
    .block {
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }
</style>