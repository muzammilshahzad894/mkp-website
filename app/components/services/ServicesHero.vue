<template>
  <section
    class="relative min-h-screen w-full overflow-hidden bg-neutral-900 font-sans text-white"
    aria-labelledby="hero-heading"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${heroImageUrl}')` }"
      role="presentation"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/12 via-black/16 to-black/22"
      role="presentation"
    />

    <LayoutAppNavbar />

    <!-- Content: heading bottom-left, buttons bottom-right -->
    <div
      class="relative z-10 mx-auto flex w-full flex-col justify-end px-8 pb-14 pt-32 sm:px-10 lg:px-16 max-w-[min(100%,85vw,1400px)] min-h-[min(100svh,900px)]"
    >
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <!-- Heading -->
        <h1
          id="services-hero-heading"
          class="font-serif font-bold uppercase text-white text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.13] tracking-[0.04em]"
        >
          Transform your home<br />
          with a <span class="text-[#c9b99a]">beautiful extension</span>
        </h1>

        <!-- Buttons -->
        <div class="flex shrink-0 flex-wrap items-center gap-2.5 sm:gap-3">
          <!-- Latest Project -->
          <NuxtLink
            to="/projects"
            class="inline-flex h-10 sm:h-[46px] items-center gap-2 rounded-full
                   border border-white/50 bg-white/15 backdrop-blur-sm
                   px-4 sm:px-6
                   font-sans text-[9px] sm:text-[10.5px] font-semibold uppercase
                   tracking-[0.15em] text-white
                   transition hover:bg-white/25
                   whitespace-nowrap"
          >
            Latest Project
            <span class="text-sm font-light" aria-hidden="true">→</span>
          </NuxtLink>

          <!-- Get in Touch -->
          <NuxtLink
            to="/contact"
            class="inline-flex h-10 sm:h-[46px] items-center gap-2 rounded-full
                   bg-white
                   px-4 sm:px-6
                   font-sans text-[9px] sm:text-[10.5px] font-semibold uppercase
                   tracking-[0.15em] text-neutral-900
                   transition hover:bg-neutral-100
                   whitespace-nowrap"
          >
            Get in Touch
            <span class="text-sm font-light text-neutral-900" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImageUrl = '/images/services/hero.png'
</script>