<script setup lang="ts">
const props = defineProps<{
  categories: string[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="cat in categories"
      :key="cat"
      class="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
      :class="modelValue === cat
        ? 'bg-zinc-950 text-white'
        : 'text-zinc-600 hover:text-zinc-950'"
      @click="emit('update:modelValue', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>
