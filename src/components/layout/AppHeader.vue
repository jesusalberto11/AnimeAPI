<template>
  <header class="header">
    <div class="logo-container">
      <button class="menu-button">
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
      <a href="#" class="logo"><span class="logo-name">MYANIMES</span></a>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Buscar anime..." />
      <button class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup></script>

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

.search-bar {
  grid-area: search;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-bar input {
  min-width: 40%;
  padding: 0 15px;
  height: 35px;
  line-height: 35px;
  border: 3px solid #ccc;
}

.search-button {
  min-width: 5%;

  height: 35px;
  border: 3px solid #ccc;
  cursor: pointer;
}
</style>
