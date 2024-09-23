<template>
     <div class="notFound">
        <div class="text">
            <div>
                <span class="delay delay1">4</span> 
                <span class="delay delay2">0</span>
                <span class="delay delay3">4</span> 
                - Soul Not Found
            </div>
            <h5>Oops! It seems the soul you're looking for has slipped into another dimension.</h5>
        </div>
        <router-link :to="{ name: 'Home' }" class="delaybtn delay3">
            <UiButton
                showHouse="true"
                buttonText="Return to Soul Swap Home"
                />
       </router-link>
    </div>
</template>

<script>
import UiButton from '@/ui/button.vue'

export default {
    name: 'ErrorBlock',
    components: {
        UiButton,
    },
 };
</script>

<style scoped>
    .notFound {
        width: 100%;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: var(--text-font-family);
        font-optical-sizing: var(--text-font-optical-sizing);
        font-weight: var(--text-font-weight);
        font-style: var(--text-font-style);
        gap: 1rem;
    }
    .text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
        font-size: clamp(20px, 2vw, 40px);
    }
    .delay {
        animation: fadeInUp 2s ease-in-out forwards;
    }
    .delaybtn {
        animation: fadeInUp 0.5s ease-in-out forwards;
    }
    .delay1 {
    animation-delay: 0s;
    }

    .delay2 {
        animation-delay: 0.1s;
    }

    .delay3 {
        animation-delay: 0.2s;
    }
</style>
