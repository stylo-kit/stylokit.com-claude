<script setup lang="ts">
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <!-- Background gradient - peach to light blue -->
    <div
      class="pointer-events-none absolute inset-0"
      style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,237,220,0.25) 50%, rgba(200,225,255,0.2) 100%)"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-20"
      style="background: radial-gradient(ellipse at 50% 80%, rgba(255,180,130,0.4) 0%, rgba(150,200,255,0.3) 40%, transparent 70%)"
    />

    <div class="relative mx-auto max-w-[1200px] px-4 py-12 tablet:px-6 tablet:py-24">
      <div class="flex flex-col gap-6 tablet:gap-8 desktop:flex-row desktop:items-start desktop:gap-16">
        <!-- Hero text -->
        <div class="flex max-w-full flex-col items-start gap-6 tablet:max-w-[720px] tablet:gap-8 desktop:max-w-[560px] desktop:shrink-0">
          <div class="flex flex-col items-start gap-3 tablet:gap-4">
            <UiBadge label="No-Code Friendly" variant="border" />
            <h1 class="text-[28px] leading-[36px] font-semibold text-zinc-950 tablet:text-[56px] tablet:leading-[64px]">
              Premium framer templates for
              <span class="text-zinc-300">Agencies and creators</span>
            </h1>
            <p class="max-w-full text-[15px] leading-5 text-zinc-500 tablet:max-w-[560px] tablet:text-xl tablet:leading-[30px] tablet:tracking-[-0.01em]">
              Curated Framer templates for agencies, freelancers, and startups — built for speed and clean structure.
            </p>
          </div>

          <!-- CTA -->
          <div class="flex flex-col items-start gap-4">
            <div class="flex items-center gap-6">
              <UiAppButton
                label="All Access — $499"
                to="/all-access"
                icon="lightning"
                variant="gray"
                size="md"
              />
            </div>
            <p class="max-w-[320px] text-[15px] leading-5 tracking-[0.3px] text-zinc-400">
              Lifetime access. No subscriptions.
            </p>
          </div>
        </div>

        <!-- Framer editor mockup -->
        <div class="relative hidden flex-1 tablet:block">
          <div class="relative">
            <!-- Main browser chrome card -->
            <div class="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
              <!-- Title bar with traffic lights -->
              <div class="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-3 py-2">
                <div class="flex items-center gap-1.5">
                  <div class="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div class="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div class="ml-3 flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[11px] text-zinc-400 border border-zinc-100">
                  <svg class="h-3 w-3 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <span>Stylokit &middot; stylokit.com</span>
                </div>
              </div>

              <!-- Toolbar -->
              <div class="flex items-center gap-1 border-b border-zinc-100 px-3 py-1.5">
                <button class="rounded px-2 py-1 text-[11px] font-medium text-zinc-500 hover:bg-zinc-100">Insert</button>
                <button class="rounded px-2 py-1 text-[11px] font-medium text-zinc-500 hover:bg-zinc-100">Layout</button>
                <button class="rounded px-2 py-1 text-[11px] font-medium text-zinc-500 hover:bg-zinc-100">Text</button>
                <button class="rounded px-2 py-1 text-[11px] font-medium text-zinc-500 hover:bg-zinc-100">CMS</button>
                <div class="mx-1 h-3 w-px bg-zinc-200" />
                <button class="rounded px-2 py-1 text-[11px] font-medium text-purple-500 hover:bg-purple-50">Publish</button>
              </div>

              <!-- Main content area - template grid -->
              <div class="p-3">
                <div class="grid grid-cols-2 gap-2">
                  <div class="overflow-hidden rounded-lg border border-zinc-100">
                    <img src="/images/templates/stickify.webp" alt="Stickify" class="h-[100px] w-full object-cover" />
                    <div class="px-2 py-1.5">
                      <span class="text-[10px] font-medium text-zinc-700">Stickify</span>
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-lg border border-zinc-100">
                    <img src="/images/templates/ainest.webp" alt="Ainest" class="h-[100px] w-full object-cover" />
                    <div class="px-2 py-1.5">
                      <span class="text-[10px] font-medium text-zinc-700">Ainest</span>
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-lg border border-zinc-100">
                    <img src="/images/templates/nexus-ai.jpg" alt="Nexus AI" class="h-[100px] w-full object-cover" />
                    <div class="px-2 py-1.5">
                      <span class="text-[10px] font-medium text-zinc-700">Nexus AI</span>
                    </div>
                  </div>
                  <div class="overflow-hidden rounded-lg border border-zinc-100">
                    <img src="/images/templates/codify.jpg" alt="Codify" class="h-[100px] w-full object-cover" />
                    <div class="px-2 py-1.5">
                      <span class="text-[10px] font-medium text-zinc-700">Codify</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom bar -->
              <div class="flex items-center gap-0 border-t border-zinc-100 bg-zinc-50">
                <button class="flex-1 px-3 py-1.5 text-[11px] font-medium text-zinc-500 border-r border-zinc-100">Pages</button>
                <button class="flex-1 px-3 py-1.5 text-[11px] font-medium text-purple-500 border-r border-zinc-100">Layers</button>
                <button class="flex-1 px-3 py-1.5 text-[11px] font-medium text-zinc-500">Assets</button>
              </div>
            </div>

            <!-- Floating decoration: Plugin label -->
            <div class="absolute -left-6 top-12 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 shadow-lg">
              <div class="flex items-center gap-1.5">
                <div class="h-2 w-2 rounded-full bg-purple-500" />
                <span class="text-[11px] font-medium text-zinc-700">Plugin</span>
              </div>
            </div>

            <!-- Floating decoration: Assets label -->
            <div class="absolute -left-3 bottom-16 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 shadow-lg">
              <div class="flex items-center gap-1.5">
                <div class="h-2 w-2 rounded-full bg-neo-500" />
                <span class="text-[11px] font-medium text-zinc-700">Assets</span>
              </div>
            </div>

            <!-- Floating decoration: Breakpoint label -->
            <div class="absolute -right-4 top-20 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 shadow-lg">
              <div class="flex items-center gap-1.5">
                <div class="h-2 w-2 rounded-full bg-main-blue" />
                <span class="text-[11px] font-medium text-zinc-700">Breakpoint</span>
              </div>
            </div>

            <!-- Floating decoration: Properties panel -->
            <div class="absolute -right-8 bottom-8 w-[140px] rounded-lg border border-zinc-200 bg-white p-2.5 shadow-lg">
              <span class="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Properties</span>
              <div class="mt-2 flex flex-col gap-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] text-zinc-400">X</span>
                  <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-[10px] font-mono text-zinc-600">120</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[10px] text-zinc-400">Y</span>
                  <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-[10px] font-mono text-zinc-600">340</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[10px] text-zinc-400">W</span>
                  <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-[10px] font-mono text-zinc-600">480</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[10px] text-zinc-400">H</span>
                  <span class="rounded bg-zinc-50 px-1.5 py-0.5 text-[10px] font-mono text-zinc-600">320</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
