<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <section class="w-full bg-zinc-950">
    <div class="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-16 text-center tablet:px-6 tablet:py-24">
      <!-- Heading -->
      <h2 class="text-2xl leading-8 font-semibold text-white tablet:text-[36px] tablet:leading-[44px]">
        <span class="text-main-blue">One Payment.</span> Lifetime Access.
      </h2>

      <!-- Description -->
      <p class="max-w-[560px] text-[15px] leading-[22px] text-zinc-400 tablet:text-[17px] tablet:leading-6">
        Unlock every Stylokit template — present and future — with a single purchase. No subscriptions, no limits. Just clean, high-converting designs built for speed.
      </p>

      <!-- Mockup: Framer editor style panel -->
      <div class="mt-4 w-full max-w-[800px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <div class="flex flex-col tablet:flex-row">
          <!-- Left: Framer-style sidebar -->
          <div class="flex flex-col border-b border-zinc-800 p-4 tablet:w-[200px] tablet:border-r tablet:border-b-0">
            <div class="mb-3 flex items-center gap-2">
              <div class="h-6 w-6 rounded-md bg-purple-600" />
              <div>
                <p class="text-xs font-medium text-white">Stylokit</p>
                <p class="text-[10px] text-zinc-500">stylokit.com</p>
              </div>
            </div>
            <div class="flex flex-col gap-1 text-xs text-zinc-400">
              <div class="flex gap-3 border-b border-zinc-800 pb-2 mb-2">
                <span class="text-white">Pages</span>
                <span>Layers</span>
                <span>Assets</span>
              </div>
              <div class="flex flex-col gap-1.5">
                <span class="text-white">Home</span>
                <span>Search</span>
              </div>
            </div>
          </div>

          <!-- Center: Canvas area -->
          <div class="flex flex-1 flex-col">
            <!-- Top bar -->
            <div class="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
              <div class="flex gap-2 text-[10px] text-zinc-500">
                <span class="text-white">Desktop</span>
                <span>Tablet</span>
                <span>Phone</span>
              </div>
              <div class="flex gap-2 text-[10px]">
                <span class="text-zinc-500">Insert</span>
                <span class="text-zinc-500">Layout</span>
                <span class="text-zinc-500">Text</span>
              </div>
            </div>
            <!-- Canvas content -->
            <div class="flex items-center justify-center px-4 py-8 tablet:py-12">
              <NuxtLink
                to="/all-access"
                class="inline-flex items-center gap-2 rounded-lg bg-neo-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-neo-400"
              >
                All Access - $499
                <PhArrowRight :size="14" weight="bold" />
              </NuxtLink>
            </div>
            <p class="pb-4 text-center text-xs text-zinc-500">Lifetime access. No subscriptions.</p>
          </div>

          <!-- Right: Properties panel -->
          <div class="hidden border-t border-zinc-800 p-4 text-[10px] text-zinc-500 tablet:block tablet:w-[180px] tablet:border-t-0 tablet:border-l">
            <div class="flex flex-col gap-2">
              <div class="flex justify-between"><span>Position</span><span class="text-zinc-400">Relative</span></div>
              <div class="flex justify-between"><span>Width</span><span class="text-zinc-400">1fr</span></div>
              <div class="flex justify-between"><span>Height</span><span class="text-zinc-400">800</span></div>
              <div class="flex justify-between"><span>Overflow</span><span class="text-zinc-400">Hidden</span></div>
              <div class="flex justify-between"><span>Radius</span><span class="text-zinc-400">—</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
