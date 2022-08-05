<template>
  <div class="app-container">
    <AppHeader />
    <nav class="sidebar">Sidebar</nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppHeader from "./components/layout/AppHeader.vue";
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  font-family: "Roboto Mono";
}

.app-container {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 90px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "header header"
    "sidebar content";
  transition: all 0.3s ease;
}

.sidebar {
  grid-area: sidebar;
  background-color: #2f2f2f;
}

.main-content {
  grid-area: content;
  background-color: #181818;
}
</style>
