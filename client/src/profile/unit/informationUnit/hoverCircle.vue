<template>
     <div class="circle">
        <div class="info">
            <h2>!</h2>
        </div>
        <div class="text">
            <h2 style="color: white;">{{ title }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HoverCircle',
        props: {
            title: {
                type: String,
                default: 'я лох'
            }
        }
    }
</script>

<style scoped>
    .circle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        right: -2rem;
        bottom: -2rem;
        width: 100px;
        height: 100px;
        background-color: black;
        color: white;
        border-radius: 50%;
        opacity: 0;
        animation: fadeInUp 0.3s ease-in-out forwards;
        animation-delay: 0.5s;
        transition: width 0.5s ease, height 0.5s ease, padding 0.5s  ease, border-radius 0.3s ease-out;
        z-index: 2;
    }

    .circle:hover {
        width: 95%;
        height: 95%;
        padding: 2.5%;
        border-radius: 8px;
        right: 0;
        bottom: 0;
    }
  
    .circle:hover > .info {
        opacity: 0;
    }

    .text {
        display: none;
    }

    .circle:hover > .text {
        display: flex;
    }

  .info h2 {
    color: white;
    padding: 8px 1rem;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.356);
    transform: translateX(-10px) translateY(-10px);
    font-weight: 600;
  }
</style>