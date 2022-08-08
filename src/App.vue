<template>
  <div class="app-container" :class="{ active: isSidebarExpanded }">
    <AppHeader @expand-sidebar="toggleSidebar" />
    <AppSidebar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppSidebar from "./components/layout/AppSidebar.vue";

const isSidebarExpanded = ref(false);

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

*::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

*::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}

body {
  color: #fff;
  font-family: "Roboto Mono";
  overflow-y: hidden;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
