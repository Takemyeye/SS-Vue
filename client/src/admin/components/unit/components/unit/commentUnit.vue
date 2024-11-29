<template>
    <div class="container">
        <div class="data">
            <img :src="src" alt="Avatar">
            <h5>{{ id }}</h5>
            <h5>{{ name }}</h5>
            <h5>{{ date }}</h5>
            <div class="container-data">
                <h5 style="font-size: 12px;">{{ data }}</h5>
            </div>
            <h5>{{ status }}</h5>
            <h5 v-if="trash">
                <slot></slot>
            </h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommentUnit',
        props: {
            src: {
                type: String,
                required: false,
                default: null,
            },
            id: {
                type: String,
                required: false,
                default: null,
            },
            name: {
                type: String,
                required: false,
                default: null,
            }, 
            date: {
                type: String,
                required: false,
                default: null,
            }, 
            data: {
                type: String,
                required: false,
                default: null,
            },
            status: {
                type: String,
                required: false,
                default: null,
            },
            trash: {
                type: Boolean,
                default: false,
            },
        }
    }
</script>

<style scoped>
  .container {
    width: 95%;
    padding: 1rem 2.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.150);
  }

  .data {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    align-items: center;
  }

  img {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 50%;
  }
</style>