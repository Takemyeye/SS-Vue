<!-- src/components/NickError.vue -->
<template>
  <div v-if="visible" class="nick-error">
    <svg height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
        <g id="Error_1_">
          <g id="Error">
            <circle cx="16" cy="16" id="BG" r="16" style="fill:#D72828;" />
            <path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style="fill:#E6E6E6;" />
          </g>
        </g>
      </g>
    </svg>
    <h5>{{ message }}</h5>
  </div>
</template>

<script>
export default {
  name: 'NickError',
  props: {
    message: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
  .nick-error {
    position: fixed;
    right: 1%;
    bottom: 1%;
    width: 250px;
    height: 60px;
    background-color: white;
    box-shadow: 10px 35px 30px rgba(0, 0, 0, 0.301);
    border-radius: 8px;
    padding: 8px 1rem;
    border: 1px solid rgba(0, 0, 0, 0.199);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    animation: fadeInUp 0.3s ease forwards;
    z-index: 2;
  }
</style>
