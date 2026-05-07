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

    <div
      class="relative z-10 mx-auto flex min-h-[min(100dvh,880px)] w-full max-w-[min(100%,88vw,1320px)] flex-col justify-end px-4 pb-6 pt-32 sm:px-6 sm:pb-8 md:pb-10 lg:px-8"
    >
      <div class="w-full">
        <h1
          id="portfolio-hero-heading"
          class="font-abaya text-[clamp(1.35rem,3.8vw,2.75rem)] uppercase leading-tight tracking-[0.04em] sm:tracking-[0.05em]"
        >
          <span class="text-white">About Us</span>
        </h1>

        <!-- Rule under full heading, content width -->
        <div
          class="mt-4 h-px w-full bg-white/55 sm:mt-5"
          aria-hidden="true"
        />

        <!-- Copy + button one row; left: exactly two lines; right: CTA, no arrow -->
        <div
          class="mt-5 w-full sm:mt-6"
        >
          <p
            class="shrink-0 font-poppins text-white"
          >
            At MKPDesign, we are your trusted architectural partner, creating outstanding residential spaces in London and Surrey. Since 2019, we've earned a reputation for transparency and prioritizing our clients. With 80% of our work coming from referrals, our clients confidently recommend us to their friends and family.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImage = '/images/about/hero.png'
</script>
