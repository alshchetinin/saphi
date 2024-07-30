<script setup>
const social = [
  {
    id: 1,
    name: "Telegram",
    icon: "bxl:telegram",
    link: "https://t.me/Sh_Saphia",
  },
  {
    id: 2,
    name: "Whatsapp",
    icon: "bxl:whatsapp",
    link: "https://wa.me/+79829400018",
  },
];

const phone = "8 (982) 940-00-18";
const email = "sh.saphia@gmail.com";
</script>

<template>
  <div>
    <div class="space-x-1">
      <a
        v-for="link in social"
        :key="link.id"
        :href="link.link"
        target="_blank"
        class="inline-block"
      >
        <div
          class="bg-foreground text-background h-7 w-7 rounded-full flex items-center justify-center"
        >
          <Icon :name="link.icon" class="w-[16px]" />
        </div>
      </a>
    </div>
    <div class="mt-2 whitespace-nowrap flex flex-col">
      <a :href="`tel:${phone}`">{{ phone }}</a>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </div>
  </div>
</template>
