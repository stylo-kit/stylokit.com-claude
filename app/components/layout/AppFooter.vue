<script setup lang="ts">
const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'Templates', to: '/templates' },
  { label: 'Components', to: '/components' },
  { label: 'Icon Set', to: '/icon-set' },
  { label: 'All Access', to: '/all-access' },
]

const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Affiliate (Earn 30%)', to: '/affiliate' },
  { label: 'Changelog', to: '/changelog' },
]

const legalLinks = [
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'License', to: '/license' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full bg-main-blue">
    <div class="rounded-b-[40px] bg-white">
      <div class="mx-auto max-w-[1200px] px-4 py-12 tablet:px-6 tablet:py-24">
        <!-- CTA block -->
        <div class="flex flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center tablet:rounded-[32px] tablet:px-24 tablet:py-16" style="background-color: rgb(0, 154, 255)">
          <h2 class="text-2xl leading-8 font-semibold text-white tablet:text-[36px] tablet:leading-[44px]">
            One Payment. Lifetime Access.
          </h2>
          <p class="max-w-full text-[15px] leading-5 text-white/70 tablet:max-w-[480px] tablet:text-xl tablet:leading-[30px] tablet:tracking-[-0.01em]">
            Get every template we've made — and every one we'll ever make. No subscriptions. No renewals.
          </p>
          <NuxtLink
            to="/all-access"
            class="mt-2 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[15px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-100"
          >
            Get All Access — $499
          </NuxtLink>
        </div>

        <!-- Footer links -->
        <div class="mt-12 grid grid-cols-1 gap-8 tablet:mt-24 tablet:grid-cols-5 tablet:gap-8">
          <!-- Brand column -->
          <div class="tablet:col-span-2">
            <NuxtLink to="/" class="text-xl font-semibold tracking-[-0.02em] text-zinc-950">
              Stylokit
            </NuxtLink>
            <p class="mt-3 text-[15px] leading-5 tracking-[0.3px] text-zinc-500">
              Premium Framer, Nuxt & Figma templates for modern creators.
            </p>
          </div>

          <!-- Explore column -->
          <div>
            <h3 class="text-[15px] leading-6 font-medium text-zinc-950">Explore</h3>
            <ul class="mt-4 flex flex-col gap-3">
              <li v-for="link in exploreLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-[15px] leading-5 tracking-[0.3px] text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Resources column -->
          <div>
            <h3 class="text-[15px] leading-6 font-medium text-zinc-950">Resources</h3>
            <ul class="mt-4 flex flex-col gap-3">
              <li v-for="link in resourceLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-[15px] leading-5 tracking-[0.3px] text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal column -->
          <div>
            <h3 class="text-[15px] leading-6 font-medium text-zinc-950">Legal</h3>
            <ul class="mt-4 flex flex-col gap-3">
              <li v-for="link in legalLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-[15px] leading-5 tracking-[0.3px] text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright bar (on blue background) -->
    <div class="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-6 tablet:flex-row">
      <p class="text-[15px] leading-5 tracking-[0.3px] text-white/60">
        &copy; {{ currentYear }} Stylokit INC. All rights reserved.
      </p>
      <p class="text-[15px] leading-5 tracking-[0.3px] text-white/60">
        Made by @dmytri in Framer
      </p>
    </div>
  </footer>
</template>
