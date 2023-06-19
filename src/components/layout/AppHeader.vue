<template>
  <header class="header">
    <div class="logo-container">
      <button @click="$emit('expandSidebar')" class="menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <router-link to="/">
        <a class="logo"><span class="logo-name">MYANIMES</span></a>
      </router-link>
    </div>

    <AppSearchBar />
  </header>
</template>

<script setup>
import AppSearchBar from "./AppSearchBar.vue";
</script>

<style>
.header {
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  background-color: #2f2f2f;
}

.logo-container {
  grid-area: logo;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding-left: 65px;
}

.logo-name {
  font-family: "Roboto Mono";
  font-weight: bold;
  font-size: 20px;
  color: #fff;
}

.menu-button {
  height: 35px;
  width: 35px;
  border: 3px solid #ccc;
  cursor: pointer;

  position: fixed;
  top: 12px;
  left: 15px;
  z-index: 999999;
}

@media screen and (max-width: 768px) {
  .header {
    align-items: center;
    justify-content: space-evenly;
    gap: 0px;
  }

  .logo-container {
    padding-left: 40px;
  }
}
</style>
