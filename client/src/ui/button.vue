<template>
  <button>
    <h3 v-if="showText">{{ buttonText }}</h3>
    <h3 v-if="showIcon">
      <font-awesome-icon icon="cart-plus" />
    </h3>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'UiButton',
  components: {
    FontAwesomeIcon
  },
  props: {
    buttonText: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid black;
  border-radius: 8px;
  background-color: black;
  padding: 6px 10px;
  cursor: pointer;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}

button h3 {

  color: white;
  font-weight: lighter;
}

button:hover {
  background-color: rgb(43, 43, 43);
  border-color: transparent;
}
</style>
