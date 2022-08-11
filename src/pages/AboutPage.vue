<template>
  <div class="about-container">
    <div class="about-title">
      <hr />
      <p>This page was created by:</p>
      <br />
      <p class="about-creator">Jesus A. Morales Rico</p>
      <br />
      <p>Colombia</p>
      <hr />
    </div>
    <div class="about-details">
      <p>Created using the following technologies:</p>
      <div class="tech-names">
        <a href="https://es.vuejs.org/" target="_SEJ" rel="”noreferrer”">
          VueJS V.3
        </a>
        <a href="https://router.vuejs.org/" target="_SEJ" rel="”noreferrer”">
          Vue Router V.4
        </a>
        <a href="https://vuestic.dev/" target="_SEJ" rel="”noreferrer”">
          Vuestic UI
        </a>
        <a href="https://docs.api.jikan.moe/" target="_SEJ" rel="”noreferrer”">
          Jikan API
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-title {
  padding: 25px 25px;
  text-align: center;
  font-size: 22px;
}

.about-creator {
  font-size: 36px;
}

.about-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 35px;
  padding-right: 35px;

  gap: 25px;
}

.tech-names {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 15px;
}

.tech-names a {
  color: cornsilk;
}

@media screen and (max-width: 768px) {
  .tech-names {
    flex-direction: column;
  }
}
</style>
