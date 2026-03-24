<script setup lang="ts">
useSeoMeta({
  title: 'License — Stylokit',
  description: 'License agreement for Stylokit digital products. Understand what you can and cannot do with your purchased templates.',
  ogTitle: 'License — Stylokit',
  ogDescription: 'License agreement for Stylokit digital products. Understand what you can and cannot do with your purchased templates.',
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
          License
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
              1. License Overview
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                This License Agreement outlines the terms under which you may use digital products purchased from Stylokit. By purchasing and downloading any product, you agree to the terms of this license.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Each purchase grants you a license to use the product. You do not acquire ownership of the intellectual property — only the right to use it under the conditions described below.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 2 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              2. What You Can Do
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                With a standard license, you are permitted to:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-[15px] leading-[22px] text-zinc-600">
                <li>Use the product for unlimited personal and commercial projects</li>
                <li>Modify and customize the product to suit your needs</li>
                <li>Use the product in end products for yourself or your clients</li>
                <li>Use the product in websites, applications, and digital products</li>
              </ul>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 3 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              3. What You Cannot Do
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                The following uses are strictly prohibited:
              </p>
              <ul class="list-disc pl-6 space-y-2 text-[15px] leading-[22px] text-zinc-600">
                <li>Redistribute, resell, lease, sublicense, or give away the product or any modified version of it as a template, theme, or design asset</li>
                <li>Share your download access or account credentials with others</li>
                <li>Claim authorship or ownership of the original product</li>
                <li>Use the product in a way that competes directly with Stylokit (e.g., selling it on other template marketplaces)</li>
                <li>Include the product files in open-source projects where the source files would be publicly accessible</li>
              </ul>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 4 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              4. All Access License
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                The All Access plan grants you access to all current and future products in the Stylokit library. The same usage rights and restrictions apply to each individual product within the bundle.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                The All Access license is a one-time purchase with lifetime access. You will receive free updates to all existing products and access to any new products added to the library.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 5 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              5. Free Products
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Free products (freebies) are subject to the same license terms as paid products. You may use them for personal and commercial projects, but you may not redistribute, resell, or claim them as your own.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 6 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              6. Intellectual Property
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                All products, including their design, code, structure, and documentation, are the intellectual property of Stylokit and are protected by copyright and other intellectual property laws.
              </p>
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Your license grants you usage rights only. It does not transfer any ownership or intellectual property rights to you.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 7 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              7. Termination
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                This license is effective until terminated. We may terminate your license if you fail to comply with any of the terms outlined in this agreement. Upon termination, you must stop using the product and destroy all copies in your possession.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 8 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              8. Disclaimer
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                Products are provided "as is" without warranty of any kind. Stylokit does not guarantee that the products will be error-free or uninterrupted. We are not liable for any damages arising from the use or inability to use our products.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 9 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              9. Changes to License
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                We reserve the right to modify this license at any time. Changes will be posted on this page with an updated revision date. Continued use of our products after changes constitutes acceptance of the updated license.
              </p>
            </div>
          </section>
        </UiScrollReveal>

        <hr class="border-zinc-300" />

        <!-- Section 10 -->
        <UiScrollReveal>
          <section>
            <h2 class="text-[20px] leading-[30px] font-medium text-zinc-950">
              10. Contact
            </h2>
            <div class="mt-4 space-y-4">
              <p class="text-[15px] leading-[22px] text-zinc-600">
                If you have questions about this license or need clarification on permitted uses, please reach out to us through our website or contact support.
              </p>
            </div>
          </section>
        </UiScrollReveal>
      </div>
    </div>
  </div>
</template>
