<script setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>
<template>
  <div class="max-w-2xl mx-auto">
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-3 items-center">
        <date>{{ new Date(data.date).toLocaleDateString("ru-Ru") }}</date>
        <div>{{ data.company }}</div>
      </div>
      <div class="flex gap-3">
        <AppLink v-for="link in data.links" :key="link" :link="link">
          {{ link.title }}
        </AppLink>
      </div>
    </div>

    <ContentRendererMarkdown :value="data" />
  </div>
</template>
