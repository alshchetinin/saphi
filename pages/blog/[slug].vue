<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data } = await useAsyncData(slug, () =>
  queryContent(`/blog/${slug}`).findOne()
);
</script>

<template>
  <PageRender :data="data" />
</template>
