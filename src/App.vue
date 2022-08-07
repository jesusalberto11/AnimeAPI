<template>
  <div class="app-container" :class="{ active: isSidebarExpanded }">
    <AppHeader @expand-sidebar="toggleSidebar" />
    <AppSidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppSidebar from "./components/layout/AppSidebar.vue";

const isSidebarExpanded = ref(true);

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value;
};
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

.app-container.active {
  grid-template-columns: minmax(300px, 18%) auto;
}

.main-content {
  grid-area: content;
  background-color: #181818;
}
</style>
