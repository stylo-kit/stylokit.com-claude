<script setup lang="ts">
import { PhCheck } from '@phosphor-icons/vue'

interface PricingCardProps {
  name: string
  price: number
  originalPrice?: number
  description: string
  licenseLabel: string
  features: string[]
  ctaLabel?: string
  ctaLink: string
  dark?: boolean
}

withDefaults(defineProps<PricingCardProps>(), {
  ctaLabel: 'Get All Access',
  dark: false,
})
</script>

<template>
  <div
    class="flex flex-col rounded-2xl border p-6 tablet:p-8"
    :class="dark ? 'border-zinc-800 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-950'"
  >
    <!-- Plan name -->
    <h3 class="text-xl leading-[30px] font-medium">
      {{ name }}
    </h3>

    <!-- Description -->
    <p class="mt-1 text-[15px] leading-5" :class="dark ? 'text-zinc-400' : 'text-zinc-500'">
      {{ description }}
    </p>

    <!-- Price -->
    <div class="mt-6 flex items-baseline gap-3">
      <span class="text-[40px] leading-none font-semibold tracking-tight">
        ${{ price }}
      </span>
      <span
        v-if="originalPrice"
        class="text-[17px] leading-6 text-zinc-500 line-through"
      >
        ${{ originalPrice.toLocaleString() }}
      </span>
    </div>

    <!-- License label -->
    <p class="mt-2 text-[15px] leading-5" :class="dark ? 'text-zinc-400' : 'text-zinc-500'">
      {{ licenseLabel }}
    </p>

    <!-- Divider -->
    <div class="my-6 h-px" :class="dark ? 'bg-zinc-800' : 'bg-zinc-200'" />

    <!-- Features -->
    <ul class="flex flex-1 flex-col gap-3">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-center gap-3 text-[15px] leading-5"
        :class="dark ? 'text-zinc-300' : 'text-zinc-600'"
      >
        <PhCheck :size="16" weight="bold" class="shrink-0 text-blue-500" />
        {{ feature }}
      </li>
    </ul>

    <!-- CTA -->
    <a
      :href="ctaLink"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-[15px] font-medium transition-colors"
      :class="dark ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-zinc-950 text-white hover:bg-zinc-800'"
    >
      {{ ctaLabel }}
    </a>
  </div>
</template>
