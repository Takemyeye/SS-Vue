<template>
  <div class="group">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
    <input 
      placeholder="Search" 
      type="search" 
      class="input" 
      @input="$emit('search', $event.target.value)" 
    />
  </div>
</template>

<script>
export default {
  name: 'SerchAdmin',
};
</script>

<style scoped>
.group {
 display: flex;
 line-height: 28px;
 align-items: center;
 position: relative;
 max-width: 190px;
}

.input {
 width: 100%;
 height: 40px;
 line-height: 28px;
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: #f3f3f4;
 color: #0d0c22;
 transition: .3s ease;
}

.input::placeholder {
 color: #9e9ea7;
}

.input:focus, input:hover {
 outline: none;
 border-color: rgba(114, 114, 114, 0.4);
 background-color: #fff;
 box-shadow: 0 0 0 4px rgba(76, 202, 234, 0.1);
}

.icon {
  position: absolute;
  left: 1rem;
  color: #9e9ea7;
  font-size: 1rem;
}
</style>