import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    templates: defineCollection({
      type: 'data',
      source: 'templates/**',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        subtitle: z.string().optional(),
        platform: z.enum(['framer', 'nuxt', 'figma']),
        category: z.string().optional(),
        badge: z.enum(['Popular', 'New', 'Gift']).optional(),
        price: z.number().optional(),
        isFree: z.boolean().default(false),
        image: z.string().optional(),
        lemonSqueezyUrl: z.string().optional(),
        previewUrl: z.string().optional(),
        featured: z.boolean().default(false),
        pageCount: z.number().optional(),
        cmsCount: z.number().optional(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.string().optional(),
        image: z.string().optional(),
        author: z.string().default('Stylokit'),
      }),
    }),
    changelog: defineCollection({
      type: 'page',
      source: 'changelog/**',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        version: z.string().optional(),
      }),
    }),
  },
})
