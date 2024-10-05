<template>
  <div class="emailPanel">
    <LeftPanel/>
    <RightPanel/>
  </div>
</template>

<script>
import LeftPanel from './emailComponent/leftPanel.vue';
import RightPanel from './emailComponent/rightPanel.vue';

export default {
  name: 'EmailPanel',
  components: {
    RightPanel,
    LeftPanel
  },
};
</script>

<style scoped>
.emailPanel {
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  animation: opacity 2s ease-in-out forwards;
}

@media all and (max-width: 768px) {
  .emailPanel {
    flex-direction: column;
    gap: 4rem
  }
}
</style>
