<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Use — Stylokit',
  description: 'Terms of use for Stylokit premium Framer, Nuxt, and Figma templates.',
  ogTitle: 'Terms of Use — Stylokit',
  ogDescription: 'Terms of use for Stylokit premium Framer, Nuxt, and Figma templates.',
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="mx-auto max-w-[800px] px-6 py-24">
      <!-- Back link -->
      <UiScrollReveal>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-1.5 text-[15px] leading-5 text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
          </svg>
          Back to Home
        </NuxtLink>
      </UiScrollReveal>

      <!-- Page heading -->
      <UiScrollReveal :delay="50">
        <h1 class="mt-8 text-[36px] leading-[44px] font-semibold text-zinc-950">
          Terms of Use
        </h1>
        <p class="mt-3 text-[15px] leading-5 text-zinc-500">
          Last updated: January 15, 2025
        </p>
      </UiScrollReveal>

      <!-- Content -->
      <div class="mt-12 space-y-10">
        <!-- Section 1 -->
        <UiScrollReveal :delay="100">
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              1. Acceptance of Terms
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                By accessing and using the Stylokit website and purchasing any digital products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                These terms apply to all visitors, users, and customers of stylokit.com. We reserve the right to update or modify these terms at any time without prior notice.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 2 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              2. Products and Services
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Stylokit offers premium digital templates and design assets for Framer, Nuxt, and Figma. All products are delivered digitally and are available for download immediately after purchase.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Product descriptions, features, and previews are provided for informational purposes. While we strive to accurately represent our products, minor variations may occur between previews and the actual delivered product.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 3 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              3. Account and Purchases
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Purchases are processed through Lemon Squeezy, our third-party payment provider. By completing a purchase, you also agree to Lemon Squeezy's terms of service.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 4 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              4. License and Usage Rights
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Upon purchase, you are granted a license to use the digital products in accordance with our License Agreement. Please refer to the <NuxtLink to="/license" class="text-zinc-950 underline underline-offset-2 hover:text-purple-600 transition-colors">License</NuxtLink> page for full details on permitted and restricted uses.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                All intellectual property rights in our products remain with Stylokit. Your purchase grants you a usage license, not ownership of the underlying intellectual property.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 5 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              5. Refund Policy
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Due to the digital nature of our products, all sales are generally final. However, if you experience technical issues that prevent you from using a purchased product, please contact our support team and we will work to resolve the issue.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Refund requests are handled on a case-by-case basis. We encourage you to review product previews and documentation carefully before making a purchase.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 6 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              6. Prohibited Conduct
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                You agree not to misuse our services. This includes, but is not limited to:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-[15px] leading-[22px] text-zinc-600">
                <li>Redistributing or reselling our products without authorization</li>
                <li>Attempting to reverse-engineer or extract source files beyond the intended use</li>
                <li>Using our products for unlawful purposes</li>
                <li>Interfering with or disrupting the website or its infrastructure</li>
                <li>Impersonating Stylokit or misrepresenting your affiliation with us</li>
              </ul>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 7 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              7. Limitation of Liability
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Stylokit and its creators shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services. Our total liability shall not exceed the amount paid by you for the specific product in question.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Our products are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 8 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              8. Third-Party Services
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Our website may contain links to third-party websites or services, including Lemon Squeezy for payments and Framer for template hosting. We are not responsible for the content, privacy policies, or practices of any third-party services.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 9 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              9. Changes to Terms
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website and products after any changes constitutes your acceptance of the updated terms.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 10 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              10. Contact Information
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                If you have any questions about these Terms of Use, please reach out to us through our website or contact support.
              </p>
            </div>
          </section>
        </UiScrollReveal>
      </div>
    </div>
  </div>
</template>
