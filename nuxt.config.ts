import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,

  // Tailwind CSS v4 entry point
  css: ['~/assets/css/main.css'],

  // Tailwind CSS v4 via Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
  ],

  fonts: {
    families: [
      {
        name: 'SF Pro Display',
        provider: 'local',
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
      {
        name: 'Instrument Sans',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
    ],
  },

  // Disable og-image (requires SSR)
  ogImage: { enabled: false },

  site: {
    url: 'https://stylokit.com',
    name: 'Stylokit',
    description: 'Premium Framer, Nuxt & Figma templates for agencies and creators.',
  },
})
