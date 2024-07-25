<script setup lang="ts">
defineProps({
  project: {
    type: Object,
  },
});
</script>

<template>
  <article class="px-32">
    <div class="flex justify-between items-center gap-4">
      <h2 class="px-2 mb-2">
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
