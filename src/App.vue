<template>
  <div class="app-container">
    <AppHeader @expand-sidebar="toggleSidebar" />
    <AppSidebar :class="{ sidebarActive: isSidebarExpanded }" />
    <main class="main-content" :class="{ active: isSidebarExpanded }">
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
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "header header"
    "content content";

  transition: all 0.3s ease;
}

.main-content.active {
  padding-left: 300px;
}

.main-content {
  grid-area: content;
  background-color: #181818;
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

@media screen and (max-width: 768px) {
  .main-content.active {
    padding-left: 0px;
  }
}
</style>
