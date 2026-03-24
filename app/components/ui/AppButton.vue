<script setup lang="ts">
import { PhLightning, PhArrowRight } from '@phosphor-icons/vue'

const props = withDefaults(defineProps<{
  label: string
  to?: string
  href?: string
  icon?: 'lightning' | 'arrow-right'
  variant?: 'neo' | 'white' | 'gray' | 'purple'
  size?: 'xs' | 'md' | 'lg'
  external?: boolean
}>(), {
  variant: 'neo',
  size: 'md',
  external: false,
})

const variantClasses: Record<string, string> = {
  neo: 'bg-neo-500 text-zinc-950 hover:bg-neo-400',
  white: 'bg-white text-zinc-950 border border-zinc-200 hover:bg-zinc-50',
  gray: 'bg-zinc-900 text-white hover:bg-zinc-800',
  purple: 'bg-purple-600 text-white hover:bg-purple-500',
}

const sizeClasses: Record<string, string> = {
  xs: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

const iconComponents = {
  lightning: PhLightning,
  'arrow-right': PhArrowRight,
}
</script>

<template>
  <component
    :is="href ? 'a' : to ? resolveComponent('NuxtLink') : 'button'"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <component
      v-if="icon"
      :is="iconComponents[icon]"
      :size="size === 'xs' ? 14 : 16"
      weight="duotone"
    />
    {{ label }}
  </component>
</template>
