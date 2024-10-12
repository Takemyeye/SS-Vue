<template>
    <div class="process">
        <div class="circle"><h2>{{ step }}</h2></div>
        <h2 style="color: black;">{{ title }}</h2>
        <h5 style="text-align: center;">{{ description }}</h5>
    </div>
</template>

<script>
    export default {
        name: 'ProcessUnit',
        props: {
            step: {
                type: Number,
                default: 1
            },  
            title: {
                type: String,
                default: 'Nah uh'
            },
            description: {
                type: String,
                default: 'I`ll win'
            }
        }
    }
</script>

<style scoped>
    .process {
        width: 300px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        animation: apper linear;
        animation-timeline: view();
        animation-range: entry 0 cover 20%;
        gap: 1rem;
    }

    .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(214, 59%, 15%);
        height: 48px;
        width: 48px;
        border-radius: 30px;
    }
    h2 {
        font-weight: 700;
        color: white;
    }

    
    @keyframes apper {
        from {
            opacity: 0.1;
            scale: 0.5;
            transform: translateX(-100%);
        }
        20% {
            opacity: 0.1;
        }
    }

    @media all and ( max-width: 768px ) {
        .process {
            width: 265px;
        }
    }
</style>
