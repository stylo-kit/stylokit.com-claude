<script setup lang="ts">
import {
  PhCertificate, PhHeadphones, PhTrophy, PhGhost, PhGraduationCap, PhDog,
  PhMagnifyingGlass, PhHouse
} from '@phosphor-icons/vue'

const iconGrid = [
  { icon: PhCertificate, selected: true },
  { icon: PhCertificate },
  { icon: PhCertificate },
  { icon: PhHeadphones },
  { icon: PhHeadphones },
  { icon: PhHeadphones },
  { icon: PhTrophy },
  { icon: PhTrophy },
  { icon: PhTrophy },
  { icon: PhGhost },
  { icon: PhGhost },
  { icon: PhGhost },
  { icon: PhGraduationCap },
  { icon: PhGraduationCap },
  { icon: PhGraduationCap },
  { icon: PhDog },
  { icon: PhDog },
  { icon: PhDog },
]
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <!-- Background gradient -->
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="background: radial-gradient(ellipse at 30% 20%, rgba(165,140,248,0.3) 0%, rgba(0,154,255,0.15) 40%, transparent 70%)"
    />

    <div class="relative mx-auto max-w-[1200px] px-4 py-12 tablet:px-6 tablet:py-24">
      <div class="flex flex-col gap-6 tablet:gap-8 desktop:flex-row desktop:items-start desktop:gap-16">
        <!-- Hero text -->
        <div class="flex max-w-full flex-col items-start gap-6 tablet:max-w-[720px] tablet:gap-8 desktop:max-w-[560px] desktop:shrink-0">
          <div class="flex flex-col items-start gap-3 tablet:gap-4">
            <UiBadge label="No-Code Friendly" variant="border" />
            <h1 class="text-[28px] leading-[36px] font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
              Premium framer templates for Agencies and creators
            </h1>
            <p class="max-w-full text-[15px] leading-5 text-zinc-500 tablet:max-w-[560px] tablet:text-xl tablet:leading-[30px] tablet:tracking-[-0.01em]">
              Curated Framer templates for agencies, freelancers, and startups — built for speed and clean structure.
            </p>
          </div>

          <!-- CTA -->
          <div class="flex flex-col items-start gap-4">
            <div class="flex items-center gap-6">
              <div class="relative">
                <div class="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-main-blue blur-md" />
                <UiAppButton
                  label="All Access — $499"
                  to="/all-access"
                  icon="lightning"
                  variant="neo"
                  size="md"
                />
              </div>
            </div>
            <p class="max-w-[320px] text-[15px] leading-5 tracking-[0.3px] text-zinc-400">
              Lifetime access. No subscriptions.
            </p>
          </div>
        </div>

        <!-- Icon panel mockup -->
        <div class="relative hidden flex-1 tablet:block">
          <div class="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
            <div class="flex">
              <!-- Sidebar -->
              <div class="w-[200px] shrink-0 border-r border-zinc-200 bg-white p-3">
                <!-- Header -->
                <div class="flex flex-col gap-3">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-medium text-zinc-950">Stylokit icon</span>
                    <PhHouse :size="8" weight="bold" class="ml-auto text-zinc-500" />
                  </div>
                  <div class="h-px bg-zinc-100" />
                  <!-- Search -->
                  <div class="flex items-center gap-1.5 rounded border border-zinc-100 px-2 py-1.5">
                    <PhMagnifyingGlass :size="12" weight="bold" class="text-zinc-400" />
                    <span class="text-xs text-zinc-400">Search...</span>
                  </div>
                  <!-- Icon grid in sidebar -->
                  <div class="grid grid-cols-3 gap-1.5">
                    <div
                      v-for="(item, i) in iconGrid"
                      :key="i"
                      class="flex h-[42px] items-center justify-center rounded-lg bg-zinc-100"
                      :class="item.selected ? 'border border-purple-500 bg-zinc-100' : ''"
                    >
                      <component
                        :is="item.icon"
                        :size="20"
                        :weight="item.selected ? 'duotone' : 'regular'"
                        class="text-zinc-950"
                        :style="!item.selected && i % 3 === 2 ? 'opacity: 0.15' : ''"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Preview area -->
              <div class="flex flex-1 items-center justify-center p-4">
                <div class="relative">
                  <!-- Purple selection frame -->
                  <div class="relative h-24 w-24">
                    <div class="absolute inset-0 border border-purple-500" />
                    <!-- Corner dots -->
                    <div class="absolute -top-1 -left-1 h-2 w-2 rounded-full border border-purple-500 bg-white" />
                    <div class="absolute -top-1 -right-1 h-2 w-2 rounded-full border border-purple-500 bg-white" />
                    <div class="absolute -bottom-1 -left-1 h-2 w-2 rounded-full border border-purple-500 bg-white" />
                    <div class="absolute -bottom-1 -right-1 h-2 w-2 rounded-full border border-purple-500 bg-white" />
                    <!-- Icon inside -->
                    <div class="flex h-full w-full items-center justify-center">
                      <PhCertificate :size="64" weight="duotone" class="text-zinc-950" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
