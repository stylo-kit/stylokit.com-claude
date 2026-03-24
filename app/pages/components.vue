<script setup lang="ts">
import {
  PhFrameCorners,
  PhCube,
  PhPaintBrush,
  PhSlidersHorizontal,
  PhMagicWand,
  PhLayout,
} from '@phosphor-icons/vue'

useHead({ title: 'Components — Stylokit' })

useSeoMeta({
  description: 'Explore a growing collection of free Framer components — interactive effects, animations, and UI elements to enhance your projects.',
  ogTitle: 'Framer Components — Stylokit',
  ogDescription: 'Free interactive Framer components to supercharge your website projects.',
})

const { query } = useTemplates()
const components = query().where('category', '=', 'Component').all()
const designSystems = query().where('category', '=', 'Design system').all()
const allItems = [...components, ...designSystems]

const features = [
  {
    icon: PhCube,
    title: 'Drag & Drop Ready',
    description: 'Simply copy the component into your Framer project and start customizing — no coding required.',
  },
  {
    icon: PhSlidersHorizontal,
    title: 'Fully Customizable',
    description: 'Adjust colors, sizes, animations, and content through intuitive property controls.',
  },
  {
    icon: PhFrameCorners,
    title: 'Responsive by Default',
    description: 'Every component adapts to desktop, tablet, and mobile breakpoints out of the box.',
  },
  {
    icon: PhPaintBrush,
    title: 'Clean Design',
    description: 'Built with modern design principles and consistent styling for a polished look.',
  },
  {
    icon: PhMagicWand,
    title: 'Smooth Animations',
    description: 'Interactive motion effects powered by Framer\'s animation engine for a premium feel.',
  },
  {
    icon: PhLayout,
    title: 'Works With Any Template',
    description: 'Components integrate seamlessly with any Framer project or Stylokit template.',
  },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <SectionsTemplatesPageHeader
      badge="Free Components"
      title="Interactive Framer Components"
      description="A growing collection of free, ready-to-use Framer components — from 3D effects and animations to UI elements. Drop them into any project."
      gradient
    />

    <!-- Components Grid -->
    <div class="mx-auto max-w-[1200px] px-4 tablet:px-6">
      <UiScrollReveal>
        <section class="pb-12 tablet:pb-16">
          <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
            <h2 class="text-xl font-medium text-zinc-950 tablet:text-2xl">All Components</h2>
            <span class="text-[15px] text-zinc-500">{{ allItems.length }} items</span>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-6 tablet:mt-8 tablet:grid-cols-2 desktop:grid-cols-4">
            <CardsTemplateCard
              v-for="t in allItems"
              :key="t.slug"
              :title="t.title"
              :slug="t.slug"
              :image="t.image"
              :badge="t.badge"
              :category="t.category"
              :price="t.price"
              :is-free="t.isFree"
            />
          </div>
        </section>
      </UiScrollReveal>

      <!-- Features Section -->
      <UiScrollReveal :delay="100">
        <section class="pb-16 tablet:pb-24">
          <UiSectionHeading
            title="Built for Framer"
            description="Every component is designed to work seamlessly within the Framer ecosystem."
          />

          <div class="mt-8 grid grid-cols-1 gap-6 tablet:mt-12 tablet:grid-cols-2 desktop:grid-cols-3">
            <UiScrollReveal
              v-for="(feature, index) in features"
              :key="feature.title"
              :delay="index * 80"
            >
              <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 tablet:p-8">
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
    </div>

    <!-- How to Use Section -->
    <UiScrollReveal>
      <section class="w-full bg-zinc-50">
        <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-16 text-center tablet:px-6 tablet:py-24">
          <UiSectionHeading
            title="How to Use"
            description="Getting started with Stylokit components is simple."
          />

          <div class="mt-4 grid w-full max-w-[800px] grid-cols-1 gap-6 text-left tablet:grid-cols-3">
            <UiScrollReveal :delay="0">
              <div class="flex flex-col gap-2">
                <span class="text-xs font-medium text-purple-600">Step 1</span>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Browse & Pick</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  Explore the collection and find the component that fits your project needs.
                </p>
              </div>
            </UiScrollReveal>
            <UiScrollReveal :delay="100">
              <div class="flex flex-col gap-2">
                <span class="text-xs font-medium text-purple-600">Step 2</span>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Copy to Framer</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  Open the component in Framer and copy it directly into your project canvas.
                </p>
              </div>
            </UiScrollReveal>
            <UiScrollReveal :delay="200">
              <div class="flex flex-col gap-2">
                <span class="text-xs font-medium text-purple-600">Step 3</span>
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">Customize & Ship</h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  Tweak the properties to match your brand and publish your site.
                </p>
              </div>
            </UiScrollReveal>
          </div>
        </div>
      </section>
    </UiScrollReveal>

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
