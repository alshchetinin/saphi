<script setup>
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects").sort({ date: -1 }).find()
);
useHead({
  title: "Проекты — Шайдуллина Сафия",
});
</script>

<template>
  <div class="grid gap-10">
    <ProjectCard
      v-for="project in projects"
      :key="project._path"
      :project="project"
    />
  </div>
</template>
