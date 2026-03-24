<script setup lang="ts">
useHead({ title: 'Framer Templates — Stylokit' })

const activeCategory = ref('All')

const categories = [
  'All', 'Free', 'Agency', 'AI', 'Business', 'One page', 'Saas',
  'eCommerce', 'Course', 'Landing', 'Inspirations', 'Brand Guidelines',
]

const { data: allTemplates } = await useAsyncData('framer-all', () =>
  queryCollection('templates')
    .where('platform', '=', 'framer')
    .all()
)

const filteredTemplates = computed(() => {
  if (!allTemplates.value) return []
  if (activeCategory.value === 'All') return allTemplates.value
  if (activeCategory.value === 'Free') return allTemplates.value.filter(t => t.isFree)
  return allTemplates.value.filter(t => t.category === activeCategory.value)
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <SectionsTemplatesPageHeader
      badge="Curated for Designers"
      title="Framer Templates for Modern Websites"
      description="Launch faster with premium Framer templates designed for speed, responsiveness, and high conversion. Perfect for startups, portfolios, and SaaS."
      show-back-link
    />

    <div class="mx-auto max-w-[1200px] px-4 pb-16 tablet:px-6 tablet:pb-24">
      <!-- Category Filter -->
      <div class="mb-8 border-b border-zinc-200 pb-4">
        <UiCategoryFilter
          v-model="activeCategory"
          :categories="categories"
        />
      </div>

      <!-- Template Grid -->
      <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
        <CardsTemplateCard
          v-for="t in filteredTemplates"
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
