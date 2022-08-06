<template>
  <h1>Hello world anime page!</h1>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  console.log("id es: ", route.params?.id);
});
</script>

<style scoped></style>
