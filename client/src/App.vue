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

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}

h1, h2 {
  color: var(--color-001);
  font-weight: 500;
}

h3, h4, h5 {
  font-weight: 500;
  color: var(--color-000);
}

.text {
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
}

h1 { font-size: clamp(20px, 2vw, 40px); }
h2 { font-size: clamp(16px, 2vw, 22px); }
h3 { font-size: clamp(14px, 2vw, 18px); position: relative;}
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
