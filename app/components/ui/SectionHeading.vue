<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  centered?: boolean
}>(), {
  centered: true,
})
</script>

<template>
  <div
    class="flex flex-col gap-3 tablet:gap-4"
    :class="centered ? 'items-center text-center max-w-full tablet:max-w-[560px] mx-auto' : 'items-start text-left'"
  >
    <h2 class="text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
      {{ title }}
    </h2>
    <p v-if="description" class="text-[15px] leading-5 tracking-[0.01em] text-zinc-500 tablet:text-[17px] tablet:leading-6">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
