<script setup lang="ts">
import { PhCaretRight } from '@phosphor-icons/vue'

const route = useRoute()
const slug = route.params.slug as string

const { findBySlug, related } = useBlog()

const post = findBySlug(slug)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found',
  })
}

const relatedPosts = related(slug, 3)

useHead({
  title: `${post.title} — Stylokit Blog`,
  meta: [
    { name: 'description', content: post.description },
  ],
})
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <section class="w-full">
      <div class="mx-auto max-w-[1200px] px-4 pt-8 tablet:px-6 tablet:pt-12">
        <nav class="flex items-center gap-1.5 text-[13px] leading-5 text-zinc-400">
          <NuxtLink to="/" class="transition-colors hover:text-zinc-950">Home</NuxtLink>
          <PhCaretRight :size="12" />
          <NuxtLink to="/blog" class="transition-colors hover:text-zinc-950">Blog</NuxtLink>
          <PhCaretRight :size="12" />
          <span class="text-zinc-950">{{ post.title }}</span>
        </nav>
      </div>
    </section>

    <!-- Article Header -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[720px] flex-col items-start gap-5 px-4 pt-12 pb-8 tablet:px-6 tablet:pt-16 tablet:pb-12">
        <UiScrollReveal>
          <UiBadge :label="post.category" />
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <h1 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
            {{ post.title }}
          </h1>
        </UiScrollReveal>

        <UiScrollReveal :delay="150">
          <time class="text-[15px] leading-5 text-zinc-400">{{ post.date }}</time>
        </UiScrollReveal>

        <UiScrollReveal :delay="200">
          <p class="text-[17px] leading-6 tracking-[0.01em] text-zinc-500">
            {{ post.description }}
          </p>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Article Body -->
    <section class="w-full">
      <div class="mx-auto max-w-[720px] px-4 pb-16 tablet:px-6 tablet:pb-24">
        <UiScrollReveal>
          <!-- Featured image placeholder -->
          <div class="mb-10 aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="h-full w-full object-cover"
            />
            <div v-else class="flex h-full items-center justify-center">
              <span class="text-[15px] font-medium text-zinc-400">{{ post.category }}</span>
            </div>
          </div>

          <!-- Prose content -->
          <article class="prose-article flex flex-col gap-6">
            <p class="text-[17px] leading-7 text-zinc-600">
              In the ever-evolving world of web design, staying on top of the latest trends and tools is essential. Whether you are building a personal portfolio, launching a SaaS product, or creating an agency website, the right template can save you weeks of development time while delivering a polished, professional result.
            </p>

            <h2 class="text-xl leading-[30px] font-medium text-zinc-950 tablet:text-2xl tablet:leading-8">
              Why Templates Matter
            </h2>

            <p class="text-[17px] leading-7 text-zinc-600">
              Templates are not just shortcuts — they are starting points that encode best practices in design, layout, and user experience. A well-crafted template provides responsive layouts, optimized typography, and thoughtful component architecture that would take considerable effort to build from scratch.
            </p>

            <p class="text-[17px] leading-7 text-zinc-600">
              With platforms like Framer and Nuxt making it easier than ever to build production-ready sites, the quality bar for templates has risen significantly. Modern templates come with CMS integration, smooth animations, and pixel-perfect responsive behavior.
            </p>

            <h2 class="text-xl leading-[30px] font-medium text-zinc-950 tablet:text-2xl tablet:leading-8">
              What to Look For
            </h2>

            <p class="text-[17px] leading-7 text-zinc-600">
              When choosing a template, consider these key factors: design quality, responsiveness across devices, customization flexibility, performance optimization, and ongoing support from the creator. The best templates strike a balance between visual appeal and practical usability.
            </p>

            <ul class="flex flex-col gap-3 pl-5 text-[17px] leading-7 text-zinc-600">
              <li class="list-disc">Clean, modern design with attention to spacing and typography</li>
              <li class="list-disc">Fully responsive across desktop, tablet, and mobile</li>
              <li class="list-disc">Easy to customize colors, fonts, and content</li>
              <li class="list-disc">Optimized for performance and SEO</li>
              <li class="list-disc">Regular updates and dedicated support</li>
            </ul>

            <h2 class="text-xl leading-[30px] font-medium text-zinc-950 tablet:text-2xl tablet:leading-8">
              Getting Started
            </h2>

            <p class="text-[17px] leading-7 text-zinc-600">
              The fastest way to launch a professional website is to start with a high-quality template and customize it to match your brand. Focus on your content, messaging, and unique value proposition rather than spending weeks on layout decisions that have already been solved.
            </p>

            <p class="text-[17px] leading-7 text-zinc-600">
              Browse our collection of premium Framer and Nuxt templates to find the perfect starting point for your next project. Each template is crafted with care, tested across devices, and designed to help you launch faster.
            </p>
          </article>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Related Posts -->
    <section class="w-full border-t border-zinc-200">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-14 tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <UiSectionHeading
            title="Related Articles"
            description="Continue reading with more insights and guides."
          />
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            <UiBlogCard
              v-for="related in relatedPosts"
              :key="related.slug"
              :title="related.title"
              :description="related.description"
              :date="related.date"
              :category="related.category"
              :image="related.image"
              :to="`/blog/${related.slug}`"
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
