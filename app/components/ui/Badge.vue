<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  variant?: 'border' | 'border-dark' | 'green' | 'neo' | 'purple' | 'orange' | 'gray'
}>(), {
  variant: 'border',
})

const variantClasses: Record<string, string> = {
  border: 'bg-white text-zinc-950 border border-zinc-200',
  'border-dark': 'bg-zinc-800 text-zinc-300 border border-zinc-700',
  green: 'bg-[rgb(186,246,207)] text-zinc-950',
  neo: 'bg-[rgb(253,239,138)] text-zinc-950',
  purple: 'bg-white text-zinc-950 border border-purple-200',
  orange: 'bg-orange-50 text-orange-600',
  gray: 'bg-white text-zinc-950 border border-zinc-200',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
    :class="variantClasses[variant]"
  >
    {{ label }}
  </span>
</template>
