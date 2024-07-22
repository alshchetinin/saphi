<script setup>
const social = [
  {
    id: 1,
    name: "Telegram",
    link: "#",
  },
  {
    id: 2,
    name: "Whatsapp",
    link: "#",
  },
];

const phone = "8 (982) 940-00-18";
const email = "sh_s_22@mail.ru";
</script>

<template>
  <div>
    <div class="space-x-1">
      <a
        v-for="link in social"
        :key="link.id"
        class="h-7 w-7 rounded-full bg-primary inline-block"
      >
      </a>
    </div>
    <div class="mt-2 whitespace-nowrap flex flex-col">
      <a :href="`tel:${phone}`">{{ phone }}</a>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
  </div>
</template>
