<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  category?: string
  image?: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="group flex flex-col gap-4">
    <div class="relative aspect-[1.567] w-full overflow-hidden rounded-lg bg-zinc-100">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div class="absolute bottom-3 left-3 flex items-center gap-2">
        <span class="rounded-md bg-white px-2 py-1 text-xs font-medium text-zinc-950">
          {{ date }}
        </span>
        <span v-if="category" class="rounded-md bg-white px-2 py-1 text-xs font-medium text-zinc-950">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-lg leading-7 font-medium text-zinc-950 transition-colors group-hover:text-zinc-600 tablet:text-xl tablet:leading-[30px]">
        {{ title }}
      </h3>
      <p class="text-[15px] leading-[22px] tracking-[0.01em] text-zinc-500 line-clamp-2 tablet:text-[17px] tablet:leading-6">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
