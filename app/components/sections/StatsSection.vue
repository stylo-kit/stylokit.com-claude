<script setup lang="ts">
const stats = [
  { value: '22+', label: 'Premium Templates' },
  { value: '4K+', label: 'Components' },
  { value: '5K+', label: 'Happy Customers' },
  { value: '80+', label: 'Countries Reached' },
]
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-4 pb-12 tablet:flex-row tablet:flex-wrap tablet:gap-12 tablet:px-6 tablet:pb-24 desktop:gap-16">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex flex-col gap-1"
      >
        <span class="font-instrument text-2xl leading-8 font-semibold text-zinc-950 tablet:text-[36px] tablet:leading-[44px]">
          {{ stat.value }}
        </span>
        <span class="font-instrument text-[15px] leading-5 text-zinc-500 tablet:text-[17px] tablet:leading-6">
          {{ stat.label }}
        </span>
      </div>
    </div>
  </section>
</template>
