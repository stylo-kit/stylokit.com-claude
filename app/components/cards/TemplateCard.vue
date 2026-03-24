<script setup lang="ts">
defineProps<{
  title: string
  slug: string
  image?: string
  badge?: string
  category?: string
  price?: number
  isFree?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="`/templates/${slug}`"
    class="group flex flex-col gap-3"
  >
    <!-- Image -->
    <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <div v-else class="flex h-full items-center justify-center">
        <span class="text-sm text-zinc-400">{{ title }}</span>
      </div>
    </div>

    <!-- Info -->
    <div class="flex flex-col gap-1">
      <!-- Title + Badge -->
      <div class="flex items-center gap-2">
        <h3 class="text-[15px] leading-6 font-medium text-zinc-950">
          {{ title }}
        </h3>
        <span
          v-if="badge"
          class="rounded-full px-2 py-0.5 text-[11px] font-medium"
          :class="{
            'bg-amber-100 text-amber-700': badge === 'Popular',
            'bg-neo-100 text-neo-800': badge === 'New',
            'bg-orange-50 text-orange-600': badge === 'Gift',
          }"
        >
          {{ badge }}
        </span>
      </div>
      <!-- Category · Price -->
      <p class="text-[14px] text-zinc-500">
        <span v-if="category">{{ category }}</span>
        <span v-if="category && (price || isFree)"> · </span>
        <span v-if="isFree">Free</span>
        <span v-else-if="price">${{ price }}</span>
      </p>
    </div>
  </NuxtLink>
</template>
