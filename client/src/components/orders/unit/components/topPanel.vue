<template>
  <div class="top-panel">
    <div class="container-status">
      <div class="status">
        <div class="dropdown-status" @click="toggleDropdown">
          <h5>{{selectedStatus}}</h5>
        </div>
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <div 
            v-for="option in options" 
            :key="option" 
            @click.stop="selectOption(option)" 
            class="dropdown-item"
          >
          <h5>{{ option }}</h5>
          </div>
        </div>
      </div>
    </div>
    <BlockUnit :orders="orders"/>
  </div>
</template>

<script>
import BlockUnit from './unit/blockUnit.vue';

export default {
  name: 'TopPanel',
  components: {
    BlockUnit,
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: ['All', 'Processing', 'Completed', 'Delete'],
      selectedStatus: 'All',
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedStatus = option;
      this.isDropdownOpen = false;
      this.updateFilters();
    },
    updateFilters() {
      this.$emit('updateFilters', { status: this.selectedStatus });
    },
  },
};
</script>

<style scoped>

.top-panel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.container-status {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 1rem;
}

.status {
  position: relative;
  width: 150px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.dropdown-status {
  width: 100%;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.150);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease;
} 

.dropdown-status:hover {
  border-color:rgba(39, 74, 150, 0.300);
}

.dropdown-menu {
  position: absolute;
  top: 0;
  left: 115%;
  width: 100%;
  padding: 6px 4px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.150);
  border-radius: 8px;
  background-color: white;
}

.dropdown-item {
  width: calc(100% - 8px);
  cursor: pointer;
  padding: 4px;
  transition: all 0.5s ease;
}

.dropdown-item:hover {
  background-color: rgba(0, 0, 0, 0.150);
}

</style>
