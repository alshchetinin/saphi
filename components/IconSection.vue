<script setup>
defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
});
</script>

<template>
  <div class="grid gap-1 lg:flex lg:gap-5 py-6 px-4 border-t">
    <div class="max-w-72 w-full flex items-center gap-2 h-min">
      <component v-if="icon" :is="icon" class="w-5 h-5" />
      {{ title }}
    </div>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
