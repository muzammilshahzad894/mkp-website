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
          <span class="text-white">BLOG & INSIGHTS</span>
        </h1>

        <!-- Rule under full heading, content width -->
        <div
          class="mt-4 h-px max-w-[min(100%,88vw,1150px)] bg-white bg-white/55"
          aria-hidden="true"
        />

        <!-- Copy + button one row; left: exactly two lines; right: CTA, no arrow -->
        <div
          class="mt-5 w-full sm:mt-6 md:flex-row md:items-end md:justify-between"
        >
          <p
            class="shrink-0 font-poppins text-white"
          >
            Stay informed and inspired with our latest articles on architecture, design trends, and industry insights. Explore our blog to find <br /> 
            valuable information and creative ideas for your projects.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImage = '/images/blogs/hero.png'
</script>
