<template>
  <div class="pagination-container">
    <div class="pagination-button" @click="goToFirstPage">First page</div>
    <div class="pagination-button" @click="goToPreviousPage">
      {{ "<-" }} Previous page
    </div>
    <div class="pagination-button" @click="goToNextPage">
      Next page {{ "->" }}
    </div>
    <div class="pagination-button">Last page</div>
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
  console.log(currentValue.query.page);
  console.log(route.name);
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

  height: 150px;
  width: 100%;
  background-color: brown;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  gap: 15px;
}

.pagination-button {
  background-color: rgb(83, 21, 21);
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
  cursor: pointer;
  box-shadow: 0 0 5px yellow, 0 0 5px yellowgreen, 0 0 10px yellow;
  background-color: rgb(65, 1, 184);
}
</style>
