<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/blog").sort({ date: -1 }).find()
);
useHead({
  title: "Статьи — Шайдуллина Сафия",
});
</script>

<template>
  <div class="grid gap-10">
    <BlogCard
      v-for="article in articles"
      :key="article._path"
      :article="article"
    />
  </div>
</template>
