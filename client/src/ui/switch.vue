<template>
  <div class="toggle-switch">
    <input 
      class="toggle-input" 
      :id="uniqueId" 
      type="checkbox" 
      :checked="toggle" 
      @change="$emit('change', $event)" 
    />
    <label class="toggle-label" :for="uniqueId"></label>
  </div>
</template>

<script>
export default {
  name: 'UiSwitch',
  props: {
    toggle: {
      type: Boolean,
      required: true
    },
    uniqueId: { 
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-input {
  display: none;
}

.toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 30px;
  border-radius: 17px;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.toggle-label:before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease;
}

.toggle-input:checked + .toggle-label {
  background-color: hsl(210, 100%, 66%);
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(20px);
}
</style>
