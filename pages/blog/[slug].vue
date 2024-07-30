<script setup>
const route = useRoute();
const slug = route.params.slug;

const allPosts = await queryContent("/blog").find();

const currentIndex = allPosts.findIndex(
  (post) => post._path === `/blog/${slug}`
);

const nextPost = allPosts[currentIndex + 1] || allPosts[0];

const { data } = await useAsyncData(slug, () =>
  queryContent(`/blog/${slug}`).findOne()
);

useHead({
  title: `${data.value.title} — Шидуллина Сафия`,
});
</script>

<template>
  <PageRender :data="data" />
  <div class="max-w-2xl mx-auto py-4 border-t mt-10">
    <div class="flex justify-end">
      <AppLink
        v-if="nextPost"
        :link="`${nextPost._path}`"
        :title="nextPost.title"
      >
        Cледующая
      </AppLink>
    </div>
  </div>
</template>
