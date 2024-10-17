<template>
  <div class="catalog-order">
    <div class="catalog">
      <label for="sortTime">Sort by date</label>
      <div class="custom-select" @click="toggleTimeDropdown">
        <div class="select-box">
          <h5>{{ selectedTimeLabel }}</h5>
        </div>
        <div v-if="isTimeDropdownOpen" class="options">
          <div class="option" @click="selectTimeOption('newest')">
            Data: New to Old
            <font-awesome-icon icon="check" v-if="sortByTime === 'newest'" />
          </div>
          <div class="option" @click="selectTimeOption('oldest')">
            Data: Old to New
            <font-awesome-icon icon="check" v-if="sortByTime === 'oldest'" />
          </div>
        </div>
      </div>
    </div>

    <div class="catalog">
      <label for="sortStatus">Sort by status of order</label>
      <div class="custom-select" @click="toggleStatusDropdown">
        <div class="select-box">
          <h5>{{ selectedStatusLabel }}</h5>
        </div>
        <div v-if="isStatusDropdownOpen" class="options">
          <div class="option" @click="selectStatusOption('all')">
            All
            <font-awesome-icon icon="check" v-if="sortByStatus === 'all'" />
          </div>
          <div class="option" @click="selectStatusOption('checked')">
            Checked
            <font-awesome-icon icon="check" v-if="sortByStatus === 'checked'" />
          </div>
          <div class="option" @click="selectStatusOption('processing')">
            Processing
            <font-awesome-icon icon="check" v-if="sortByStatus === 'processing'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogOrders',
  data() {
    return {
      isTimeDropdownOpen: false,
      isStatusDropdownOpen: false,
      sortByTime: 'newest',
      sortByStatus: 'all',
      selectedTimeLabel: 'Data: New to Old',
      selectedStatusLabel: 'All',
    };
  },
  methods: {
    toggleTimeDropdown() {
      this.isTimeDropdownOpen = !this.isTimeDropdownOpen;
      this.isStatusDropdownOpen = false;
    },
    toggleStatusDropdown() {
      this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
      this.isTimeDropdownOpen = false; 
    },
    selectTimeOption(option) {
      this.sortByTime = option;
      this.selectedTimeLabel = option === 'newest' ? 'Data: New to Old' : 'Data: Old to New';
      this.isTimeDropdownOpen = false;
      this.sortOrders();
    },
    selectStatusOption(option) {
      this.sortByStatus = option;
      this.selectedStatusLabel = option === 'all' ? 'All' : option.charAt(0).toUpperCase() + option.slice(1);
      this.isStatusDropdownOpen = false;
      this.sortOrders();
    },
    sortOrders() {
      this.$emit('sort-orders', { sortByTime: this.sortByTime, sortByStatus: this.sortByStatus });
    },
  },
};
</script>

<style scoped>
.catalog-order {
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 2rem;
}

.catalog {
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.custom-select {
  position: relative;
}

.select-box {
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.356);
  border-radius: 4px;
  background-color: white;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.options {
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.356);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  gap: 4px;
}

.option {
  width: calc(100% - 0.5rem);
  padding: 0.35rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  font-size: clamp(12px, 2vw, 14px); 
  color: var(--color-001);
  display: flex; 
  justify-content: space-between; 
  align-items: center;
}

h5 {
  color: black;
  font-size: clamp(12px, 2vw, 14px); 
}

.option:hover {
  background-color: rgba(0, 0, 0, 0.171);
}

@media all and ( max-width: 768px ) {
  .catalog-order {
    flex-direction: column;
    align-items: start;
  }
}
</style>
