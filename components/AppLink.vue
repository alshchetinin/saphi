<script setup>
defineProps({
  link: { type: String, required: true },
});
</script>

<template>
  <NuxtLink
    :to="link"
    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground leading-none whitespace-nowrap shadow-none hover:opacity-90 transition-all w-max"
  >
    <slot />
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.78646 4.22839H11.12L3.13493 12.2135C2.95502 12.3934 2.95502 12.6851 3.13493 12.865C3.31483 13.0449 3.60652 13.0449 3.78642 12.865L11.7715 4.87989V12.2135C11.7715 12.5527 12.0465 12.8277 12.3857 12.8277C12.725 12.8277 13 12.5527 13 12.2135L13 4.22847C13 3.55001 12.45 3 11.7715 3H3.78646C3.44724 3 3.17226 3.27499 3.17226 3.6142C3.17226 3.95341 3.44724 4.22839 3.78646 4.22839Z"
      />
    </svg>
  </NuxtLink>
</template>
