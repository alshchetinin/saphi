<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data } = await useAsyncData(slug, () =>
  queryContent(`/projects/${slug}`).findOne()
);
</script>

<template>
  <PageRender :data="data" />
</template>
