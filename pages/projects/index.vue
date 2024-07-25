<script setup>
const { data: projects } = await useAsyncData("projects", () =>
  queryContent("/projects").find()
);
</script>

<template>
  <ProjectCard
    v-for="project in projects"
    :key="project._path"
    :project="project"
  />
</template>
