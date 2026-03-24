<script setup lang="ts">
import { PhCaretDown, PhLightning, PhList, PhX } from '@phosphor-icons/vue'

const isMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

const productLinks = [
  { label: 'Framer Templates', to: '/templates/framer' },
  { label: 'Nuxt Templates', to: '/templates/nuxt' },
  { label: 'Freebies', to: '/templates/freebies' },
  { label: 'Components', to: '/components' },
  { label: 'Icon Set', to: '/icon-set' },
]

const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'Affiliate', to: '/affiliate' },
]

function toggleDropdown(name: string) {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function closeDropdowns() {
  activeDropdown.value = null
}
</script>

<template>
  <header class="fixed top-0 right-0 left-0 z-50 w-full bg-zinc-950 pt-2">
    <div class="rounded-t-[40px] bg-white">
      <!-- Desktop nav -->
      <nav class="mx-auto hidden max-w-[1200px] items-center gap-6 px-6 py-4 tablet:flex">
        <!-- Logo -->
        <NuxtLink to="/" class="mr-auto flex items-center">
          <span class="text-xl font-semibold tracking-[-0.02em] text-zinc-950">Stylokit</span>
        </NuxtLink>

        <!-- Center links -->
        <div class="flex items-center gap-6">
          <NuxtLink to="/" class="text-[15px] leading-6 font-medium text-zinc-800 transition-colors hover:text-zinc-950">
            Home
          </NuxtLink>

          <!-- Products dropdown -->
          <div class="relative" @mouseleave="closeDropdowns">
            <button
              class="flex items-center gap-1 text-[15px] leading-6 font-medium text-zinc-800 transition-colors hover:text-zinc-950"
              @mouseenter="toggleDropdown('products')"
            >
              Products
              <PhCaretDown :size="14" weight="bold" class="text-zinc-800" />
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-95 opacity-0"
            >
              <div
                v-if="activeDropdown === 'products'"
                class="absolute top-full left-0 z-50 mt-2 w-[200px] rounded-lg border border-zinc-100 bg-white p-1 shadow-lg"
              >
                <NuxtLink
                  v-for="link in productLinks"
                  :key="link.to"
                  :to="link.to"
                  class="block rounded-md px-3 py-2 text-[15px] leading-5 tracking-[0.3px] text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  @click="closeDropdowns"
                >
                  {{ link.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/blog" class="text-[15px] leading-6 font-medium text-zinc-800 transition-colors hover:text-zinc-950">
            Blog
          </NuxtLink>

          <!-- Resources dropdown -->
          <div class="relative" @mouseleave="closeDropdowns">
            <button
              class="flex items-center gap-1 text-[15px] leading-6 font-medium text-zinc-800 transition-colors hover:text-zinc-950"
              @mouseenter="toggleDropdown('resources')"
            >
              Resources
              <PhCaretDown :size="14" weight="bold" class="text-zinc-800" />
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-95 opacity-0"
            >
              <div
                v-if="activeDropdown === 'resources'"
                class="absolute top-full left-0 z-50 mt-2 w-[200px] rounded-lg border border-zinc-100 bg-white p-1 shadow-lg"
              >
                <NuxtLink
                  v-for="link in resourceLinks"
                  :key="link.to"
                  :to="link.to"
                  class="block rounded-md px-3 py-2 text-[15px] leading-5 tracking-[0.3px] text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  @click="closeDropdowns"
                >
                  {{ link.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA button -->
        <NuxtLink
          to="/all-access"
          class="ml-auto flex items-center gap-2 rounded-md border border-zinc-950 bg-zinc-900 px-3.5 py-2 text-[15px] leading-5 font-semibold text-white transition-colors hover:bg-zinc-800"
        >
          <PhLightning :size="16" weight="duotone" class="text-white" />
          All Access — $499
        </NuxtLink>
      </nav>

      <!-- Mobile nav -->
      <nav class="flex items-center justify-between px-4 py-4 tablet:hidden">
        <NuxtLink to="/" class="text-xl font-semibold tracking-[-0.02em] text-zinc-950">
          Stylokit
        </NuxtLink>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-md text-zinc-700"
          @click="isMenuOpen = !isMenuOpen"
        >
          <PhX v-if="isMenuOpen" :size="24" weight="bold" />
          <PhList v-else :size="24" weight="bold" />
        </button>
      </nav>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div v-if="isMenuOpen" class="border-t border-zinc-100 px-4 pb-6 tablet:hidden">
          <div class="flex flex-col gap-1 py-2">
            <NuxtLink to="/" class="rounded-md px-3 py-2.5 text-[15px] font-medium text-zinc-800 hover:bg-zinc-50" @click="isMenuOpen = false">
              Home
            </NuxtLink>

            <!-- Products section -->
            <button
              class="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[15px] font-medium text-zinc-800 hover:bg-zinc-50"
              @click="toggleDropdown('m-products')"
            >
              Products
              <PhCaretDown :size="14" weight="bold" :class="activeDropdown === 'm-products' ? 'rotate-180' : ''" class="transition-transform" />
            </button>
            <div v-if="activeDropdown === 'm-products'" class="flex flex-col gap-1 rounded-md bg-zinc-50 px-6 py-2">
              <NuxtLink
                v-for="link in productLinks"
                :key="link.to"
                :to="link.to"
                class="py-2 text-[15px] leading-5 tracking-[0.3px] text-zinc-600 hover:text-zinc-950"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </div>

            <NuxtLink to="/blog" class="rounded-md px-3 py-2.5 text-[15px] font-medium text-zinc-800 hover:bg-zinc-50" @click="isMenuOpen = false">
              Blog
            </NuxtLink>

            <!-- Resources section -->
            <button
              class="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[15px] font-medium text-zinc-800 hover:bg-zinc-50"
              @click="toggleDropdown('m-resources')"
            >
              Resources
              <PhCaretDown :size="14" weight="bold" :class="activeDropdown === 'm-resources' ? 'rotate-180' : ''" class="transition-transform" />
            </button>
            <div v-if="activeDropdown === 'm-resources'" class="flex flex-col gap-1 rounded-md bg-zinc-50 px-6 py-2">
              <NuxtLink
                v-for="link in resourceLinks"
                :key="link.to"
                :to="link.to"
                class="py-2 text-[15px] leading-5 tracking-[0.3px] text-zinc-600 hover:text-zinc-950"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile CTA -->
          <NuxtLink
            to="/all-access"
            class="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-zinc-950 bg-zinc-900 px-4 py-2.5 text-[15px] font-semibold text-white"
            @click="isMenuOpen = false"
          >
            <PhLightning :size="16" weight="duotone" />
            All Access — $499
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>
