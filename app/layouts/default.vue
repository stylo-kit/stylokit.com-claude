<template>
  <div class="min-h-screen bg-white text-zinc-950 font-sans">
    <LayoutAppNavigation />

    <!-- Spacer for fixed nav -->
    <div class="h-[72px]" />

    <main class="overflow-hidden">
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>
