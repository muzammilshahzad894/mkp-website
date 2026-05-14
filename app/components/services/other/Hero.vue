<template>
    <section
      class="relative min-h-screen w-full overflow-hidden bg-neutral-900 font-sans text-white"
      aria-labelledby="hero-heading"
    >

      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('${heroImageUrl}')` }"
        role="presentation"
      />
      <div
        class="absolute inset-0 z-10 hero-overlay"
        role="presentation"
      />
  

      <div
        class="relative z-10 mx-auto flex w-full flex-col justify-end px-8 pb-14 pt-32 sm:px-10 lg:px-16 max-w-[min(100%,85vw,1400px)] min-h-[min(100svh,900px)]"
      >
        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <h1
            id="services-hero-heading"
            class="font-abaya uppercase text-white text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.13] tracking-[0.04em]"
          >
            Plan with clarity<br />
            design with <span class="text-[#c9b99a]">confidence</span>
          </h1>
  

          <div class="flex shrink-0 flex-wrap items-center gap-2.5 sm:gap-3">

            <NuxtLink
              to="/projects"
              class="inline-flex h-10 sm:h-[46px] items-center gap-2 rounded-full
                     border border-white/50 bg-white/15 backdrop-blur-sm
                     px-4 sm:px-6
                     font-dm text-[9px] sm:text-[10.5px] font-semibold uppercase
                     tracking-[0.15em] text-white
                     transition hover:bg-white/25
                     whitespace-nowrap"
            >
              Explore Our Work
              <ArrowRight class="w-6 h-4" />
            </NuxtLink>
  

            <NuxtLink
              to="/contact"
              class="inline-flex h-10 sm:h-[46px] items-center gap-2 rounded-full
                     bg-white
                     px-4 sm:px-6
                     font-dm text-[9px] sm:text-[10.5px] font-semibold uppercase
                     tracking-[0.15em] text-neutral-900
                     transition hover:bg-neutral-100
                     whitespace-nowrap"
            >
              Start Your Project
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ArrowRight } from 'lucide-vue-next'
  
  const heroImageUrl = '/images/services/otherhero.png'
  </script>
