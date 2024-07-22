<script setup>
const tools = [
  {
    id: 1,
    name: "Figma",
    icon: "/tools/figma.svg",
  },
  {
    id: 2,
    name: "GTP",
    icon: "/tools/gtp.svg",
  },
  {
    id: 3,
    name: "PS",
    icon: "/tools/ps.svg",
  },
  {
    id: 4,
    name: "Notion",
    icon: "/tools/notion.svg",
  },
  {
    id: 5,
    name: "Meet",
    icon: "/tools/meet.svg",
  },
];
</script>

<template>
  <IconSection title="Инстументы">
    <div class="flex gap-2">
      <NuxtImg
        v-for="tool in tools"
        :key="tool.id"
        :src="tool.icon"
        height="40"
        width="40"
      />
    </div>
  </IconSection>
</template>
