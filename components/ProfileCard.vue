<template>
  <div>
    <NuxtLink
      to="/"
      class="max-lg:flex items-center max-lg:gap-4 max-lg:p-4 whitespace-nowrap"
    >
      <NuxtImg src="avatar.jpg" class="rounded-lg mb-1" />
      <div>
        <h2 c class="lg:mt-3 mb-0 text-lg">Шайдуллина Сафия</h2>
        <p class="!mt-0 opacity-70 text-sm">Product designer</p>
      </div>
    </NuxtLink>
    <div class="lg:mt-20">
      <AppNav />
    </div>
  </div>
</template>
