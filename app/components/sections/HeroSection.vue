<script setup lang="ts">
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <!-- Blue diagonal light ray streaks -->
    <div class="pointer-events-none absolute top-[280px] -left-[100px] z-0 -rotate-[18deg]">
      <div class="h-[3px] w-[900px] rounded-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <div class="mt-[6px] h-[2px] w-[850px] rounded-full bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
      <div class="mt-[8px] h-[4px] w-[950px] rounded-full bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />
      <div class="mt-[5px] h-[2px] w-[800px] rounded-full bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
      <div class="mt-[10px] h-[3px] w-[880px] rounded-full bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
    </div>
    <!-- Subtle glow behind the rays -->
    <div
      class="pointer-events-none absolute top-[250px] -left-[100px] z-0 h-[120px] w-[700px] -rotate-[18deg] opacity-[0.08]"
      style="background: radial-gradient(ellipse at center, rgba(0,154,255,0.8) 0%, transparent 70%); filter: blur(20px)"
    />

    <!-- Hero text content -->
    <div class="relative z-10 mx-auto max-w-[1200px] px-4 pt-12 tablet:px-6 tablet:pt-24">
      <div class="flex max-w-[660px] flex-col items-start gap-3 tablet:gap-4">
        <UiBadge label="No-Code Friendly" variant="border" />
        <h1 class="text-[28px] leading-[36px] font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
          Premium framer templates for
          <span class="text-zinc-300">Agencies and creators</span>
        </h1>
        <p class="max-w-[560px] text-[15px] leading-5 text-zinc-500 tablet:text-xl tablet:leading-[30px] tablet:tracking-[-0.01em]">
          Curated Framer templates for agencies, freelancers, and startups — built for speed and clean structure.
        </p>
      </div>

      <!-- CTA -->
      <div class="mt-6 flex flex-col items-start gap-4 tablet:mt-8">
        <UiAppButton
          label="All Access — $499"
          to="/all-access"
          icon="lightning"
          variant="gray"
          size="md"
        />
        <p class="text-[15px] leading-5 tracking-[0.3px] text-zinc-400">
          Lifetime access. No subscriptions.
        </p>
      </div>
    </div>

    <!-- Framer editor mockup - large, with perspective -->
    <div class="relative z-10 mx-auto mt-8 max-w-[1400px] px-4 pb-8 tablet:mt-4 tablet:px-6 tablet:pb-16">
      <div
        class="relative mx-auto w-full"
        style="perspective: 1800px"
      >
        <div
          class="relative overflow-hidden rounded-xl border border-zinc-200/60 bg-white shadow-2xl shadow-zinc-900/8"
          style="transform: rotateX(2deg) rotateY(0deg); transform-origin: center top"
        >
          <!-- Top toolbar row: Framer logo, Insert, Layout, Text, CMS ... Sign in, Get App -->
          <div class="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-2">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <svg class="h-5 w-5 text-zinc-950" viewBox="0 0 24 24" fill="currentColor"><path d="M4 0h16v8h-8v8H4V0zm0 16h8v8L4 16z" /></svg>
                <span class="text-xs text-zinc-400">v</span>
              </div>
              <div class="flex items-center gap-1">
                <span class="flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium text-zinc-600">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                  Insert
                </span>
                <span class="flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium text-zinc-600">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  Layout
                </span>
                <span class="flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium text-zinc-600">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h10" /></svg>
                  Text
                </span>
                <span class="flex items-center gap-1.5 rounded px-2.5 py-1 text-[12px] font-medium text-zinc-600">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" /></svg>
                  CMS
                </span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="rounded-md border border-zinc-200 bg-white px-3 py-1 text-[12px] font-medium text-zinc-600">Sign in</span>
              <span class="rounded-md bg-zinc-950 px-3 py-1 text-[12px] font-medium text-white">Get App</span>
            </div>
          </div>

          <!-- Canvas breakpoint bar -->
          <div class="flex items-center gap-3 border-b border-zinc-100 bg-white px-4 py-1.5">
            <div class="flex items-center gap-1.5">
              <div class="h-3 w-3 rounded-sm bg-blue-500" />
              <span class="text-[11px] font-medium text-zinc-700">Desktop</span>
              <span class="text-[11px] text-zinc-400">1440</span>
            </div>
          </div>

          <!-- Main editor area: sidebar + canvas + properties -->
          <div class="flex" style="height: 420px">
            <!-- Left sidebar -->
            <div class="hidden w-[220px] shrink-0 flex-col border-r border-zinc-100 bg-zinc-50/50 tablet:flex">
              <!-- Tabs -->
              <div class="flex border-b border-zinc-100">
                <button class="flex-1 border-b-2 border-transparent px-3 py-2 text-[11px] font-medium text-zinc-400">Pages</button>
                <button class="flex-1 border-b-2 border-zinc-950 px-3 py-2 text-[11px] font-medium text-zinc-950">Layers</button>
                <button class="flex-1 border-b-2 border-transparent px-3 py-2 text-[11px] font-medium text-zinc-400">Assets</button>
              </div>
              <!-- Page tree -->
              <div class="flex flex-col gap-0.5 p-3 text-[12px]">
                <div class="flex items-center gap-2 rounded px-2 py-1.5 text-zinc-600">
                  <svg class="h-3 w-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  Home
                </div>
                <div class="flex items-center gap-2 rounded px-2 py-1.5 text-zinc-600">
                  <svg class="h-3 w-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  Search
                </div>
                <div class="flex items-center gap-2 rounded bg-blue-50 px-2 py-1.5 font-medium text-blue-700">
                  <div class="h-3 w-3 rounded-sm bg-blue-500" />
                  Desktop
                  <span class="ml-auto rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">Primary</span>
                </div>
                <div class="ml-4 flex flex-col gap-0.5">
                  <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                    <span class="text-zinc-300">▸</span> Main
                  </div>
                  <div class="ml-3 flex flex-col gap-0.5">
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Hero section
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Logo cloud
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Feature
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> CTA
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Testimonials
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Pricing
                    </div>
                    <div class="flex items-center gap-2 rounded px-2 py-1 text-[11px] text-zinc-500">
                      <span class="text-zinc-300">▸</span> Newsletter
                    </div>
                  </div>
                </div>
              </div>
              <!-- Left edge labels -->
              <div class="mt-auto flex flex-col gap-3 border-t border-zinc-100 px-3 py-3">
                <div class="flex items-center gap-2 text-[11px] text-zinc-400">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" /></svg>
                  CMS
                </div>
                <div class="flex items-center gap-2 text-[11px] text-zinc-400">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  Styles
                </div>
              </div>
            </div>

            <!-- Center canvas -->
            <div class="flex-1 overflow-hidden bg-zinc-100/50 p-4 tablet:p-6">
              <div class="mx-auto h-full max-w-[700px] overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-sm">
                <!-- Fake website in canvas -->
                <div class="border-b border-zinc-100 px-6 py-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <svg class="h-4 w-4 text-zinc-950" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <span class="text-[13px] font-semibold text-zinc-950">Finova</span>
                    </div>
                    <div class="hidden items-center gap-4 text-[12px] text-zinc-500 tablet:flex">
                      <span>Works</span>
                      <span>Blog</span>
                      <span>Features</span>
                      <span>Pricing</span>
                      <span>Shop</span>
                    </div>
                  </div>
                </div>
                <div class="p-6 tablet:p-8">
                  <div class="flex flex-col gap-4 tablet:flex-row tablet:gap-8">
                    <div class="flex-1">
                      <span class="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-600">
                        ✨ Customize everything
                      </span>
                      <h2 class="mt-3 text-[24px] leading-[30px] font-bold tracking-tight text-zinc-950 tablet:text-[32px] tablet:leading-[38px]">
                        Versatile Solution For Your Everyday Needs 👌
                      </h2>
                      <p class="mt-3 text-[11px] leading-[16px] text-zinc-500 tablet:text-[13px] tablet:leading-[18px]">
                        Enthusiastically empower client-centric materials for an expanded array of potentialities.
                      </p>
                      <div class="mt-4 flex items-center gap-3">
                        <span class="rounded-md bg-zinc-950 px-3 py-1.5 text-[11px] font-medium text-white">Download App</span>
                        <span class="text-[11px] font-medium text-zinc-600">Get Started</span>
                      </div>
                    </div>
                    <!-- Card mockup -->
                    <div class="hidden w-[200px] shrink-0 tablet:block">
                      <div class="rounded-xl border border-zinc-200 bg-zinc-950 p-4 text-white">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-zinc-400">Weekly Stats</span>
                          <div class="h-8 w-16">
                            <svg viewBox="0 0 60 30" class="h-full w-full">
                              <polyline points="0,25 10,20 20,22 30,15 40,18 50,8 60,12" fill="none" stroke="white" stroke-width="1.5" />
                            </svg>
                          </div>
                        </div>
                        <div class="mt-2 text-[10px] text-zinc-400">Main Balance</div>
                        <div class="text-[18px] font-bold">$984,556.34</div>
                        <div class="mt-3 flex gap-2">
                          <div class="h-12 w-16 rounded-lg bg-zinc-800" />
                          <div class="h-12 w-16 rounded-lg bg-zinc-800" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right properties panel -->
            <div class="hidden w-[200px] shrink-0 flex-col border-l border-zinc-100 bg-white desktop:flex">
              <div class="flex flex-col gap-3 p-3 text-[11px]">
                <!-- Link section -->
                <div>
                  <div class="mb-1.5 font-medium text-zinc-400">Link</div>
                  <div class="flex items-center justify-between">
                    <span class="text-zinc-500">Link to</span>
                    <span class="text-zinc-400">Page or URL...</span>
                  </div>
                </div>
                <div class="h-px bg-zinc-100" />
                <!-- Position section -->
                <div>
                  <div class="mb-1.5 flex items-center justify-between">
                    <span class="font-medium text-zinc-400">Position</span>
                    <span class="text-zinc-400">+</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-zinc-500">Type</span>
                    <span class="rounded bg-zinc-50 px-2 py-0.5 text-zinc-600">Relative</span>
                  </div>
                </div>
                <div class="h-px bg-zinc-100" />
                <!-- Size section -->
                <div>
                  <div class="mb-1.5 flex items-center justify-between">
                    <span class="font-medium text-zinc-400">Size</span>
                    <span class="text-zinc-400">+</span>
                  </div>
                  <div class="grid grid-cols-3 gap-1.5">
                    <div class="flex flex-col gap-0.5">
                      <span class="text-[10px] text-zinc-400">Width</span>
                      <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-center text-zinc-600">Fill</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-[10px] text-zinc-400">Min</span>
                      <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-center text-zinc-400">—</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-[10px] text-zinc-400">Max</span>
                      <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-center text-zinc-400">—</span>
                    </div>
                  </div>
                  <div class="mt-1.5 grid grid-cols-3 gap-1.5">
                    <div class="flex flex-col gap-0.5">
                      <span class="text-[10px] text-zinc-400">Height</span>
                      <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-center text-zinc-600">800</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                      <span class="text-[10px] text-zinc-400">Add...</span>
                      <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-center text-zinc-400">—</span>
                    </div>
                  </div>
                </div>
                <div class="h-px bg-zinc-100" />
                <!-- Layout section -->
                <div>
                  <div class="mb-1.5 flex items-center justify-between">
                    <span class="font-medium text-zinc-400">Layout</span>
                    <span class="text-zinc-400">+</span>
                  </div>
                </div>
                <div class="h-px bg-zinc-100" />
                <!-- Effects -->
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-zinc-400">Effects</span>
                    <span class="text-zinc-400">+</span>
                  </div>
                </div>
                <div class="h-px bg-zinc-100" />
                <!-- Overlays -->
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-zinc-400">Overlays</span>
                    <span class="text-zinc-400">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- URL bar at bottom -->
          <div class="flex items-center justify-center border-t border-zinc-100 bg-zinc-50/80 px-4 py-2">
            <div class="flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1 text-[12px] text-zinc-400">
              <svg class="h-3 w-3 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Stylokit · stylokit.com
            </div>
          </div>
        </div>

        <!-- Floating labels -->
        <div class="absolute -top-4 right-[15%] z-20 hidden rounded-lg border border-zinc-200/80 bg-white px-3 py-2 shadow-lg tablet:block">
          <div class="flex items-center gap-2">
            <svg class="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121A3 3 0 109.88 9.88m4.242 4.242L9.88 9.88m4.242 4.242L18 18m-8.121-8.121L6 6" /></svg>
            <span class="text-[12px] font-medium text-zinc-600">Plugin</span>
          </div>
        </div>

        <div class="absolute -top-2 right-[2%] z-20 hidden rounded-lg border border-zinc-200/80 bg-white px-3 py-2 shadow-lg tablet:block">
          <div class="flex items-center gap-2">
            <svg class="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            <span class="text-[12px] font-medium text-zinc-600">Assets</span>
          </div>
        </div>

        <div class="absolute top-[40%] -right-2 z-20 hidden rounded-lg border border-zinc-200/80 bg-white px-3 py-1.5 shadow-lg tablet:block">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-blue-500" />
            <span class="text-[12px] font-medium text-zinc-600">Breakpoint</span>
          </div>
        </div>

        <!-- Invite + Publish floating buttons -->
        <div class="absolute top-[10%] right-[0%] z-20 hidden items-center gap-2 tablet:flex">
          <span class="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-[12px] font-medium text-zinc-600 shadow-sm">Invite</span>
          <span class="rounded-md bg-blue-500 px-3 py-1.5 text-[12px] font-medium text-white shadow-sm">Publish</span>
        </div>
      </div>
    </div>
  </section>
</template>
