<template>
  <section class="bg-white pt-10 pb-20">
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-15"
    >
      <!-- Heading -->
      <div class="mb-8">
        <h2
          class="font-abaya text-[clamp(1.8rem,3.2vw,2.5rem)] uppercase tracking-[0.03em] leading-tight"
        >
          <span class="text-neutral-900">WORKED IN </span>
          <span class="text-[#a99b83]">THIS AREA</span>
        </h2>
        <p
          class="mt-3 max-w-2xl font-poppins text-[0.875rem] leading-[1.75] text-neutral-500"
        >
          Rooted in context and driven by innovation, our work in this area
          blends functionality, aesthetics, and sustainability to create
          meaningful architectural experiences.
        </p>
      </div>

      <!-- Outer card: warm cream bg -->
      <div
        style="background-color: #f9f7f4; padding: 26px; min-height: 420px"
        class="flex flex-col md:flex-row gap-4 overflow-hidden"
      >
        <!-- Map area -->

        <div class="flex-1 relative overflow-hidden min-h-[320px] md:min-h-0">
          <iframe
            class="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps?q=${areas[activeIndex]}&output=embed`"
          ></iframe>
        </div>

        <!-- Service list panel: transparent bg, items handle their own look -->
        <div class="flex flex-col md:w-[300px] lg:w-[340px] shrink-0 gap-3">
          <div
            v-for="(area, index) in areas"
            :key="area"
            class="flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors duration-150"
            :style="
              index === activeIndex
                ? 'background-color: #F3F0EB; border: 1px solid rgba(0,0,0,0.0);'
                : 'background-color: #F9F7F4; border: 1px solid rgba(0,0,0,0.03);'
            "
            @click="activeIndex = index"
          >
            <!-- Filled pin for active, outline pin for inactive -->
            <MapPinned class="w-5 h-5 text-neutral-700" />
            <svg
              v-if="index === activeIndex"
              class="shrink-0 w-4 h-4"
              style="color: #1a1a1a"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
              />
            </svg>
            <svg
              v-else
              class="shrink-0 w-4 h-4"
              style="color: #999999"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              />
              <circle cx="12" cy="9" r="2.5" />
            </svg>

            <!-- Label -->
            <span
              class="font-poppins text-[13px] tracking-[0.02em]"
              :style="
                index === activeIndex
                  ? 'color:#1a1a1a; font-weight:700;'
                  : 'color:#555555; font-weight:400;'
              "
            >
              Architectural Services in {{ area }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <CommonPartnerSlide />
  </section>
</template>

<script setup>
import { MapPinned } from "lucide-vue-next";

import { ref } from "vue";

const mapImage = "/images/about/map.png";
const activeIndex = ref(0);

const areas = [
  "Croydon",
  "Bromley",
  "Sutton",
  "Epsom",
  "Chigwell",
  "Kingston",
  "Merton",
  "Harrow",
];
</script>
