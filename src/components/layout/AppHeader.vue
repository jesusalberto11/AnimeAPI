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
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
  grid-template-areas: "logo search";
  background-color: #2f2f2f;
}

.logo-container {
  grid-area: logo;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.logo-name {
  font-family: "Roboto Mono";
  font-weight: bold;
  font-size: 20px;
  color: #fff;
}

.menu-button {
  min-width: 25%;
  height: 35px;
  border: 3px solid #ccc;
  cursor: pointer;
}
</style>
