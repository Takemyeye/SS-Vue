<template>
    <div class="container">
      <div class="customers">
        <img :src="src" alt="Avatar">
        <h5 class="truncate">{{ name }}</h5>
        <h5 class="truncate">{{ data }}</h5>
        <h5 v-if="nick" class="truncate">{{ nick }}</h5>
        <h5 class="truncate">{{ status }}</h5>
        <h5 class="truncate">{{ provider }}</h5>
        <h5 v-if="trash">
          <slot></slot>
        </h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomersUnit',
    props: {
      src: {
        type: String,
        required: false,
        default: null,
      },
      name: {
        type: String,
        default: '',
      },
      status: {
        type: String,
        default: null,
      },
      data: {
        type: String,
        required: false,
        default: '',
      },
      nick: {
        type: String,
        required: false,
        default: null,
      },
      provider: {
        type: String,
        required: false,
        default: null,
      },
      trash: {
        type: Boolean,
        default: false,
      },
    },
  };
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
  
  .customers {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    align-items: start;
  }
  
  img {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.164);
    border-radius: 50%;
  }
  
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
  }
  
  h5 {
    margin: 0;
    padding: 0 0.5rem;
  }
  </style>
  