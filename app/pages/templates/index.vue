<script setup lang="ts">
useHead({ title: 'Templates — Stylokit' })

const { query } = useTemplates()
const framerTemplates = query().where('platform', '=', 'framer').where('isFree', '=', false).limit(4).all()
const freebies = query().where('isFree', '=', true).limit(4).all()
const nuxtTemplates = query().where('platform', '=', 'nuxt').limit(4).all()
</script>

<template>
  <div>
    <!-- Page Header with gradient background -->
    <SectionsTemplatesPageHeader
      badge="Curated for Designers"
      title="Premium Framer, Nuxt & Figma Templates"
      description="Explore our growing collection of hand-crafted templates designed to help you build stunning, high-converting websites — faster than ever."
      gradient
    />

    <div class="mx-auto max-w-[1200px] px-4 tablet:px-6">
      <!-- Framer Templates Section -->
      <UiScrollReveal>
        <section class="pb-12 tablet:pb-16">
          <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
            <h2 class="text-xl font-medium text-zinc-950 tablet:text-2xl">Framer Templates</h2>
            <UiLinkButton label="See All" to="/templates/framer" />
          </div>
          <div class="mt-6 grid grid-cols-1 gap-6 tablet:mt-8 tablet:grid-cols-2 desktop:grid-cols-4">
            <CardsTemplateCard
              v-for="t in framerTemplates"
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

      <!-- Freebies Section -->
      <UiScrollReveal :delay="100">
        <section class="pb-12 tablet:pb-16">
          <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
            <h2 class="text-xl font-medium text-zinc-950 tablet:text-2xl">Stylokit Freebies</h2>
            <UiLinkButton label="See All" to="/templates/freebies" />
          </div>
          <div class="mt-6 grid grid-cols-1 gap-6 tablet:mt-8 tablet:grid-cols-2 desktop:grid-cols-4">
            <CardsTemplateCard
              v-for="t in freebies"
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

      <!-- Nuxt Templates Section -->
      <UiScrollReveal :delay="200">
        <section class="pb-12 tablet:pb-16">
          <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
            <h2 class="text-xl font-medium text-zinc-950 tablet:text-2xl">Nuxt Templates</h2>
            <UiLinkButton label="See All" to="/templates/nuxt" />
          </div>
          <div class="mt-6 grid grid-cols-1 gap-6 tablet:mt-8 tablet:grid-cols-2 desktop:grid-cols-4">
            <CardsTemplateCard
              v-for="t in nuxtTemplates"
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
    </div>

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
