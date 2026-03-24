import type { Ref } from 'vue'

export function useScrollReveal(
  target: Ref<HTMLElement | null | undefined>,
  options: { delay?: number; threshold?: number } = {}
) {
  const isVisible = ref(false)
  const { delay = 0, threshold = 0.15 } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.value) {
          if (delay > 0) {
            setTimeout(() => { isVisible.value = true }, delay)
          } else {
            isVisible.value = true
          }
          observer?.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isVisible }
}
