<script setup lang="ts">
const { data: templates } = await useAsyncData('featured-templates', () =>
  queryCollection('templates')
    .where('featured', '=', true)
    .limit(4)
    .all()
)
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-12 tablet:gap-8 tablet:px-6 tablet:py-24">
      <!-- Section header row -->
      <div class="flex items-end justify-between border-b border-zinc-200 pb-4">
        <h2 class="text-xl leading-7 font-medium text-zinc-950 tablet:text-2xl tablet:leading-8">Framer templates</h2>
        <UiLinkButton label="See All" to="/templates/framer" />
      </div>

      <!-- Template grid -->
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
  </section>
</template>
