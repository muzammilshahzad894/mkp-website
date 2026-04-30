<template>
  <section
    id="recent-extensions"
    class="bg-white text-neutral-900"
    aria-labelledby="recent-extensions-heading"
  >
    <div
      class="mx-auto w-full px-8 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      style="max-width: 1400px"
    >
      <!-- Header row -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <h2
          id="recent-extensions-heading"
          class="shrink-0 font-abaya uppercase"
          style="
            font-size: clamp(1.6rem, 2.6vw, 2.4rem);
            line-height: 1.15;
            letter-spacing: 0.03em;
            color: #1a1a1a;
          "
        >
          Our Recent <span style="color: #c9a96e">Extensions</span>
        </h2>
        <p
          class="font-poppins text-neutral-600 max-w-[480px]"
        >
          With A Passion For Thoughtful Design And Meticulous Planning,
          MKPDesign Transforms Ideas Into Functional, Beautiful Spaces
          Tailored To Every Client's Lifestyle.
        </p>
      </div>

      <!-- 3×2 Photo grid -->
      <div
        class="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:mt-12 lg:grid-cols-3"
        style="row-gap: 10px; column-gap: 10px"
      >
        <div
          v-for="i in 6"
          :key="i"
          class="relative overflow-hidden bg-neutral-200"
          style="aspect-ratio: 4/3"
        >
          <img
            :src="extensions[i - 1]"
            width="800"
            height="600"
            class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const extensions = [
  '/images/services/extension-1.png',
  '/images/services/extension-2.png',
  '/images/services/extension-3.png',
  '/images/services/extension-4.png',
  '/images/services/extension-5.png',
  '/images/services/extension-6.png',
]
</script>