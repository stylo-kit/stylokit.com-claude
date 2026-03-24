<script setup lang="ts">
const { all } = useBlog()

const posts = all().slice(0, 3)
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
          v-for="post in posts"
          :key="post.slug"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :category="post.category"
          :image="post.image"
          :to="`/blog/${post.slug}`"
        />
      </div>
    </div>
  </section>
</template>
