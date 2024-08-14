<template>
  <button>
    <h3>{{ buttonText }}</h3>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    buttonText: {
      type: String,
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid black;
  border-radius: 8px;
  background-color: black;
  padding: 4px 8px;
  cursor: pointer;
  transition: 0.5s ease;
}

button h3 {
  color: white;
  font-weight: lighter;
}

button:hover {
  background-color: rgb(43, 43, 43);
  border-color:  transparent;
}
</style>
