<script setup lang="ts">
import {
  PhHandshake,
  PhCurrencyDollar,
  PhChartLineUp,
  PhLink,
  PhUsers,
  PhRocket,
  PhCheckCircle,
} from '@phosphor-icons/vue'

useHead({ title: 'Affiliate Program — Stylokit' })

useSeoMeta({
  description: 'Earn 30% commission on every sale you refer. Join the Stylokit affiliate program and start earning by sharing premium Framer, Nuxt & Figma templates.',
  ogTitle: 'Affiliate Program — Stylokit',
  ogDescription: 'Earn 30% commission on every sale you refer. Join the Stylokit affiliate program today.',
})

const steps = [
  {
    step: '01',
    icon: PhLink,
    iconColor: 'text-purple-500',
    title: 'Get Your Unique Link',
    description: 'Sign up for our affiliate program through Lemon Squeezy and receive your personalized referral link in minutes.',
  },
  {
    step: '02',
    icon: PhUsers,
    iconColor: 'text-main-blue',
    title: 'Share With Your Audience',
    description: 'Share your link on your website, social media, newsletter, YouTube channel, or anywhere your audience hangs out.',
  },
  {
    step: '03',
    icon: PhCurrencyDollar,
    iconColor: 'text-neo-600',
    title: 'Earn Commission',
    description: 'Earn 30% commission on every sale made through your referral link. Payments are processed automatically.',
  },
]

const benefits = [
  {
    icon: PhChartLineUp,
    title: '30% Commission',
    description: 'Earn a generous 30% commission on every successful referral — one of the highest rates in the template industry.',
  },
  {
    icon: PhHandshake,
    title: '60-Day Cookie Window',
    description: 'Our 60-day cookie duration gives your referrals plenty of time to convert, so you get credited for the sale.',
  },
  {
    icon: PhCurrencyDollar,
    title: 'Monthly Payouts',
    description: 'Get paid every month directly to your account. No minimum threshold — if you earned it, you get it.',
  },
  {
    icon: PhRocket,
    title: 'High-Converting Products',
    description: 'Promote premium, well-designed templates that people actually want to buy. Higher conversions mean more earnings for you.',
  },
]

const idealFor = [
  'Web designers & developers',
  'YouTube creators & content creators',
  'Newsletter writers & bloggers',
  'No-code & Framer educators',
  'Design communities & influencers',
  'Freelancers & agencies',
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 pt-16 text-center tablet:px-6 tablet:pt-24">
        <UiScrollReveal>
          <UiBadge label="Affiliate Program" />
        </UiScrollReveal>

        <UiScrollReveal :delay="80">
          <h1 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
            Earn 30% on every sale
          </h1>
        </UiScrollReveal>

        <UiScrollReveal :delay="160">
          <p class="max-w-[560px] text-[15px] leading-[22px] text-zinc-500 tablet:text-[17px] tablet:leading-6">
            Join the Stylokit affiliate program and earn a commission for every customer you refer. Share premium templates, earn real money.
          </p>
        </UiScrollReveal>

        <UiScrollReveal :delay="240">
          <UiAppButton
            label="Become an Affiliate"
            href="https://stylokit.lemonsqueezy.com/affiliates"
            icon="arrow-right"
            variant="neo"
            size="lg"
            :external="true"
          />
        </UiScrollReveal>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-12 tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <UiSectionHeading
            title="How it works"
            description="Three simple steps to start earning with Stylokit."
          />
        </UiScrollReveal>

        <div class="grid grid-cols-1 gap-6 tablet:grid-cols-3">
          <UiScrollReveal
            v-for="(item, index) in steps"
            :key="item.title"
            :delay="index * 100"
          >
            <div class="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 tablet:p-8">
              <div class="flex items-center gap-3">
                <span class="text-[15px] font-medium text-zinc-300">{{ item.step }}</span>
                <component
                  :is="item.icon"
                  :size="24"
                  weight="duotone"
                  :class="item.iconColor"
                />
              </div>
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

    <!-- Benefits Section -->
    <section class="w-full bg-zinc-50">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-12 tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <UiSectionHeading
            title="Why join Stylokit affiliates"
            description="We offer one of the most generous affiliate programs in the template space."
          />
        </UiScrollReveal>

        <div class="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          <UiScrollReveal
            v-for="(benefit, index) in benefits"
            :key="benefit.title"
            :delay="index * 80"
          >
            <div class="flex gap-4 rounded-2xl bg-white p-6 tablet:p-8">
              <component
                :is="benefit.icon"
                :size="24"
                weight="duotone"
                class="shrink-0 text-purple-500"
              />
              <div class="flex flex-col gap-2">
                <h3 class="text-[17px] leading-6 font-medium text-zinc-950">
                  {{ benefit.title }}
                </h3>
                <p class="text-[15px] leading-[22px] text-zinc-500">
                  {{ benefit.description }}
                </p>
              </div>
            </div>
          </UiScrollReveal>
        </div>
      </div>
    </section>

    <!-- Ideal For Section -->
    <section class="w-full">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-12 tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <UiSectionHeading
            title="Ideal for"
            description="Whether you have a large following or a niche audience, our affiliate program is for you."
          />
        </UiScrollReveal>

        <UiScrollReveal :delay="100">
          <div class="mx-auto grid max-w-[800px] grid-cols-1 gap-4 tablet:grid-cols-2">
            <div
              v-for="item in idealFor"
              :key="item"
              class="flex items-center gap-3 rounded-xl border border-zinc-200 px-5 py-4"
            >
              <PhCheckCircle :size="20" weight="duotone" class="shrink-0 text-neo-600" />
              <span class="text-[15px] leading-5 font-medium text-zinc-950">{{ item }}</span>
            </div>
          </div>
        </UiScrollReveal>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="w-full bg-zinc-50">
      <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 py-16 text-center tablet:px-6 tablet:py-24">
        <UiScrollReveal>
          <h2 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
            Ready to start earning?
          </h2>
        </UiScrollReveal>

        <UiScrollReveal :delay="80">
          <p class="max-w-[560px] text-[15px] leading-[22px] text-zinc-500 tablet:text-[17px] tablet:leading-6">
            Join the Stylokit affiliate program today and earn 30% commission on every sale you refer. It's free to join and takes just a few minutes to set up.
          </p>
        </UiScrollReveal>

        <UiScrollReveal :delay="160">
          <UiAppButton
            label="Join Affiliate Program"
            href="https://stylokit.lemonsqueezy.com/affiliates"
            icon="arrow-right"
            variant="neo"
            size="lg"
            :external="true"
          />
        </UiScrollReveal>
      </div>
    </section>
  </div>
</template>
