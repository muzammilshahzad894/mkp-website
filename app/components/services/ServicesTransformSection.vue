<template>
  <section
    id="our-services"
    class="text-white"
    style="background-color: #141414"
    aria-labelledby="transform-heading"
  >
    <div
      class="mx-auto w-full px-8 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      style="max-width: 1400px"
    >
      <!-- Section header -->
      <div
        class="flex flex-col gap-6 pb-10 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
        style="border-bottom: 1px solid rgba(255,255,255,0.1)"
      >
        <div>
          <h2
            id="transform-heading"
            class="font-serif font-bold uppercase"
            style="
              font-size: clamp(1.6rem, 2.5vw, 2.2rem);
              line-height: 1.15;
              letter-spacing: 0.06em;
            "
          >
            <span class="text-white">Transform </span>
            <span style="color: #c9a96e">Your Home</span>
          </h2>
          <p
            class="mt-3 font-sans"
            style="
              color: rgba(255,255,255,0.7);
              font-size: 13.5px;
              line-height: 1.75;
              max-width: 420px;
              letter-spacing: 0.01em;
            "
          >
            We Design And Plan Stunning Extensions That Add Space, Light,
            And Value To Your Property All Tailored To Your Lifestyle.
          </p>
        </div>

        <!-- Book an appointment button -->
        <div class="shrink-0">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2.5 rounded-full font-sans font-semibold uppercase text-white transition hover:bg-white/10"
            style="
              height: 44px;
              padding: 0 24px;
              font-size: 10.5px;
              letter-spacing: 0.15em;
              border: 1px solid rgba(255,255,255,0.6);
            "
          >
            Book An Appointment
            <span style="font-size: 14px; font-weight: 300" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Two-column: images left, services list right -->
      <div
        class="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-14"
      >
        <!-- Left: Two side-by-side photos -->
        <div class="flex gap-2.5" style="height: min(60vw, 480px)">
          <div class="relative flex-1 overflow-hidden bg-neutral-800">
            <img
              :src="extensionsImg1"
              width="600"
              height="800"
              class="absolute inset-0 h-full w-full object-cover"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="relative overflow-hidden bg-neutral-800" style="width: 42%">
            <img
              :src="extensionsImg2"
              width="400"
              height="800"
              class="absolute inset-0 h-full w-full object-cover"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Right: Services list -->
        <ul class="space-y-8 lg:space-y-10 lg:pt-2">
          <li v-for="item in services" :key="item.title">
            <h3
              class="font-serif font-semibold uppercase"
              style="
                color: #c9a96e;
                font-size: clamp(0.8rem, 1.2vw, 1rem);
                letter-spacing: 0.14em;
                line-height: 1.3;
              "
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-2.5 font-sans"
              style="
                color: rgba(255,255,255,0.7);
                font-size: 13.5px;
                line-height: 1.8;
                letter-spacing: 0.01em;
              "
            >
              {{ item.body }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const extensionsImg1 = '/images/services/transform-1.png';
const extensionsImg2 = '/images/services/transform-2.png';

const services = [
  {
    title: 'Single-Storey Extensions',
    body: 'Perfect for expanding your kitchen, creating open-plan living, or adding a bright new space on one level.'
  },
  {
    title: 'Double-Storey Extensions',
    body: 'Add extra bedrooms, bathrooms, and living areas upstairs to accommodate your family and increase your home\'s value.'
  },
  {
    title: 'Rear & Side Extensions',
    body: 'Make the most of your garden or side space with smart, modern extensions that enhance both function and style.'
  }
]
</script>