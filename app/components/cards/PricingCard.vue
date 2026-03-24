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
  highlighted?: boolean
}

withDefaults(defineProps<PricingCardProps>(), {
  ctaLabel: 'Get All Access',
  highlighted: false,
})
</script>

<template>
  <div
    class="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 tablet:p-8"
    :class="highlighted ? 'ring-1 ring-neo-500/30' : ''"
  >
    <!-- Plan name -->
    <h3 class="text-xl leading-[30px] font-medium text-white">
      {{ name }}
    </h3>

    <!-- Description -->
    <p class="mt-1 text-[15px] leading-5 text-zinc-400">
      {{ description }}
    </p>

    <!-- Price -->
    <div class="mt-6 flex items-baseline gap-3">
      <span class="text-[40px] leading-none font-semibold tracking-tight text-white">
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
    <p class="mt-2 text-[15px] leading-5 text-zinc-400">
      {{ licenseLabel }}
    </p>

    <!-- Divider -->
    <div class="my-6 h-px bg-zinc-800" />

    <!-- Features -->
    <ul class="flex flex-1 flex-col gap-3">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-center gap-3 text-[15px] leading-5 text-zinc-300"
      >
        <PhCheck :size="16" weight="bold" class="shrink-0 text-neo-500" />
        {{ feature }}
      </li>
    </ul>

    <!-- CTA -->
    <a
      :href="ctaLink"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-neo-500 px-5 py-3 text-[15px] font-medium text-zinc-950 transition-colors hover:bg-neo-400"
    >
      {{ ctaLabel }}
    </a>
  </div>
</template>
