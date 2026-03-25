<script setup lang="ts">
import {
  PhArticle,
  PhBrowsers,
  PhCaretDown,
  PhClockCounterClockwise,
  PhFolder,
  PhGridNine,
  PhHandshake,
  PhLightning,
  PhList,
  PhPuzzlePiece,
  PhX,
  PhHouse,
  PhHeart,
  PhStar,
  PhUser,
  PhGear,
  PhBell,
  PhChat,
  PhEnvelope,
  PhMagnifyingGlass,
  PhCamera,
  PhMusic,
  PhMapPin,
  PhCalendar,
  PhShoppingCart,
  PhBookmark,
} from '@phosphor-icons/vue'

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
        <NuxtLink to="/" class="mr-auto flex items-center gap-2">
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950">
            <PhLightning :size="16" weight="fill" class="text-white" />
          </div>
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
              <PhCaretDown
                :size="14"
                weight="bold"
                class="text-zinc-800 transition-transform duration-200"
                :class="activeDropdown === 'products' ? 'rotate-180' : ''"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 scale-[0.98] opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 scale-100 opacity-100"
              leave-to-class="translate-y-1 scale-[0.98] opacity-0"
            >
              <div
                v-if="activeDropdown === 'products'"
                class="absolute top-full -left-32 z-50 w-[420px] pt-3"
              >
                <div
                  class="rounded-xl border border-zinc-200/80 bg-white p-2 shadow-xl shadow-zinc-900/10"
                >
                  <div class="grid grid-cols-2 gap-1.5">
                  <!-- Templates card -->
                  <NuxtLink
                    to="/templates"
                    class="group rounded-lg p-2.5 transition-colors hover:bg-zinc-50"
                    @click="closeDropdowns"
                  >
                    <div class="mb-2 flex items-center gap-2">
                      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50">
                        <PhBrowsers :size="18" weight="duotone" class="text-purple-600" />
                      </div>
                      <span class="text-[14px] font-medium text-zinc-900">Templates</span>
                      <span class="rounded-full bg-neo-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-zinc-950">New</span>
                    </div>
                    <div class="overflow-hidden rounded-md border border-zinc-100">
                      <img
                        src="/images/templates/stickify.webp"
                        alt="Templates preview"
                        class="h-[90px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </NuxtLink>

                  <!-- Components card -->
                  <NuxtLink
                    to="/components"
                    class="group rounded-lg p-2.5 transition-colors hover:bg-zinc-50"
                    @click="closeDropdowns"
                  >
                    <div class="mb-2 flex items-center gap-2">
                      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                        <PhPuzzlePiece :size="18" weight="duotone" class="text-blue-600" />
                      </div>
                      <span class="text-[14px] font-medium text-zinc-900">Components</span>
                      <span class="rounded-full bg-neo-500 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-zinc-950">New</span>
                    </div>
                    <div class="overflow-hidden rounded-md border border-zinc-100">
                      <img
                        src="/images/templates/3d-parallax-tilt.png"
                        alt="Components preview"
                        class="h-[90px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </NuxtLink>

                  <!-- Icon set card -->
                  <NuxtLink
                    to="/icon-set"
                    class="group rounded-lg p-2.5 transition-colors hover:bg-zinc-50"
                    @click="closeDropdowns"
                  >
                    <div class="mb-2 flex items-center gap-2">
                      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                        <PhGridNine :size="18" weight="duotone" class="text-amber-600" />
                      </div>
                      <span class="text-[14px] font-medium text-zinc-900">Icon set</span>
                      <span class="rounded-full bg-orange-50 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-orange-600">New update</span>
                    </div>
                    <div class="grid grid-cols-4 gap-1.5 rounded-md border border-zinc-100 bg-zinc-50 p-2.5">
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhHouse :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhHeart :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhStar :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhUser :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhGear :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhBell :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhChat :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                      <div class="flex items-center justify-center rounded bg-white p-1.5">
                        <PhEnvelope :size="14" weight="duotone" class="text-zinc-500" />
                      </div>
                    </div>
                  </NuxtLink>

                  <!-- UI Kits card (disabled) -->
                  <div class="cursor-not-allowed rounded-lg p-2.5 opacity-50">
                    <div class="mb-2 flex items-center gap-2">
                      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                        <PhFolder :size="18" weight="duotone" class="text-zinc-400" />
                      </div>
                      <span class="text-[14px] font-medium text-zinc-400">UI Kits</span>
                      <span class="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium leading-none text-zinc-400">Soon</span>
                    </div>
                    <div class="flex h-[60px] items-center justify-center rounded-md border border-dashed border-zinc-200 bg-zinc-50">
                      <span class="text-[12px] text-zinc-300">Coming soon</span>
                    </div>
                  </div>
                </div>
                </div>
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
              <PhCaretDown
                :size="14"
                weight="bold"
                class="text-zinc-800 transition-transform duration-200"
                :class="activeDropdown === 'resources' ? 'rotate-180' : ''"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 scale-[0.98] opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 scale-100 opacity-100"
              leave-to-class="translate-y-1 scale-[0.98] opacity-0"
            >
              <div
                v-if="activeDropdown === 'resources'"
                class="absolute top-full -left-6 z-50 w-[200px] pt-3"
              >
                <div
                  class="rounded-xl border border-zinc-200/80 bg-white p-1.5 shadow-xl shadow-zinc-900/10"
                >
                <NuxtLink
                  to="/blog"
                  class="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  @click="closeDropdowns"
                >
                  <PhArticle :size="18" weight="duotone" class="text-zinc-400" />
                  Blog
                </NuxtLink>
                <NuxtLink
                  to="/affiliate"
                  class="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  @click="closeDropdowns"
                >
                  <PhHandshake :size="18" weight="duotone" class="text-zinc-400" />
                  Affiliates
                </NuxtLink>
                <NuxtLink
                  to="/changelog"
                  class="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[14px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
                  @click="closeDropdowns"
                >
                  <PhClockCounterClockwise :size="18" weight="duotone" class="text-zinc-400" />
                  Changelog
                </NuxtLink>
                </div>
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
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950">
            <PhLightning :size="16" weight="fill" class="text-white" />
          </div>
          <span class="text-xl font-semibold tracking-[-0.02em] text-zinc-950">Stylokit</span>
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
