# Stylokit.com — Nuxt 4 Migration from Framer

## Project Overview

This is the Nuxt 4 implementation of **stylokit.com** — a premium template marketplace selling Framer, Nuxt, and Figma templates. The original site is built in Framer and published at https://stylokit.com. The goal is to replicate the entire Framer site as a **static site** (no SSR) using the Framer MCP to extract content, structure, and design tokens.

## Source of Truth

- **Live site**: https://stylokit.com
- **Framer staging**: https://bulky-emails-086811.framer.app
- **Framer MCP**: Use `getProjectXml`, `getNodeXml`, and related tools to extract page structure, components, styles, and content from the Framer project.

## Tech Stack & Requirements

- **Framework**: Nuxt 4.4+ (Vue 3.5+, Vue Router 5)
- **Rendering**: Static site generation only (`nuxt generate`), NO SSR
- **Styling**: Tailwind CSS v4 — all styling must use Tailwind utility classes and custom theme config
- **Animation**: motion-v (from motion.dev) — all animations and transitions must use this library
- **Content/CMS**: @nuxt/content v3 — for blog posts, template data, changelogs, and all CMS-driven content
- **Fonts**: @nuxt/fonts — used to load SF Pro Display (primary) and any other required font families
- **Images**: @nuxt/image — optimized image handling
- **SEO**: @nuxtjs/seo — all SEO requirements (meta tags, sitemap, robots, og tags)
- **Icons**: Phosphor Icons (Vue package)
- **Payments**: Lemon Squeezy (external checkout links, not integrated in app)

## Key Constraints

- **No SSR** — output is always a static site via `nuxt generate`
- **Tailwind CSS v4 via `@tailwindcss/vite`** — NOT the `@nuxtjs/tailwindcss` module (incompatible with v4). Theme is configured via `@theme` in `app/assets/css/main.css`. No `tailwind.config.ts` file.
- **Tailwind CSS only** — no custom CSS files for layout/styling; use Tailwind utilities and `@apply` sparingly
- **motion-v only** — do not use CSS transitions/animations or other animation libraries; all motion via motion.dev's Vue integration
- **@nuxt/content for all CMS** — blog posts, template listings, changelog entries are all content collections defined in `content.config.ts`
- **@nuxt/fonts for fonts** — do not manually import fonts; configure through the module
- **og-image disabled** — requires SSR, explicitly disabled in nuxt.config.ts

## Framer Site Structure

### Pages (17 total)

| Path | Description |
|---|---|
| `/` | Home — hero, stats, featured templates, how it works, testimonials, blog, FAQ |
| `/all-access` | All-access pricing page — 3 pricing tiers, what's included, testimonials |
| `/templates` | Templates listing with section heading and grid |
| `/templates/framer` | Framer templates filtered view |
| `/templates/nuxt` | Nuxt templates filtered view |
| `/templates/freebies` | Free templates filtered view |
| `/templates/:slug` | Individual template detail page (dynamic) |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post (dynamic) |
| `/components` | Components showcase page |
| `/icon-set` | Icon set page |
| `/affiliate` | Affiliate program page |
| `/changelog` | Changelog page |
| `/terms-of-use` | Terms of use |
| `/privacy-policy` | Privacy policy |
| `/license` | License page |
| `/404` | Custom 404 page |

### Home Page Sections (in order)

1. **HeroSection** — Badge ("No-Code Friendly"), heading, description, CTA button (All Access), decorative browser mockup with floating element cards
2. **Stats** — Stats cards showing key metrics
3. **Featured** — Featured templates grid with categories
4. **HowItWorks** — Step-by-step process explanation
5. **Testimonials** — 3x3 grid of testimonial cards with "Write review" CTA (links to Tally form)
6. **Blog** — 3-column grid of blog cards
7. **FAQ** — 3x2 grid of Q&A items

### All-Access Page Sections

1. **Pricing** — Heading, 3 pricing tiers (Lemon Squeezy checkout links), secure payment badges
2. **What's Included** — 3x2 grid: All products, No subscription, Unlimited projects, Lifetime access, Free updates, Support
3. **Testimonials** — Same 3x3 testimonial grid

### Templates Page Sections

1. **PageHeader** — Badge, heading ("Premium Framer, Nuxt & Figma Templates"), description
2. **FramerTemplates** — Section heading + 4-column card grid
3. **Freebies** — Section heading + 4-column card grid
4. **NuxtTemplates** — Section heading + 4-column card grid

### Shared Components (from Framer)

| Component | Framer ID | Usage |
|---|---|---|
| Navigation | `daK_cE5jm` | Site-wide top nav with dropdowns |
| Footer | `VzpHgl81d`, `FzSW2kfKU` | Site-wide footer |
| Logo | `bz37U5GQq` | Brand logo |
| Button | `ghx8TgsHF` | Primary button with icon support |
| Badge | `Ndb0e5v1y` | Small label badges |
| Card | `ynD9QFbKo` | Template product card |
| Card 2 / New card | — | Alternative card layouts |
| Pricing card | `mZKWjueBE` | Pricing tier card with CTA |
| Testimonials card | `oaXbuzhNo` | Testimonial with name, quote, product tag |
| Blog card | `XfaXcy8w1` | Blog post preview card |
| List content | `oMw8U3zwk` | Feature/FAQ list item with title + description |
| Section heading | `AzCmFyrLk` | Reusable section header |
| Filter / Template Filter | — | Category filtering UI |
| Tag | `TyQrqNVke` | Tag labels |
| Link button | `xR4XxGtxQ`, `cRAhgcnku` | Text link with arrow |
| Search | `WN2xjlnwK` | Search component |
| Sidebar navigation | `WVwzo2p4X` | Sidebar nav for docs/blog |
| Dropdown | `tSN9M_rLh` | Dropdown menu system |

### Code Components (React in Framer — rewrite as Vue)

- `Colredloading.tsx` → Vue loading animation component (use motion-v)
- `Facedgridcms.tsx` → Vue CMS grid component (use @nuxt/content)
- `Phosphor.tsx` → Replace with `@phosphor-icons/vue` package

## Design System

### Typography (SF Pro Display — loaded via @nuxt/fonts)

| Style | Weight | Size | Line Height | Tag | Tailwind Class |
|---|---|---|---|---|---|
| Heading 3xl | Semibold (600) | 56px | 64px | h1 | `text-[56px] leading-[64px] font-semibold` |
| Heading 2xl | Semibold (600) | 36px | 44px | h1 | `text-[36px] leading-[44px] font-semibold` |
| Heading xl | Medium (500) | 24px | 32px | h2 | `text-2xl leading-8 font-medium` |
| Heading lg | Medium (500) | 20px | 30px | h3 | `text-xl leading-[30px] font-medium` |
| Heading md | Medium (500) | 17px | 24px | h5 | `text-[17px] leading-6 font-medium` |
| Heading sm | Medium (500) | 15px | 24px | h6 | `text-[15px] leading-6 font-medium` |
| Body lg | Regular (400) | 20px | 30px | p | `text-xl leading-[30px]` |
| Body md | Regular (400) | 17px | 24px | p | `text-[17px] leading-6` |
| Body sm | Regular (400) | 15px | 20px | p | `text-[15px] leading-5` |
| Paragraph | Regular (400) | 15px | 22px | p | `text-[15px] leading-[22px]` |

### Color Palette (configure in Tailwind theme)

**Zinc (Neutrals — primary dark theme):**
- 950: `rgb(9, 9, 11)` — Main dark background
- 900: `rgb(17, 17, 19)`
- 800: `rgb(23, 23, 25)`
- 750: `rgb(32, 31, 34)`
- 700: `rgb(40, 39, 42)`
- 600: `rgb(81, 82, 91)`
- 500: `rgb(113, 113, 122)`
- 400: `rgb(160, 161, 170)`
- 300: `rgb(213, 212, 217)`
- 200: `rgb(228, 228, 230)`
- 100: `rgb(245, 245, 244)`
- 50: `rgb(250, 250, 250)`

**Purple (Brand accent):**
- 950: `rgb(56, 14, 128)`
- 900: `rgb(74, 31, 146)`
- 800: `rgb(88, 37, 177)`
- 700: `rgb(108, 44, 217)`
- 600: `rgb(122, 62, 234)`
- 500: `rgb(137, 93, 243)`
- 400: `rgb(165, 140, 248)`
- 300: `rgb(196, 181, 251)`
- 200: `rgb(220, 214, 254)`
- 100: `rgb(235, 232, 253)`
- 50: `rgb(244, 243, 255)`

**Neo Green (Secondary accent):**
- 950: `rgb(31, 39, 0)`
- 900: `rgb(54, 65, 8)`
- 800: `rgb(91, 108, 13)`
- 700: `rgb(115, 135, 9)`
- 600: `rgb(153, 179, 13)`
- 500: `rgb(214, 245, 25)`
- 400: `rgb(225, 251, 35)`
- 300: `rgb(239, 254, 90)`
- 200: `rgb(246, 254, 148)`
- 100: `rgb(252, 255, 198)`
- 50: `rgb(253, 253, 228)`

**Other:**
- White: `rgb(255, 255, 255)`
- Main blue: `rgb(0, 154, 255)`
- Primary-4 (lime): `rgb(177, 252, 3)`
- Orange 600: `rgb(227, 80, 19)`
- Orange 50: `rgb(254, 235, 213)`

### Layout Patterns

- **Max container width**: 1200px (home), 1400px (all-access)
- **Container padding**: `96px 24px` (vertical sections), `24px` horizontal
- **Grid gaps**: 24px (cards), 12px (testimonials), 32px (FAQ/features)
- **Grid columns**: 3 (testimonials, FAQ, blog), 4 (template cards)
- **Section gap**: 64px between major sections
- **Border radius**: 8px (cards), 32px (hero background)
- **Breakpoints**: Desktop (≥1200px), Tablet (810px), Phone (390px)

## Implementation Notes

- The home page uses a **light theme** (white background) while the templates and all-access pages use a **dark theme** (Zinc 950 background).
- Template cards are CMS-driven in Framer — replicate with `@nuxt/content` collections.
- Blog posts are CMS-driven — use `@nuxt/content` markdown files.
- Payments go through Lemon Squeezy external links (no in-app checkout).
- Testimonials link to a Tally form for reviews: `https://tally.so/r/3XPOWY`
- The hero section has decorative floating UI element mockups (browser chrome, floating cards with icons).
- Navigation includes dropdown menus with image previews.
- All page transitions and scroll-triggered animations use **motion-v** from motion.dev.
- Use `nuxt generate` for all builds — the site is fully static with pre-rendered pages.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run generate  # Static site generation (primary build command)
npm run preview   # Preview production build
```

## Project Structure (target)

```
app/
├── app.vue                  # Root app component
├── layouts/
│   ├── default.vue          # Default layout (light theme - home)
│   └── dark.vue             # Dark layout (templates, all-access)
├── pages/
│   ├── index.vue            # Home page
│   ├── all-access.vue       # All-access pricing
│   ├── templates/
│   │   ├── index.vue        # Templates listing
│   │   ├── framer.vue       # Framer templates
│   │   ├── nuxt.vue         # Nuxt templates
│   │   ├── freebies.vue     # Free templates
│   │   └── [slug].vue       # Template detail
│   ├── blog/
│   │   ├── index.vue        # Blog listing
│   │   └── [slug].vue       # Blog post
│   ├── components.vue       # Components page
│   ├── icon-set.vue         # Icon set page
│   ├── affiliate.vue        # Affiliate page
│   ├── changelog.vue        # Changelog page
│   ├── terms-of-use.vue     # Terms
│   ├── privacy-policy.vue   # Privacy
│   └── license.vue          # License
├── components/
│   ├── ui/                  # Base UI components (Button, Badge, Tag, etc.)
│   ├── layout/              # Navigation, Footer, Container
│   ├── sections/            # Page sections (Hero, Stats, Testimonials, etc.)
│   └── cards/               # Card variants (TemplateCard, PricingCard, etc.)
├── composables/             # Vue composables
├── assets/
│   └── css/
│       └── main.css         # Tailwind CSS entry point
└── error.vue                # 404 page
content/
├── templates/               # Template entries (markdown/yaml)
├── blog/                    # Blog posts (markdown)
└── changelog/               # Changelog entries
public/
├── favicon.ico
└── images/                  # Static images
nuxt.config.ts
tailwind.config.ts           # Tailwind theme with custom colors/fonts
```

## Migration Strategy

1. Install dependencies (tailwindcss, motion-v, @phosphor-icons/vue)
2. Configure nuxt.config.ts for static generation and all modules
3. Set up Tailwind CSS with custom theme (colors, fonts, spacing from design system)
4. Configure @nuxt/fonts for SF Pro Display
5. Build shared components (Navigation, Footer, Button, Card, Badge, etc.)
6. Implement layouts (default light, dark)
7. Implement pages in order: Home → Templates → All-Access → Blog → remaining pages
8. Set up @nuxt/content collections for templates and blog posts
9. Add animations with motion-v (scroll reveals, page transitions, hover effects)
10. Configure @nuxtjs/seo (meta tags, sitemap, og images)
11. Add responsive breakpoints (Tablet 810px, Phone 390px)
12. Test static generation with `nuxt generate`
