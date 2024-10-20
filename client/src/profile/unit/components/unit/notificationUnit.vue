<template>
  <div class="container">
    <div class="text">
      <h4>{{ title }}</h4>
      <h5>{{ subtitle }}</h5>
    </div>
    <UiSwitch 
      :toggle="toggleState" 
      :uniqueId="toggleId" 
      @change="handleSwitchChange" 
    />
  </div>
</template>

<script>
import UiSwitch from '@/ui/switch.vue';

export default {
  name: 'NotificationUnit',
  components: {
    UiSwitch,
  },
  props: {
    toggleId: { 
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    },
    toggleState: { 
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleSwitchChange(event) {
      const isToggled = event.target.checked;
      this.$emit('switch-change', { id: this.toggleId, value: isToggled });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

}

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
