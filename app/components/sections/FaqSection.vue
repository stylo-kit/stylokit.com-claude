<script setup lang="ts">
const faqs = [
  {
    title: 'What do I get with the All Access pass?',
    description: "You'll unlock lifetime access to every Stylokit template — including current and future Framer, Nuxt, and Figma files. No recurring fees. One payment. Forever.",
  },
  {
    title: 'Can I use the templates for client work?',
    description: 'Absolutely. All Stylokit templates include a commercial license, allowing unlimited use in both personal and client projects.',
  },
  {
    title: 'Do I need a paid Framer plan to use these?',
    description: "Nope! You can fully use the templates with Framer's free plan. However, to publish on your own custom domain, you'll need a paid Framer plan.",
  },
  {
    title: 'Will I get updates after purchase?',
    description: "Yes — once you purchase All Access, you'll get lifetime updates on all existing templates plus instant access to any new ones we release.",
  },
  {
    title: 'Can I buy a single template instead?',
    description: "Yes, individual templates can be purchased separately. But if you're planning to use more than one, the All Access bundle gives you much better value.",
  },
  {
    title: 'How do I access the templates after purchase?',
    description: "Once you complete your purchase, you'll receive instant access via email, along with a private dashboard to view and duplicate all your templates.",
  },
]
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-12 pb-20 tablet:gap-16 tablet:px-6 tablet:pt-24 tablet:pb-32">
      <!-- Section heading -->
      <UiSectionHeading
        title="Frequently Asked Questions"
        description="Here are answers to common questions about Stylokit templates, access, and usage. Still unsure? Reach out anytime — we're here to help."
      />

      <!-- FAQ grid -->
      <div class="grid grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-3">
        <UiListContentCard
          v-for="faq in faqs"
          :key="faq.title"
          :title="faq.title"
          :description="faq.description"
        />
      </div>
    </div>
  </section>
</template>
