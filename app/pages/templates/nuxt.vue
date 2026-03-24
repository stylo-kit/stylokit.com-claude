<script setup lang="ts">
useHead({ title: 'Nuxt Templates — Stylokit' })

const { query } = useTemplates()
const templates = query().where('platform', '=', 'nuxt').all()
</script>

<template>
  <div>
    <!-- Page Header -->
    <SectionsTemplatesPageHeader
      badge="Curated for Designers"
      title="Nuxt Templates for Developers & Designers"
      description="Build full-stack websites faster with our Nuxt-based templates. Clean code, optimized structure, and production-ready design."
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
