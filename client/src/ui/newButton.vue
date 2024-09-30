<template>
  <button>
    <h3>{{ text }}</h3>
  </button>
</template>

<script>
  export default {
    name: 'UiNewButton',
    props: {
      text: {
        type: String,
        Required: true,
        default: "btn"
      }
    }
  }
</script>

<style scoped>
button {
font-family: var(--text-font-family);
font-optical-sizing: var(--text-font-optical-sizing);
font-weight: var(--text-font-weight);
font-style: var(--text-font-style);
 padding: 8px 14px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
 cursor: pointer;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 0.5s
}

button:hover h3 {
  color: #e8e8e8;
}

button:hover::before {
 width: 100%;
}

h3 {
  font-weight: lighter;
}
</style>
