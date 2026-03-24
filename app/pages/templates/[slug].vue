<script setup lang="ts">
import { PhArrowRight, PhEye, PhFramerLogo } from '@phosphor-icons/vue'

const route = useRoute()
const slug = route.params.slug as string

const { data: template } = await useAsyncData(`template-${slug}`, () =>
  queryCollection('templates')
    .where('slug', '=', slug)
    .first()
)

if (!template.value) {
  throw createError({ statusCode: 404, statusMessage: 'Template not found' })
}

useHead({ title: `${template.value.title} — ${template.value.subtitle || 'Stylokit'}` })

// Get related templates (same platform, excluding current)
const { data: relatedTemplates } = await useAsyncData(`related-${slug}`, () =>
  queryCollection('templates')
    .where('platform', '=', template.value!.platform)
    .where('slug', '!=', slug)
    .limit(4)
    .all()
)

const platformLabel = computed(() => {
  const p = template.value?.platform
  if (p === 'framer') return 'Framer'
  if (p === 'nuxt') return 'Nuxt'
  if (p === 'figma') return 'Figma'
  return p
})
</script>

<template>
  <div v-if="template">
    <!-- Breadcrumb -->
    <div class="mx-auto max-w-[1200px] px-4 pt-8 tablet:px-6 tablet:pt-12">
      <nav class="flex items-center gap-2 text-sm text-zinc-400">
        <NuxtLink to="/" class="transition-colors hover:text-zinc-950">Home</NuxtLink>
        <span class="text-zinc-300">&gt;</span>
        <NuxtLink to="/templates" class="transition-colors hover:text-zinc-950">Templates</NuxtLink>
        <span class="text-zinc-300">&gt;</span>
        <NuxtLink :to="`/templates/${template.platform}`" class="transition-colors hover:text-zinc-950">{{ platformLabel }}</NuxtLink>
        <span class="text-zinc-300">&gt;</span>
        <span class="font-medium text-zinc-950">{{ template.title }}</span>
      </nav>
    </div>

    <!-- Hero Section -->
    <div class="mx-auto max-w-[1200px] px-4 py-8 tablet:px-6 tablet:py-12">
      <div class="flex flex-col gap-8 desktop:flex-row desktop:gap-12">
        <!-- Left: Image -->
        <div class="flex-1">
          <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
            <NuxtImg
              v-if="template.image"
              :src="template.image"
              :alt="template.title"
              class="h-full w-full object-cover"
            />
            <div v-else class="flex h-full items-center justify-center">
              <span class="text-lg text-zinc-400">{{ template.title }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Info (sticky on desktop) -->
        <div class="flex flex-col gap-5 desktop:sticky desktop:top-[96px] desktop:w-[380px] desktop:self-start">
          <!-- Badge -->
          <span
            v-if="template.badge"
            class="w-fit rounded-full px-3 py-1 text-xs font-medium"
            :class="{
              'bg-amber-100 text-amber-700': template.badge === 'Popular',
              'bg-neo-100 text-neo-800': template.badge === 'New',
              'bg-orange-50 text-orange-600': template.badge === 'Gift',
            }"
          >
            {{ template.badge }}
          </span>

          <!-- Title & Subtitle -->
          <div class="flex flex-col gap-1">
            <h1 class="text-[36px] leading-[44px] font-semibold text-zinc-950">
              {{ template.title }}
            </h1>
            <p v-if="template.subtitle" class="text-[17px] leading-6 text-zinc-500">
              {{ template.subtitle }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-[15px] leading-[22px] text-zinc-500">
            {{ template.description }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col gap-3">
            <a
              v-if="template.lemonSqueezyUrl"
              :href="template.lemonSqueezyUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Purchase for ${{ template.price }}
            </a>
            <a
              v-else-if="template.isFree && template.previewUrl"
              :href="template.previewUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Get for Free
            </a>
            <a
              v-if="template.previewUrl"
              :href="template.previewUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50"
            >
              <PhEye :size="16" />
              Live demo
            </a>
          </div>

          <!-- Template Specs -->
          <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-5">
            <h3 class="text-sm font-semibold text-zinc-950">Template Specs</h3>
            <div class="flex flex-col gap-2.5 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-zinc-500">Platform</span>
                <PhFramerLogo v-if="template.platform === 'framer'" :size="18" class="text-zinc-950" />
                <span v-else class="text-zinc-950">{{ platformLabel }}</span>
              </div>
              <div v-if="template.category" class="flex justify-between">
                <span class="text-zinc-500">Category</span>
                <span class="text-zinc-950">{{ template.category }}</span>
              </div>
              <div v-if="template.pageCount" class="flex justify-between">
                <span class="text-zinc-500">Page number</span>
                <span class="text-zinc-950">{{ template.pageCount }}</span>
              </div>
              <div v-if="template.cmsCount" class="flex justify-between">
                <span class="text-zinc-500">CMS</span>
                <span class="text-zinc-950">{{ template.cmsCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- More Templates -->
    <UiScrollReveal>
      <div v-if="relatedTemplates?.length" class="mx-auto max-w-[1200px] px-4 pb-12 tablet:px-6 tablet:pb-24">
        <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
          <h2 class="text-xl font-medium text-zinc-950 tablet:text-2xl">More Templates</h2>
          <UiLinkButton label="See All" :to="`/templates/${template.platform}`" />
        </div>
        <div class="mt-6 grid grid-cols-1 gap-6 tablet:mt-8 tablet:grid-cols-2 desktop:grid-cols-4">
          <CardsTemplateCard
            v-for="t in relatedTemplates"
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
      </div>
    </UiScrollReveal>

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
