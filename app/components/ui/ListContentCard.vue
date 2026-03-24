<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1.5 pb-4">
    <h3 class="text-[17px] leading-6 font-medium text-zinc-950">
      {{ title }}
    </h3>
    <p class="text-[17px] leading-6 tracking-[0.01em] text-zinc-500">
      {{ description }}
    </p>
  </div>
</template>
