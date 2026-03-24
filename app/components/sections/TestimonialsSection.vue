<script setup lang="ts">
import { PhPencilSimpleLine } from '@phosphor-icons/vue'

const testimonials = [
  { name: 'Emily Carter', quote: 'Nexus AI made it incredibly easy to build a stunning AI landing page in just hours', tag: '#Nexus AI', tagLink: '/templates/nexus-ai' },
  { name: 'Javier Rios', quote: 'I launched my productivity app with Taskify and the UI impressed users from day one.', tag: '#Taskify', tagLink: '/templates/taskify' },
  { name: 'Ethan Brooks', quote: 'I finished my entire AI startup website using Nexus AI over a single weekend.', tag: '#Nexus AI', tagLink: '/templates/nexus-ai' },
  { name: 'Tomás Delgado', quote: 'With TodoFusion, I built and validated a SaaS idea in less than a week.', tag: '#TodoFusion', tagLink: '/templates/todofusion' },
  { name: 'Elise Dubois', quote: "I've tried many templates, but Nexus AI felt the most futuristic and conversion-optimized.", tag: '#Nexus AI', tagLink: '/templates/nexus-ai' },
  { name: 'Derek Huang', quote: 'StudyFlow turned my messy course idea into a beautiful, premium online learning experience.', tag: '#StudyFlow', tagLink: '/templates/studyflow' },
  { name: 'Nina Patel', quote: "Stickify's clean structure and crisp UI instantly gave our SaaS product a trustworthy look.", tag: '#Stickify', tagLink: '/templates/stickify' },
  { name: 'Max Anders', quote: "I've tried many templates, but Nexus AI felt the most futuristic and conversion-optimized.", tag: '#Grido', tagLink: '/templates/grido' },
  { name: 'Jasmine Reed', quote: "I doubled enrollments after switching to StudyFlow. It's clean, organized, and beautifully responsive.", tag: '#StudyFlow', tagLink: '/templates/studyflow' },
]
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 tablet:gap-16 tablet:px-6 tablet:py-24">
      <!-- Heading -->
      <UiSectionHeading
        title="Why creators. Trust Stylokit."
        description="Testimonials from creators using Stylokit to build faster and look better."
      >
        <a
          href="https://tally.so/r/3XPOWY"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          <PhPencilSimpleLine :size="16" weight="duotone" />
          Write review
        </a>
      </UiSectionHeading>

      <!-- Testimonial grid -->
      <div class="grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop:grid-cols-3">
        <UiTestimonialCard
          v-for="t in testimonials"
          :key="t.name"
          :name="t.name"
          :quote="t.quote"
          :tag="t.tag"
          :tag-link="t.tagLink"
        />
      </div>
    </div>
  </section>
</template>
