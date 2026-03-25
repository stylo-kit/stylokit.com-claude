export interface BlogPost {
  title: string
  slug: string
  description: string
  date: string
  category: string
  image?: string
  featured?: boolean
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    title: '20 Best Framer Portfolio Templates 2025',
    slug: '20-best-framer-portfolio-templates-2025',
    description: 'Discover the top templates for portfolio sites that actually convert in 2025.',
    date: 'Aug 6, 2025',
    category: 'Web design',
    image: '/images/blog/framer-portfolio-templates.webp',
    featured: true,
  },
  {
    title: 'Top 20 Fonts for Modern Web Design 2025',
    slug: 'top-20-fonts-for-modern-web-design-2025',
    description: 'A curated list of versatile fonts perfect for digital interfaces and branding.',
    date: 'Aug 7, 2025',
    category: 'UI Inspiration',
    image: '/images/blog/fonts-web-design.webp',
    featured: true,
  },
  {
    title: '20 Best AI Framer Templates 2025',
    slug: '20-best-ai-framer-templates-2025',
    description: 'Discover the top Framer templates designed for AI tools, startups, and platforms.',
    date: 'Aug 8, 2025',
    category: 'UI Inspiration',
    image: '/images/blog/ai-framer-templates.webp',
  },
  {
    title: 'Top 10 Course Platform Designs for 2025',
    slug: 'top-10-course-platform-designs-for-2025',
    description: 'Discover top course website designs with great UX and educational structure.',
    date: 'Aug 7, 2025',
    category: 'UI Inspiration',
    image: '/images/blog/course-platform-designs.webp',
  },
  {
    title: 'Top 10 No-Code Website Builders for 2025',
    slug: 'top-10-no-code-website-builders-for-2025',
    description: 'The best no-code builders to design and publish modern websites in 2025.',
    date: 'Aug 7, 2025',
    category: 'Website Tools',
    image: '/images/blog/no-code-website-builders.webp',
  },
]
