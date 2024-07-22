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
    <div class="max-w-72 w-full">
      {{ title }}
    </div>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>
