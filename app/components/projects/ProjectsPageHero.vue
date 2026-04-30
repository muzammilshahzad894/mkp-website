<template>
  <section
    class="relative min-h-[min(100dvh,880px)] w-full bg-neutral-900 font-sans text-white"
    aria-labelledby="portfolio-hero-heading"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${heroImage}')` }"
      role="presentation"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/12 via-black/16 to-black/22"
      role="presentation"
    />

    <LayoutAppNavbar />

    <div
      class="relative z-10 mx-auto flex min-h-[min(100dvh,880px)] w-full max-w-[min(100%,88vw,1320px)] flex-col justify-end px-4 pb-6 pt-32 sm:px-6 sm:pb-8 md:pb-10 lg:px-8"
    >
      <div class="w-full">
        <!-- One line: OUR (white) + COMPLETE PORTFOLIO (gold) -->
        <h1
          id="portfolio-hero-heading"
          class="font-abaya text-[clamp(1.35rem,3.8vw,2.75rem)] uppercase leading-tight tracking-[0.04em] sm:tracking-[0.05em]"
        >
          <span class="text-white">Our</span><span class="text-[#c9b896]"> complete portfolio</span>
        </h1>

        <!-- Rule under full heading, content width -->
        <div
          class="mt-4 h-px w-full bg-white/55 sm:mt-5"
          aria-hidden="true"
        />

        <!-- Copy + button one row; left: exactly two lines; right: CTA, no arrow -->
        <div
          class="mt-5 flex w-full flex-col gap-6 sm:mt-6 md:flex-row md:items-end md:justify-between md:gap-8 lg:gap-10"
        >
          <p
            class="shrink-0 font-poppins text-white"
          >
            Discover how MKPDesign transforms ideas into stunning, functional spaces.<br />
            Each project below includes a short overview, images, and key outcomes —
            just like a case study.
          </p>
          <div class="flex shrink-0 md:justify-end">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-neutral-950 px-9 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 sm:text-[11px] md:self-end"
            >
              Get in touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImage = '/images/projects/hero.png'
</script>
