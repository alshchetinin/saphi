<script setup>
const links = [
  {
    id: 1,
    name: "Обо мне",
    link: "/",
  },
  {
    id: 2,
    name: "Проекты",
    link: "/projects",
  },
  {
    id: 3,
    name: "Статьи",
    link: "/blog",
  },
];
</script>

<template>
  <nav>
    <ul class="lg:space-y-3 max-lg:flex max-lg:justify-between max-lg:px-4 m-0">
      <li v-for="link in links" :key="link.id" class="list-none px-0 m-0">
        <NuxtLink :to="link.link" class="opacity-70">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
