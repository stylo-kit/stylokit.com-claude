<template>
  <div class="min-h-screen bg-zinc-950 text-white font-sans">
    <LayoutAppNavigation />
    <div class="h-[72px]" />
    <main>
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
