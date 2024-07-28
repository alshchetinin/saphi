<script setup>
defineProps({
  article: {
    type: Object,
  },
});
</script>

<template>
  <article class="lg:px-32">
    <div class="lg:flex justify-between items-center gap-4 mb-4">
      <h2 class="px-2 mb-2">{{ article.title }}</h2>
      <AppLink :to="article._path">Читать</AppLink>
    </div>
    <NuxtImg
      v-if="article.picture"
      :src="article.picture"
      class="w-full h-auto:"
    />
  </article>
</template>
