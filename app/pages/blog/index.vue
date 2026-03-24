<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'

useHead({
  title: 'Blog — Expert Tips and Inspiration for Framer Designers | Stylokit',
  meta: [
    { name: 'description', content: 'Actionable tips, tools, and ideas to improve your design workflow and website quality.' },
  ],
})

const { featured, all } = useBlog()

const featuredPosts = featured()
const latestPosts = all()
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-4 pt-16 pb-12 text-center tablet:px-6 tablet:pt-24 tablet:pb-16">
        <UiScrollReveal>
          <UiBadge label="Insights & Inspiration" />
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <h1 class="max-w-[680px] text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
            Expert Tips and Inspiration for Framer Designers
          </h1>
        </UiScrollReveal>

        <UiScrollReveal :delay="200">
          <p class="max-w-[560px] text-[15px] leading-[22px] tracking-[0.01em] text-zinc-500 tablet:text-[17px] tablet:leading-6">
            Actionable tips, tools, and ideas to improve your design workflow and website quality.
          </p>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Featured Posts -->
    <section class="w-full">
      <div class="mx-auto max-w-[1200px] px-4 pb-12 tablet:px-6 tablet:pb-16">
        <UiScrollReveal>
          <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2">
            <NuxtLink
              v-for="post in featuredPosts"
              :key="post.slug"
              :to="`/blog/${post.slug}`"
              class="group flex flex-col gap-4"
            >
              <div class="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                <img
                  v-if="post.image"
                  :src="post.image"
                  :alt="post.title"
                  class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-[15px] font-medium text-zinc-400">{{ post.category }}</span>
                </div>
                <div class="absolute bottom-3 left-3 flex items-center gap-2">
                  <span class="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-zinc-950 shadow-sm">
                    {{ post.date }}
                  </span>
                  <span class="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-zinc-950 shadow-sm">
                    {{ post.category }}
                  </span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h2 class="text-xl leading-[30px] font-medium text-zinc-950 transition-colors group-hover:text-zinc-600 tablet:text-2xl tablet:leading-8">
                  {{ post.title }}
                </h2>
                <p class="text-[15px] leading-[22px] tracking-[0.01em] text-zinc-500 tablet:text-[17px] tablet:leading-6">
                  {{ post.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Latest Articles Section -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-14 tablet:px-6 tablet:py-16">
        <UiScrollReveal>
          <UiSectionHeading
            title="Latest Articles & Guides"
            description="Stay informed with the latest guides and news."
          />
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            <UiBlogCard
              v-for="post in latestPosts"
              :key="post.slug"
              :title="post.title"
              :description="post.description"
              :date="post.date"
              :category="post.category"
              :image="post.image"
              :to="`/blog/${post.slug}`"
            />
          </div>
        </UiScrollReveal>
      </div>
    </section>

    <!-- CTA Section -->
    <UiScrollReveal>
      <SectionsCtaSection />
    </UiScrollReveal>
  </div>
</template>
