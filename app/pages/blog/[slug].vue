<script setup lang="ts">
const route = useRoute()
useHead({ title: `${route.params.slug} — Stylokit Blog` })
</script>

<template>
  <div class="mx-auto max-w-[1200px] px-6 py-24">
    <h1 class="text-[36px] leading-[44px] font-semibold">{{ route.params.slug }}</h1>
    <p class="mt-4 text-[17px] leading-6 text-zinc-500">Blog post content will go here.</p>
  </div>
</template>
