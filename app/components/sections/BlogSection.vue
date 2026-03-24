<script setup lang="ts">
const placeholderPosts = [
  {
    title: '20 Best Framer Portfolio Templates 2025',
    description: 'Discover the top templates for portfolio sites that actually convert in 2025.',
    date: 'Aug 6, 2025',
    category: 'Web design',
    slug: '20-best-framer-portfolio-templates-2025',
  },
  {
    title: 'How to Build a SaaS Landing Page in Framer',
    description: 'Step-by-step guide to creating high-converting SaaS pages with Framer.',
    date: 'Jul 22, 2025',
    category: 'Tutorials',
    slug: 'how-to-build-saas-landing-page-framer',
  },
  {
    title: 'Framer vs Webflow: Which One Should You Use?',
    description: 'An honest comparison of two popular no-code website builders.',
    date: 'Jul 10, 2025',
    category: 'Insights',
    slug: 'framer-vs-webflow-comparison',
  },
]
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-14 tablet:px-6 tablet:py-24">
      <!-- Section heading -->
      <UiSectionHeading
        title="Insights, Tips & Design Trends"
        description="Explore practical guides, UI inspiration, and real-world lessons on building better websites with Framer."
      />

      <!-- Blog grid -->
      <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
        <UiBlogCard
          v-for="post in placeholderPosts"
          :key="post.slug"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :category="post.category"
          :to="`/blog/${post.slug}`"
        />
      </div>
    </div>
  </section>
</template>
