<template>
  <h1>Hello world serchresults page! {{ route.params.query }}</h1>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
