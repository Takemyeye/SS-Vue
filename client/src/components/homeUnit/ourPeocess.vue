<template>
    <div class="our-process">
        <h1>Our Process</h1>
        <div class="process-unit">
            <ProcessUnit 
                :step="1"
                title="Browse" 
                description="Explore our vast collection of anime and manga inspired artwork."/>
            <ProcessUnit 
                :step="2"
                title="Select" 
                description="Choose your favorite pieces and customize options if available."/>
            <ProcessUnit 
                :step="3"
                title="Enjoy" 
                description="Receive your high-quality prints and display your fandom proudly."/>
        </div>
    </div>
</template>

<script>
    import ProcessUnit from './process/processUnit.vue';

    export default {
        name: 'OurProcess',
        components: {
            ProcessUnit
        }
    }
</script>

<style scoped>
    .our-process {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(197, 191, 180, 0.445);
        padding: 2.5rem 0;
        gap: 1rem
    }
    .process-unit {
        width: 80%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 1rem;
    }

    @media all and ( max-width: 1260px) {
        .process-unit {
            grid-template-columns: repeat(2, 1fr);
        }
    } 
    @media all and ( max-width: 786px ) {
        .process-unit {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
        }
    } 
</style>