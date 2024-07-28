<script setup>
defineProps({
  article: {
    type: Object,
  },
});
</script>

<template>
  <article class="px-32">
    <div class="flex justify-between items-center gap-4 mb-4">
      <h2 class="px-2 mb-2">{{ article.title }} ghb</h2>
      <AppLink :to="article._path">Читать кейс</AppLink>
    </div>
    <NuxtImg
      v-if="article.picture"
      :src="article.picture"
      class="w-full h-auto:"
    />
  </article>
</template>
