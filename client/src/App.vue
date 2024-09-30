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

html, body {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  background-color: #fff;
}

::selection {
  background: transparent;
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

h1, h2 {
  color: var(--color-001);
  font-weight: 500;
}

h3, h4, h5 {
  font-weight: 500;
  color: var(--color-000);
}

h1 { font-size: clamp(18px, 2vw, 40px); }
h2 { font-size: clamp(16px, 2vw, 22px); }
h3 { font-size: clamp(12px, 2vw, 18px); position: relative;}
h4 { font-size: clamp(12px, 2vw, 16px); color: var(--color-000); }
h5 { font-size: clamp(10px, 2vw, 14px); color: var(--color-000); }

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --text-font-family: "Comfortaa", sans-serif;
  --color-000: rgb(75, 75, 75);
  --color-001: rgb(22, 22, 22);
  --color-002: rgb(206, 206, 206);
  --color-black: black;
}

@keyframes opacity {
  0%, 50% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes toBottom {
  0%, 80% { transform: translateY(-200px); opacity: 0; }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
