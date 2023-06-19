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
  background-color: var(--BACKGROUND-COLOR);
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
