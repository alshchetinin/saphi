<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/blog").find()
);
</script>

<template>
  <BlogCard
    v-for="article in articles"
    :key="article._path"
    :article="article"
  />
</template>
