<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  * {
  padding: 0;
  margin: 0;
}

html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  background-color: white;
}

::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-track {
  background: black;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(20, 20, 20);
  box-shadow: 0 -100vh 0 100vh var(--color-black), 0 0 15px 5px var(--color-000);
}

h1 {
  font-size: clamp(20px, 2vw, 40px);
  color: var(--color-001);
  font-weight: 500;
}

h2 {
  color: var(--color-001);
  font-size: clamp(18px, 2vw, 22px);
}

h3,h5 {
  color: var(--color-000);
  font-weight: 600;
}

h4 {
  color: var(--color-000);
  font-weight: 500;
  font-size: clamp(16px, 2vw, 18px);
}

h3 {
  position: relative;
  font-size: clamp(16px, 2vw, 18px);
}
a {
  color: inherit;
  text-decoration: none;
  width: auto;
  height: auto;
}

:root {
  --text-font-family: "Comfortaa", sans-serif;
  --text-font-weight: weight;
  --text-font-style: normal;
  --color-000: rgb(75, 75, 75);
  --color-001: rgb(22, 22, 22);
  --color-002: rgb(206, 206, 206);
  --color-black: black;
}

</style>