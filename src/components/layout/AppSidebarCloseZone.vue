<template>
  <div class="sidebar-close-zone" @click="$emit('expandSidebar')"></div>
</template>

<script setup></script>

<style scoped>
.sidebar-close-zone {
  pointer-events: none;

  height: 100vh;
  width: 100vw;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99997;

  opacity: 0.5;

  transition: all 0.3s;
}

.active-sidebar-close-zone {
  pointer-events: all;
  cursor: pointer;

  left: 300px;

  background-color: var(--APP-SIDEBAR-ACTIVE-CLOSE-ZONE-BACKGROUND-COLOR);
}
</style>
