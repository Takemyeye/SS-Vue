<template>
    <div class="wrapper">
      <div class="container">
        <img src='img/logo.png' alt="">
        <h3>Soul Swap</h3>
        <div class="exit" @click="exitMessenger">
          <font-awesome-icon icon="xmark" style="font-size: 24px;" />
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'WrapperMessange',
        methods: {
            exitMessenger() {
            this.$emit('close-messenger');
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 8px;
        animation: fadeInUp 0.6s ease forwards;
    }
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }
    .exit {
        padding: 4px 8px;
        cursor: pointer;
    }
    img {
        width: 32px;
        height: 32px;
    }
</style>