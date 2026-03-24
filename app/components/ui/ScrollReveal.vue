<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}>(), {
  delay: 0,
  direction: 'up',
})

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isVisible.value) {
        if (props.delay > 0) {
          setTimeout(() => { isVisible.value = true }, props.delay)
        } else {
          isVisible.value = true
        }
        observer?.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="isVisible
      ? 'opacity-100 translate-y-0 translate-x-0'
      : direction === 'up' ? 'opacity-0 translate-y-6'
      : direction === 'down' ? 'opacity-0 -translate-y-6'
      : direction === 'left' ? 'opacity-0 translate-x-6'
      : 'opacity-0 -translate-x-6'
    "
  >
    <slot />
  </div>
</template>
