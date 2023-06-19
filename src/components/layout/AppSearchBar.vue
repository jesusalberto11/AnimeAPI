<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search anime..."
      v-model="searchQuery"
      @keydown="onKeyDown"
    />
    <button class="search-button" @click="handleOnSearch">
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
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");

const handleOnSearch = () => {
  if (
    searchQuery.value === null ||
    searchQuery.value === undefined ||
    searchQuery.value === ""
  )
    return;

  router.push({ path: "/results", query: { search: searchQuery.value } });
};

const onKeyDown = (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    event.preventDefault();
    handleOnSearch();
  }
};
</script>

<style scoped>
.search-bar {
  width: 100%;

  padding-right: 15px;

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

@media screen and (max-width: 768px) {
  .search-bar {
    max-width: 80%;
    padding-right: 0px;
  }

  .search-button {
    width: 40%;
  }
}

@media screen and (max-width: 667px) {
  .search-bar {
    max-width: 45%;
  }

  .search-button {
    width: 40%;
  }
}
</style>
