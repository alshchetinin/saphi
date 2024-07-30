<script setup>
import { ArrowUpRightIcon } from "lucide-vue-next";
const links = [
  {
    id: 1,
    name: "Обо мне",
    link: "/",
  },
  {
    id: 2,
    name: "Кейсы",
    link: "/projects",
  },
  {
    id: 3,
    name: "Статьи",
    link: "/blog",
  },
  {
    id: 4,
    name: "Figma",
    link: "https://www.figma.com/design/hbIk5zwFkjDPdjLsg5nG8n/%D0%A8%D0%B0%D0%B9%D0%B4%D1%83%D0%BB%D0%BB%D0%B8%D0%BD%D0%B0-%D0%A1%D0%B0%D1%84%D0%B8%D1%8F-%7C-Product-desigher?node-id=0-1",
    external: true,
  },
];
</script>

<template>
  <nav>
    <ul class="lg:space-y-3 max-lg:flex max-lg:justify-between max-lg:px-4 m-0">
      <li v-for="link in links" :key="link.id" class="list-none px-0 m-0">
        <NuxtLink
          v-if="!link.external"
          :to="link.link"
          class="opacity-70 hover:opacity-100 transition-all"
          >{{ link.name }}</NuxtLink
        >
        <a
          v-else
          :href="link.link"
          target="_blank"
          class="opacity-70 hover:opacity-100 transition-all flex gap-0.5 items-center"
        >
          {{ link.name }} <ArrowUpRightIcon class="w-4 h-4 mt-0.5"
        /></a>
      </li>
    </ul>
  </nav>
</template>
