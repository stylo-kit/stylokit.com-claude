<script setup lang="ts">
import {
  PhHouse,
  PhGear,
  PhUser,
  PhEnvelope,
  PhHeart,
  PhStar,
  PhBell,
  PhCamera,
  PhChatCircle,
  PhFolder,
  PhLightning,
  PhRocket,
  PhShieldCheck,
  PhTrophy,
  PhGlobe,
  PhClock,
  PhCalendar,
  PhChartBar,
  PhMagnifyingGlass,
  PhPencilSimple,
  PhTrash,
  PhDownloadSimple,
  PhUploadSimple,
  PhShare,
  PhEye,
  PhLock,
  PhKey,
  PhCreditCard,
  PhMapPin,
  PhPhone,
  PhBookmark,
  PhTag,
  PhPalette,
  PhCube,
  PhPackage,
  PhFigmaLogo,
} from '@phosphor-icons/vue'

useHead({ title: 'Icon Set — Stylokit' })

useSeoMeta({
  description: 'A beautifully crafted icon set for Framer with 500+ icons in multiple styles. Consistent, pixel-perfect, and ready for your next project.',
  ogTitle: 'Stylokit Icon Set — Premium Icons for Framer',
  ogDescription: 'A beautifully crafted icon set for Framer with 500+ icons in multiple styles.',
})

const previewIcons = [
  PhHouse, PhGear, PhUser, PhEnvelope, PhHeart, PhStar,
  PhBell, PhCamera, PhChatCircle, PhFolder, PhLightning, PhRocket,
  PhShieldCheck, PhTrophy, PhGlobe, PhClock, PhCalendar, PhChartBar,
  PhMagnifyingGlass, PhPencilSimple, PhTrash, PhDownloadSimple, PhUploadSimple, PhShare,
  PhEye, PhLock, PhKey, PhCreditCard, PhMapPin, PhPhone,
  PhBookmark, PhTag,
]

const iconStyles = ['Regular', 'Bold', 'Duotone', 'Light', 'Thin', 'Fill'] as const
const activeStyle = ref<typeof iconStyles[number]>('Duotone')

const styleWeightMap: Record<string, string> = {
  Regular: 'regular',
  Bold: 'bold',
  Duotone: 'duotone',
  Light: 'light',
  Thin: 'thin',
  Fill: 'fill',
}

const features = [
  {
    icon: PhPackage,
    title: '500+ Icons',
    description: 'A comprehensive collection covering UI essentials, social, commerce, media, and more.',
  },
  {
    icon: PhPalette,
    title: '6 Style Variants',
    description: 'Each icon available in Regular, Bold, Duotone, Light, Thin, and Fill styles.',
  },
  {
    icon: PhCube,
    title: 'Framer Native',
    description: 'Built as a Framer component with property controls for size, color, weight, and mirroring.',
  },
  {
    icon: PhFigmaLogo,
    title: 'Figma File Included',
    description: 'Full Figma library with all icons organized by category for easy design handoff.',
  },
]

const categories = [
  { name: 'UI Essentials', count: 120 },
  { name: 'Communication', count: 45 },
  { name: 'Commerce', count: 38 },
  { name: 'Media', count: 42 },
  { name: 'Navigation', count: 35 },
  { name: 'Social', count: 30 },
  { name: 'Data & Charts', count: 28 },
  { name: 'Files & Folders', count: 32 },
  { name: 'Security', count: 25 },
  { name: 'Weather', count: 20 },
  { name: 'Arrows', count: 40 },
  { name: 'Miscellaneous', count: 45 },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <SectionsTemplatesPageHeader
      badge="Icon Set"
      title="500+ Beautifully Crafted Icons for Framer"
      description="A comprehensive icon library built natively for Framer. Consistent, pixel-perfect, and available in 6 styles to match any design."
      gradient
    />

    <!-- Style Switcher + Icon Preview Grid -->
    <div class="mx-auto max-w-[1200px] px-4 tablet:px-6">
      <UiScrollReveal>
        <section class="pb-12 tablet:pb-16">
          <!-- Style tabs -->
          <div class="flex items-center gap-2 border-b border-zinc-200 pb-4">
            <button
              v-for="style in iconStyles"
              :key="style"
              class="rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors"
              :class="activeStyle === style
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
              "
              @click="activeStyle = style"
            >
              {{ style }}
            </button>
          </div>

          <!-- Icon grid preview -->
          <div class="mt-8 grid grid-cols-4 gap-3 tablet:grid-cols-8 desktop:grid-cols-8">
            <div
              v-for="(icon, index) in previewIcons"
              :key="index"
              class="group flex aspect-square items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 transition-all duration-200 hover:border-purple-200 hover:bg-purple-50 hover:shadow-sm"
            >
              <component
                :is="icon"
                :size="28"
                :weight="styleWeightMap[activeStyle] as any"
                class="text-zinc-700 transition-colors group-hover:text-purple-600"
              />
            </div>
          </div>

          <p class="mt-6 text-center text-[15px] leading-5 text-zinc-400">
            Showing 32 of 500+ icons. Full library included with All Access.
          </p>
        </section>
      </UiScrollReveal>

      <!-- Features -->
      <UiScrollReveal :delay="100">
        <section class="pb-16 tablet:pb-24">
          <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            <UiScrollReveal
              v-for="(feature, index) in features"
              :key="feature.title"
              :delay="index * 80"
            >
              <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <component
                  :is="feature.icon"
                  :size="24"
                  weight="duotone"
                  class="text-purple-600"
                />
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">
                  {{ feature.title }}
                </h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  {{ feature.description }}
                </p>
              </div>
            </UiScrollReveal>
          </div>
        </section>
      </UiScrollReveal>

      <!-- Categories -->
      <UiScrollReveal :delay="100">
        <section class="pb-16 tablet:pb-24">
          <UiSectionHeading
            title="Icon Categories"
            description="Organized into intuitive categories so you can find the right icon fast."
          />

          <div class="mt-8 grid grid-cols-2 gap-4 tablet:mt-12 tablet:grid-cols-3 desktop:grid-cols-4">
            <div
              v-for="cat in categories"
              :key="cat.name"
              class="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span class="text-[15px] font-medium text-zinc-950">{{ cat.name }}</span>
              <span class="text-[14px] text-zinc-400">{{ cat.count }}</span>
            </div>
          </div>
        </section>
      </UiScrollReveal>

      <!-- How to Use -->
      <UiScrollReveal :delay="100">
        <section class="pb-16 tablet:pb-24">
          <UiSectionHeading
            title="How It Works"
            description="Start using icons in your Framer project in seconds."
          />

          <div class="mt-8 grid w-full grid-cols-1 gap-8 tablet:mt-12 tablet:grid-cols-3">
            <UiScrollReveal :delay="0">
              <div class="flex flex-col gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-[15px] font-semibold text-purple-600">
                  1
                </div>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Get All Access</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  The icon set is included with every All Access purchase. One payment, lifetime updates.
                </p>
              </div>
            </UiScrollReveal>
            <UiScrollReveal :delay="100">
              <div class="flex flex-col gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-[15px] font-semibold text-purple-600">
                  2
                </div>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Copy the Component</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  Open the icon set in Framer and copy the component into your project. All icons are instantly available.
                </p>
              </div>
            </UiScrollReveal>
            <UiScrollReveal :delay="200">
              <div class="flex flex-col gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-[15px] font-semibold text-purple-600">
                  3
                </div>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Pick & Customize</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  Select any icon, choose a style, adjust the size and color through Framer property controls.
                </p>
              </div>
            </UiScrollReveal>
          </div>
        </section>
      </UiScrollReveal>
    </div>

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
