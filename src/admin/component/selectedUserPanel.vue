<template>
  <div class="selected-user-panel">
    <AdminTopPanel :user="user"/>
    <AdminMessageBlock :user="user"/>
  </div>
</template>

<script>
import AdminMessageBlock from './selectedUserUnit/userMessange.vue';
import AdminTopPanel from './selectedUserUnit/userAdminPanel.vue'

export default {
  name: 'SelectedUserPanel',
  components: {
    AdminMessageBlock,
    AdminTopPanel,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.selected-user-panel {
  position: absolute;
  bottom: 2%;
  width: 70%;
  height: 75vh;
  padding: 8px 1%;
  border: 1px solid black;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: initial;
  gap: 1rem;
}
</style>
