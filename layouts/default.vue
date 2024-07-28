<template>
  <div class="container lg:flex h-full">
    <div class="lg:hidden">
      <ProfileCard />
    </div>
    <div class="max-lg:hidden">
      <Sidebar class="sticky top-0" />
    </div>

    <div class="w-full py-4 lg:py-10">
      <slot />
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "dark",
  },
});
</script>
