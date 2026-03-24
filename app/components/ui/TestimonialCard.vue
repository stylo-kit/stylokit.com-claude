<script setup lang="ts">
defineProps<{
  name: string
  quote: string
  tag: string
  tagLink: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4 rounded-2xl bg-zinc-50 p-6 tablet:gap-6 tablet:p-8">
    <p class="text-[15px] leading-5 font-medium text-zinc-950 tablet:text-[17px] tablet:leading-6">
      {{ name }}
    </p>
    <div class="flex flex-col gap-4">
      <p class="text-[15px] leading-[22px] tracking-[0.01em] text-zinc-600 tablet:text-[17px] tablet:leading-6">
        {{ quote }}
      </p>
      <NuxtLink
        :to="tagLink"
        class="text-[15px] font-medium text-main-blue hover:underline"
      >
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>
