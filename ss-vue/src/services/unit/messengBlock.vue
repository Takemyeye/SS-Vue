<template>
    <div class="messenger">
        <div class="container">

        </div>
        <div class="write">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessengerBlock'
    }
</script>

<style scoped>
    .messenger {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .write {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding: 4px 8px;
        }
    
    img {
        width: 32px;
        height: 32px;
    }
</style>