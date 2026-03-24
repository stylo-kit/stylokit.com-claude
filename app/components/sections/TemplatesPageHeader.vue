<script setup lang="ts">
import { PhArrowLeft } from '@phosphor-icons/vue'

withDefaults(defineProps<{
  badge: string
  title: string
  description: string
  showBackLink?: boolean
  gradient?: boolean
}>(), {
  showBackLink: false,
  gradient: false,
})
</script>

<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 pt-12 pb-8 text-center tablet:px-6 tablet:pt-24 tablet:pb-12"
      :class="gradient ? 'rounded-3xl bg-gradient-to-b from-blue-50/60 to-white py-16 tablet:py-24' : ''"
    >
      <UiBadge :label="badge" variant="border" />
      <h1 class="max-w-[800px] text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
        {{ title }}
      </h1>
      <p class="max-w-[600px] text-[15px] leading-[22px] text-zinc-500 tablet:text-[17px] tablet:leading-6">
        {{ description }}
      </p>
      <NuxtLink
        v-if="showBackLink"
        to="/templates"
        class="mt-2 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-[14px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
      >
        <PhArrowLeft :size="14" weight="bold" />
        Back to Templates
      </NuxtLink>
    </div>
  </div>
</template>
