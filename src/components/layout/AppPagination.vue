<template>
  <div class="pagination-container">
    <button class="pagination-button" @click="goToFirstPage">First page</button>
    <button class="pagination-button" @click="goToPreviousPage">
      {{ "⮜" }} Previous page
    </button>
    <button class="pagination-button" @click="goToNextPage">
      Next page {{ "⮞" }}
    </button>
    <button class="pagination-button">Last page</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";
import { useRoute } from "vue-router";

import { useAnime } from "@/composable/useAnime";

const route = useRoute();

const { page, setPage } = useAnime();
const currentPage = ref(page.value);
const emit = defineEmits(["onPagination"]);

watch(route, (currentValue) => {
  if (route.name !== "animes") return;

  if (
    currentValue.query.page === null ||
    currentValue.query.page === undefined
  ) {
    goToFirstPage();
  }
});

const goToFirstPage = () => {
  setPage(1);
  currentPage.value = 1;
  emit("onPagination");
};

const goToNextPage = () => {
  currentPage.value += 1;
  setPage(currentPage.value);

  emit("onPagination");
};

const goToPreviousPage = () => {
  if (currentPage.value === 1) return;

  currentPage.value -= 1;
  setPage(currentPage.value);

  emit("onPagination");
};
</script>

<style scoped>
.pagination-container {
  grid-area: pagination;

  background-color: var(--APP-PAGINATION-BACKGROUND-COLOR);

  height: 150px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
}

.pagination-button {
  cursor: pointer;

  background-color: var(--APP-PAGINATION-BUTTON-BACKGROUND-COLOR);
  color: var(--APP-PAGINATION-TEXT-BACKGROUND-COLOR);

  height: 50px;
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: small;
  border-radius: 10px;
}

.pagination-button:hover {
  background-color: var(--APP-PAGINATION-BUTTON-HOVER-BACKGROUND-COLOR);
  box-shadow: 0 0 5px yellow, 0 0 5px yellowgreen, 0 0 10px yellow;
}

@media screen and (max-width: 768px) {
  .pagination-button {
    height: 40px;
  }
}
</style>
