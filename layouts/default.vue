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
useSeoMeta({
  description:
    "Более 3 лет проектирую пользовательские интерфейсы для мобильных приложений и десктопных сервисов, создавая удобные, простые и эстетически привлекательные решения.",
  ogTitle: "Шайдуллина Сафия — Product designer",
  ogDescription:
    "Более 3 лет проектирую пользовательские интерфейсы для мобильных приложений и десктопных сервисов, создавая удобные, простые и эстетически привлекательные решения.",
  ogImage: "/og.jpg",
  ogUrl: "saphiashaidullina.ru",
  twitterTitle: "Шайдуллина Сафия — Product designer",
  twitterDescription:
    "Более 3 лет проектирую пользовательские интерфейсы для мобильных приложений и десктопных сервисов, создавая удобные, простые и эстетически привлекательные решения.",
  twitterImage: "/og.jpg",
  twitterCard:
    "Более 3 лет проектирую пользовательские интерфейсы для мобильных приложений и десктопных сервисов, создавая удобные, простые и эстетически привлекательные решения.",
});
useHead({
  htmlAttrs: {
    lang: "ru",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
