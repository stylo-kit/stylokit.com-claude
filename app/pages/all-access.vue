<script setup lang="ts">
import {
  PhPackage,
  PhRecycle,
  PhInfinity,
  PhClock,
  PhArrowsClockwise,
  PhHeadset,
} from '@phosphor-icons/vue'

// Light theme (default layout)

useHead({ title: 'All Access — Stylokit' })

useSeoMeta({
  description: 'Gain full access to all current and future Stylokit Framer templates with one purchase. Build faster, design smarter.',
  ogTitle: 'All Access — Stylokit',
  ogDescription: 'Gain full access to all current and future Stylokit Framer templates with one purchase.',
})

const platforms = ['Framer', 'Nuxt', 'Figma'] as const

const features = [
  'Lifetime access',
  'Framer templates',
  'Nuxt templates',
  'Figma files',
  'Framer components',
  'Icon set',
  'UI Kits (Coming soon)',
  'Use in unlimited projects',
  'Support',
] as const

interface PricingTier {
  name: string
  price: number
  originalPrice?: number
  description: string
  licenseLabel: string
  ctaLink: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Pro',
    price: 499,
    originalPrice: 1163,
    description: 'Perfect for individual use',
    licenseLabel: 'License for one user',
    ctaLink: 'https://stylokit.lemonsqueezy.com/buy/265049f0-82e4-4a73-b847-78b7d43e1c1c',
  },
  {
    name: 'Team',
    price: 899,
    originalPrice: 5111,
    description: 'Ideal for small groups',
    licenseLabel: 'License for up to 5 users',
    ctaLink: 'https://stylokit.lemonsqueezy.com/buy/3e3cec15-ad8f-468e-b91f-cdb1eed7bd1c',
  },
  {
    name: 'Unlimited',
    price: 1199,
    description: 'Ideal for large groups',
    licenseLabel: 'License for unlimited users',
    ctaLink: 'https://stylokit.lemonsqueezy.com/buy/ca67e7f1-04b3-4400-a1d9-37e7e9df2a1f',
  },
]

interface IncludedItem {
  icon: typeof PhPackage
  title: string
  description: string
}

const includedItems: IncludedItem[] = [
  {
    icon: PhPackage,
    title: 'All products',
    description: 'Gain access to our entire collection of Framer & Nuxt templates, ensuring you have everything you need for your projects.',
  },
  {
    icon: PhRecycle,
    title: 'No Subscription Required',
    description: 'Enjoy full access to the bundle without any recurring fees or subscriptions, giving you freedom and flexibility.',
  },
  {
    icon: PhInfinity,
    title: 'Unlimited Projects',
    description: 'Use the templates for as many projects as you like, allowing you to unleash your creativity without constraints.',
  },
  {
    icon: PhClock,
    title: 'Lifetime Access',
    description: 'Get lifetime access to the bundle, ensuring you can use the templates whenever you need them, for as long as you need them.',
  },
  {
    icon: PhArrowsClockwise,
    title: 'Free Updates',
    description: 'Receive free updates for all included products, ensuring they remain current and compatible with the latest software versions.',
  },
  {
    icon: PhHeadset,
    title: 'Support',
    description: 'Access dedicated support to assist you with any questions or issues you may encounter while using the templates, ensuring a smooth experience.',
  },
]
</script>

<template>
  <div>
    <!-- Section 1: Pricing Hero -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 pt-16 text-center tablet:px-6 tablet:pt-24">
        <UiScrollReveal>
          <h1 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
            All Stylokit <span class="text-zinc-400">products in one pass</span>
          </h1>
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <p class="max-w-[560px] text-[15px] leading-[22px] text-zinc-500 tablet:text-[17px] tablet:leading-6">
            Gain full access to all current and future Stylokit Framer templates with one purchase. Build faster, design smarter.
          </p>
        </UiScrollReveal>

        <UiScrollReveal :delay="200">
          <div class="flex items-center gap-3">
            <span
              v-for="platform in platforms"
              :key="platform"
              class="flex items-center gap-1.5 text-sm font-medium text-zinc-700"
            >
              {{ platform }}
            </span>
          </div>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Section 2: Pricing Cards -->
    <section class="w-full">
      <div class="mx-auto max-w-[1400px] px-4 py-12 tablet:px-6 tablet:py-16">
        <UiScrollReveal>
          <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
            <CardsPricingCard
              v-for="tier in pricingTiers"
              :key="tier.name"
              :name="tier.name"
              :price="tier.price"
              :original-price="tier.originalPrice"
              :description="tier.description"
              :license-label="tier.licenseLabel"
              :features="[...features]"
              :cta-link="tier.ctaLink"
              :dark="tier.name === 'Unlimited'"
            />
          </div>
        </UiScrollReveal>

        <!-- Secure payment -->
        <UiScrollReveal :delay="100">
          <p class="mt-8 text-center text-[15px] leading-5 text-zinc-500">
            Secure Payment via
            <a
              href="https://www.lemonsqueezy.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-zinc-600 underline underline-offset-2 transition-colors hover:text-zinc-950"
            >
              Lemon Squeezy
            </a>
          </p>
        </UiScrollReveal>
      </div>
    </section>

    <!-- Section 3: What's Included -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 py-12 tablet:gap-12 tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <h2 class="text-center text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
            What's included
          </h2>
        </UiScrollReveal>

        <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          <UiScrollReveal
            v-for="(item, index) in includedItems"
            :key="item.title"
            :delay="index * 80"
          >
            <div class="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-6 tablet:p-8">
              <component
                :is="item.icon"
                :size="24"
                weight="duotone"
                class="text-neo-600"
              />
              <h3 class="text-[17px] leading-6 font-medium text-zinc-950">
                {{ item.title }}
              </h3>
              <p class="text-[15px] leading-[22px] text-zinc-500">
                {{ item.description }}
              </p>
            </div>
          </UiScrollReveal>
        </div>
      </div>
    </section>

    <!-- Section 4: Testimonials -->
    <UiScrollReveal>
      <SectionsTestimonialsSection />
    </UiScrollReveal>
  </div>
</template>
