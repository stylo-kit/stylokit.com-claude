<script setup lang="ts">
useHead({ title: 'Free Templates — Stylokit' })

const { data: templates } = await useAsyncData('freebies-all', () =>
  queryCollection('templates')
    .where('isFree', '=', true)
    .all()
)
</script>

<template>
  <div>
    <!-- Page Header -->
    <SectionsTemplatesPageHeader
      badge="Curated for Designers"
      title="Free Templates & UI Resources"
      description="Get free Framer, Figma, and Nuxt templates — no strings attached. Explore lightweight tools and design resources to kickstart your next project."
      show-back-link
    />

    <div class="mx-auto max-w-[1200px] px-4 pb-16 tablet:px-6 tablet:pb-24">
      <!-- Template Grid -->
      <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
        <CardsTemplateCard
          v-for="t in templates"
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

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
