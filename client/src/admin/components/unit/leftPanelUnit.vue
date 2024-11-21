<template>
  <routerLink :to="url">
    <div class="wrapper">
      <font-awesome-icon :icon="icon" />
      <h5>{{ text }}</h5>
    </div>
  </routerLink>
</template>

<script>
  export default {
    name: 'LeftPanelUnit',
    props: {
      url: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  a {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    transition: 0.3s ease-in-out;
    gap: 1rem;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.151);
  }

  .wrapper { 
    color: rgb(53, 53, 59);
    width: 80%;
    display: flex;
    align-items: start;
    flex-direction: row;
    cursor: pointer;
    padding: 12px 0;
    gap: 1rem;
  }
  
</style>