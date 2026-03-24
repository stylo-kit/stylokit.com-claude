<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'

withDefaults(defineProps<{
  label: string
  to: string
  dark?: boolean
}>(), {
  dark: false,
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-1.5 text-[15px] font-medium transition-colors"
    :class="dark ? 'text-zinc-400 hover:text-white' : 'text-zinc-950 hover:text-zinc-600'"
  >
    {{ label }}
    <PhArrowRight :size="14" weight="bold" class="mt-0.5" />
  </NuxtLink>
</template>
