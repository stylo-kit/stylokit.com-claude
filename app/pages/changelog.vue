<script setup lang="ts">
import { PhRocket, PhBug, PhStar, PhPlus, PhArrowsClockwise } from '@phosphor-icons/vue'

useHead({ title: 'Changelog — Stylokit' })

useSeoMeta({
  description: 'Stay up to date with the latest updates, new templates, improvements, and bug fixes across all Stylokit products.',
  ogTitle: 'Changelog — Stylokit',
  ogDescription: 'Stay up to date with the latest updates, new templates, and improvements across all Stylokit products.',
})

type ChangeType = 'new' | 'improvement' | 'fix' | 'update'

interface ChangeItem {
  type: ChangeType
  text: string
}

interface ChangelogEntry {
  date: string
  version?: string
  title: string
  description?: string
  changes: ChangeItem[]
}

const typeConfig: Record<ChangeType, { label: string; bgClass: string; textClass: string }> = {
  new: { label: 'New', bgClass: 'bg-neo-100', textClass: 'text-neo-800' },
  improvement: { label: 'Improved', bgClass: 'bg-purple-100', textClass: 'text-purple-800' },
  fix: { label: 'Fixed', bgClass: 'bg-orange-50', textClass: 'text-orange-600' },
  update: { label: 'Update', bgClass: 'bg-purple-50', textClass: 'text-main-blue' },
}

const typeIcons: Record<ChangeType, typeof PhRocket> = {
  new: PhPlus,
  improvement: PhStar,
  fix: PhBug,
  update: PhArrowsClockwise,
}

const entries: ChangelogEntry[] = [
  {
    date: 'March 15, 2025',
    version: 'v2.4',
    title: 'Flavor — New Framer Template',
    description: 'A bold, modern restaurant and food business template built for Framer.',
    changes: [
      { type: 'new', text: 'Flavor — Restaurant & food business Framer template' },
      { type: 'new', text: 'New CMS collections for menu items and categories' },
      { type: 'new', text: 'Online reservation form integration' },
      { type: 'improvement', text: 'Updated global navigation component across all templates' },
    ],
  },
  {
    date: 'February 28, 2025',
    version: 'v2.3',
    title: 'Apex — New Framer Template',
    description: 'A sleek SaaS landing page template designed for startups and tech products.',
    changes: [
      { type: 'new', text: 'Apex — SaaS landing page Framer template' },
      { type: 'new', text: 'Animated pricing toggle component' },
      { type: 'new', text: 'Changelog page template with timeline layout' },
      { type: 'improvement', text: 'Better responsive behavior on tablet breakpoints' },
      { type: 'fix', text: 'Fixed footer links not navigating correctly on some templates' },
    ],
  },
  {
    date: 'February 10, 2025',
    version: 'v2.2',
    title: 'Stylokit Components Update',
    description: 'Major update to the Stylokit component library with new components and improvements.',
    changes: [
      { type: 'new', text: 'Added 12 new UI components to the component library' },
      { type: 'new', text: 'New testimonial card variants' },
      { type: 'new', text: 'New pricing table component with comparison view' },
      { type: 'improvement', text: 'Improved animation performance across all components' },
      { type: 'improvement', text: 'Better color contrast for accessibility compliance' },
      { type: 'fix', text: 'Fixed CMS grid layout breaking on mobile devices' },
    ],
  },
  {
    date: 'January 22, 2025',
    version: 'v2.1',
    title: 'Flavor Nuxt — New Nuxt Template',
    description: 'The Nuxt version of our popular Flavor template, built with Nuxt 4 and Tailwind CSS.',
    changes: [
      { type: 'new', text: 'Flavor Nuxt — Restaurant & food business Nuxt template' },
      { type: 'new', text: 'Full static site generation support' },
      { type: 'new', text: 'Built-in SEO optimization with @nuxtjs/seo' },
      { type: 'improvement', text: 'Updated documentation for all Nuxt templates' },
    ],
  },
  {
    date: 'January 5, 2025',
    version: 'v2.0',
    title: 'Stylokit 2.0 — Major Update',
    description: 'A complete overhaul of the Stylokit platform with new templates, redesigned components, and improved developer experience.',
    changes: [
      { type: 'new', text: 'Completely redesigned Stylokit website' },
      { type: 'new', text: 'All Access bundle — lifetime access to all products' },
      { type: 'new', text: 'Nuxt template category launch' },
      { type: 'new', text: 'Figma design files for all templates' },
      { type: 'improvement', text: 'Redesigned navigation with dropdown menus' },
      { type: 'improvement', text: 'New blog section with CMS integration' },
      { type: 'improvement', text: 'Faster page load times across all templates' },
      { type: 'fix', text: 'Fixed various responsive issues on all templates' },
    ],
  },
  {
    date: 'December 12, 2024',
    version: 'v1.8',
    title: 'Studio — New Framer Template',
    description: 'A minimal portfolio template for creative studios, agencies, and freelancers.',
    changes: [
      { type: 'new', text: 'Studio — Creative agency & portfolio Framer template' },
      { type: 'new', text: 'Project showcase with filterable grid' },
      { type: 'new', text: 'Team member CMS collection' },
      { type: 'improvement', text: 'Optimized image loading across all templates' },
      { type: 'fix', text: 'Fixed scroll animation jank on Safari' },
    ],
  },
  {
    date: 'November 20, 2024',
    version: 'v1.7',
    title: 'Icon Set Release',
    description: 'A custom icon set designed to complement Stylokit templates.',
    changes: [
      { type: 'new', text: '200+ custom icons in multiple formats (SVG, PNG, Figma)' },
      { type: 'new', text: 'Icon search and preview page' },
      { type: 'improvement', text: 'Updated all templates to use the new icon set' },
    ],
  },
  {
    date: 'October 30, 2024',
    version: 'v1.6',
    title: 'Starter — Free Framer Template',
    description: 'A free starter template to help you get started with Framer quickly.',
    changes: [
      { type: 'new', text: 'Starter — Free Framer template with 5 pages' },
      { type: 'new', text: 'Freebies section added to the templates page' },
      { type: 'improvement', text: 'Improved template card design on the browse page' },
      { type: 'fix', text: 'Fixed dark mode toggle not persisting across pages' },
    ],
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 pt-16 text-center tablet:px-6 tablet:pt-24">
        <UiScrollReveal>
          <UiBadge label="Changelog" />
        </UiScrollReveal>

        <UiScrollReveal :delay="80">
          <h1 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
            What's new in Stylokit
          </h1>
        </UiScrollReveal>

        <UiScrollReveal :delay="160">
          <p class="max-w-[560px] text-[15px] leading-[22px] text-zinc-500 tablet:text-[17px] tablet:leading-6">
            All the latest updates, new templates, improvements, and fixes across Stylokit products. Stay in the loop.
          </p>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Changelog Timeline -->
    <section class="w-full">
      <div class="mx-auto max-w-[1200px] px-4 py-12 tablet:px-6 tablet:py-24">
        <div class="mx-auto max-w-[800px]">
          <!-- Timeline entries -->
          <div class="relative">
            <!-- Vertical timeline line -->
            <div class="absolute top-0 bottom-0 left-[7px] hidden w-px bg-zinc-200 tablet:block" />

            <div
              v-for="(entry, entryIndex) in entries"
              :key="entry.date"
              class="relative mb-12 last:mb-0 tablet:pl-12"
            >
              <!-- Timeline dot -->
              <div class="absolute top-1.5 left-0 z-10 hidden h-[15px] w-[15px] items-center justify-center tablet:flex">
                <div class="h-[15px] w-[15px] rounded-full border-[3px] border-purple-500 bg-white" />
              </div>

              <UiScrollReveal :delay="entryIndex * 60">
                <!-- Date & Version -->
                <div class="mb-4 flex flex-wrap items-center gap-3">
                  <time class="text-[15px] leading-5 font-medium text-zinc-950">
                    {{ entry.date }}
                  </time>
                  <span
                    v-if="entry.version"
                    class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500"
                  >
                    {{ entry.version }}
                  </span>
                </div>

                <!-- Title & Description -->
                <h2 class="text-xl leading-[30px] font-medium text-zinc-950 tablet:text-2xl tablet:leading-8">
                  {{ entry.title }}
                </h2>
                <p
                  v-if="entry.description"
                  class="mt-2 text-[15px] leading-[22px] text-zinc-500"
                >
                  {{ entry.description }}
                </p>

                <!-- Change items -->
                <ul class="mt-4 flex flex-col gap-2.5">
                  <li
                    v-for="(change, changeIndex) in entry.changes"
                    :key="changeIndex"
                    class="flex items-start gap-3"
                  >
                    <!-- Type badge -->
                    <span
                      class="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium"
                      :class="[typeConfig[change.type].bgClass, typeConfig[change.type].textClass]"
                    >
                      <component
                        :is="typeIcons[change.type]"
                        :size="10"
                        weight="bold"
                      />
                      {{ typeConfig[change.type].label }}
                    </span>
                    <!-- Change text -->
                    <span class="text-[15px] leading-[22px] text-zinc-600">
                      {{ change.text }}
                    </span>
                  </li>
                </ul>

                <!-- Divider -->
                <div
                  v-if="entryIndex < entries.length - 1"
                  class="mt-8 border-t border-zinc-100 tablet:mt-10"
                />
              </UiScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <SectionsCtaSection />
  </div>
</template>
