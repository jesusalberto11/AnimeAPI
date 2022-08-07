<template>
  <aside class="sidebar">
    <hr />
    <a class="nav-button active">Animes</a>
    <a>Top animes</a>
    <a>Personajes</a>
    <a>Manga</a>
    <a>Reviews</a>
    <hr />
    <a>Acerca de</a>
    <a>Configuraciones</a>
    <a>V 0.1</a>
  </aside>
</template>

<script setup></script>

<style>
.sidebar {
  grid-area: sidebar;
  background-color: #2f2f2f;
  overflow: hidden;
}

.sidebar a {
  display: block;
  padding: 15px 35px;
}

.sidebar a:hover {
  background-color: #e5e5e5;
  color: #2f2f2f;
  cursor: pointer;
}

.sidebar a.active {
  background-color: #e5e5e5;
  color: #2f2f2f;
  font-weight: bold;
}

.sidebar hr {
  margin: 20px 0;
  border: 1px solid #dfdfdf;
}
</style>
