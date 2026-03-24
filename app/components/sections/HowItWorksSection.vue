<script setup lang="ts">
import { PhPalette, PhLightning, PhPuzzlePiece, PhCompassTool } from '@phosphor-icons/vue'

const features = [
  {
    icon: PhPalette,
    iconColor: 'text-purple-500',
    title: 'Design-first Approach',
    description: 'Every template starts with intentional design — not generic layouts. We obsess over visual quality so you don\'t have to.',
  },
  {
    icon: PhLightning,
    iconColor: 'text-main-blue',
    title: 'Speed & Simplicity',
    description: 'Get up and running fast. Clean structure, logical naming, and modular sections mean less setup and more building.',
  },
  {
    icon: PhPuzzlePiece,
    iconColor: 'text-neo-green-600',
    title: 'Modular & Scalable',
    description: 'Built with reusable components and flexible layouts. Scale pages, sections, and content without breaking things.',
  },
  {
    icon: PhCompassTool,
    iconColor: 'text-orange-600',
    title: 'Made for Real Use',
    description: 'Tested across real client projects and startup launches. These templates aren\'t just pretty — they work in production.',
  },
]
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-12 tablet:px-6 tablet:py-24 desktop:gap-16">
      <!-- Section heading -->
      <UiSectionHeading
        title="Why designers. Choose Stylokit."
        description="Built by a designer, for designers who care about quality, speed, and clarity."
      />

      <!-- Content: founder card + feature grid -->
      <div class="flex flex-col gap-16 desktop:flex-row desktop:gap-16">
        <!-- Founder card -->
        <div class="flex max-w-[544px] flex-col gap-6 rounded-2xl bg-[rgba(0,154,255,0.05)] p-8">
          <!-- Avatar -->
          <div class="flex items-center -space-x-2">
            <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-200" />
            <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-300" />
            <div class="h-10 w-10 rounded-full border-2 border-white bg-zinc-400" />
          </div>
          <p class="text-[17px] leading-6 tracking-[0.01em] text-zinc-600">
            I built Stylokit because I was tired of templates that look great in previews but fall apart in real projects. Every template here is designed the way I'd build it for a paying client — with clean structure, thoughtful details, and zero filler.
          </p>
          <p class="text-[17px] leading-6 tracking-[0.01em] text-zinc-600">
            Whether you're a solo designer, a freelancer, or an agency — these templates are built to save you time and make your work look better.
          </p>
          <div class="flex flex-col gap-1">
            <p class="text-[17px] leading-6 font-medium text-zinc-950">Dmytri Ivanov</p>
            <p class="text-[15px] leading-5 text-zinc-400">Founder of Stylokit</p>
          </div>
        </div>

        <!-- Feature grid (2x2) -->
        <div class="grid flex-1 grid-cols-1 gap-10 tablet:grid-cols-2">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex gap-4"
          >
            <component :is="feature.icon" :size="24" weight="duotone" :class="feature.iconColor" class="shrink-0" />
            <div class="flex flex-col gap-2">
              <h3 class="text-[17px] leading-6 font-medium text-zinc-950">{{ feature.title }}</h3>
              <p class="text-[15px] leading-[22px] tracking-[0.04em] text-zinc-500">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
