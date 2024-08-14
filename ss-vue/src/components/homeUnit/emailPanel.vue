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
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  animation: opacity 2s ease-in-out forwards;
}

</style>
