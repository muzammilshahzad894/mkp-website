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
          style="border-bottom: 1px solid rgba(255, 255, 255, 0.1)"
        >
          <div>
            <h2
              id="transform-heading"
              class="font-abaya uppercase"
              style="
                font-size: clamp(1.6rem, 2.5vw, 2.2rem);
                line-height: 1.15;
                letter-spacing: 0.06em;
              "
            >
              <span class="text-white">Transform </span>
              <span style="color: #c9a96e">Unused Spaces</span>
            </h2>
            <p
              class="mt-3 font-poppins text-[#938F88] text-[14px]"
              style="line-height: 1.75; max-width: 600px; letter-spacing: 0.01em"
            >
              We redesign underused areas like garages and basements into
              functional, well-planned spaces that add comfort, usability, and
              long-term value to your home.
            </p>
          </div>
  
          <!-- Book an appointment button -->
          <div class="shrink-0">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-1.5 rounded-full font-sans font-semibold uppercase text-white transition hover:bg-white/10"
              style="
                height: 44px;
                padding: 0 24px;
                font-size: 10.5px;
                letter-spacing: 0.15em;
                border: 1px solid rgba(255, 255, 255, 0.6);
              "
            >
              Book An Appointment
              <ArrowRight class="w-6 h-4" />
            </NuxtLink>
          </div>
        </div>
  
        <!-- Two-column: images left, services list right -->
        <div
          class="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-14"
        >
          <!-- Left: Two side-by-side photos -->
          <div class="flex gap-2.5 h-[280px] sm:h-[340px] lg:h-full">
            <div class="relative flex-1 overflow-hidden bg-neutral-800 h-full">
              <NuxtImg
                :src="transformImg1"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
  
            <div class="relative flex-1 overflow-hidden bg-neutral-800 h-full">
              <NuxtImg
                :src="transformImg2"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
  
          <!-- Right: Services list -->
          <ul class="space-y-8 lg:space-y-10 lg:pt-2">
            <li v-for="item in services" :key="item.title">
              <h3
                class="font-abaya uppercase text-[#c9a96e] text-[18px]"
                style="letter-spacing: 0.14em; line-height: 1.3"
              >
                {{ item.title }}
              </h3>
              <p class="mt-2.5 font-poppins text-[#938F88] text-justify">
                {{ item.body }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ArrowRight } from "lucide-vue-next";
  
  const transformImg1 = "/images/services/transform-1.jpeg";
const transformImg2 = "/images/services/transform-2.jpeg";

  
  const services = [
    {
      title: "GARAGE CONVERSIONS",
      body: "A garage conversion is one of the most efficient ways to create additional living space without extending your home. Instead of leaving the area underused, we transform it into a fully functional room — whether that’s a home office, gym, or extra living area. The key is making it feel like part of the house, not an afterthought. We carefully plan layout, insulation, and lighting to ensure the space feels comfortable, connected, and designed to be used every day.",
    },
    {
      title: "BASEMENT CONVERSIONS",
      body: "Basements offer huge potential when designed correctly. Often overlooked or underutilised, they can be transformed into high-quality living spaces such as media rooms, guest suites, or private retreats. The challenge lies in light, ventilation, and layout — and that’s where good design makes all the difference. We create basement spaces that feel open, dry, and welcoming, turning what was once a forgotten area into one of the most valuable parts of the home.",
    },
  ];
  </script>