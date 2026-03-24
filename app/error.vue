<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()
useHead({ title: '404 — Page Not Found' })

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-white font-sans">
    <div class="text-center">
      <h1 class="text-[56px] leading-[64px] font-semibold text-zinc-950">{{ error.statusCode }}</h1>
      <p class="mt-4 text-[17px] leading-6 text-zinc-500">{{ error.message || 'Page not found.' }}</p>
      <button
        class="mt-8 inline-block font-medium text-purple-600 hover:text-purple-700"
        @click="handleClearError"
      >
        Go home
      </button>
    </div>
  </div>
</template>
