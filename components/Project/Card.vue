<script setup lang="ts">
defineProps({
  project: {
    type: Object,
  },
});
</script>

<template>
  <article class="lg:px-32">
    <div
      class="flex lg:flex-row flex-col justify-between lg:items-center gap-4 mb-3"
    >
      <h2 class="px-2">
        {{ project.title }}
      </h2>
      <AppLink :to="project._path">Читать кейс</AppLink>
    </div>
    <NuxtImg
      v-if="project.picture"
      :src="project.picture"
      class="w-full h-auto:"
    />
  </article>
</template>
