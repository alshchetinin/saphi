<script setup>
import { GlassesIcon, Subtitles } from "lucide-vue-next";
import Etagi from "../Experience/Etagi.vue";
import Freelance from "../Experience/Freelance.vue";
const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    icon: "/Etagi.svg",
    title: "Product designer, АН Этажи",
    subtitle: "ноябрь 2021 – настоящее время",
    component: Etagi,
  },
  {
    value: "item-2",
    icon: "/Freelance.svg",
    title: "Web designer, Фриланс",
    subtitle: "май 2021 – ноябрь 2021",
    component: Freelance,
  },
];
</script>

<template>
  <IconSection title="Опыт" :icon="GlassesIcon">
    <Accordion
      type="single"
      class="w-full mt-0"
      collapsible
      :default-value="defaultValue"
    >
      <AccordionItem
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value"
        class="mt-0"
      >
        <AccordionTrigger class="mt-0">
          <div class="flex gap-4 items-center text-left">
            <div class="h-10 w-10">
              <NuxtImg :src="item.icon" class="w-full h-full" />
            </div>
            <div>
              <div class="text-lg font-semibold">
                {{ item.title }}
              </div>
              <div class="text-sm font-normal">{{ item.subtitle }}</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <component :is="item.component" />
        </AccordionContent>
      </AccordionItem> </Accordion
  ></IconSection>
</template>
