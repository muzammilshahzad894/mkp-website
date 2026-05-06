<template>
  <section
    class="relative min-h-screen w-full overflow-hidden bg-neutral-900 font-sans text-white"
    aria-labelledby="hero-heading"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 z-0 h-full w-full object-cover"
      :poster="heroImage"
    >
      <source :src="heroVideo" type="video/mp4" />
    </video>

    <!-- Lighter single overlay — enough for legibility, not enough to kill the video -->
    <div
      class="absolute inset-0 z-10"
      style="background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.20) 0%,
        rgba(0,0,0,0.35) 40%,
        rgba(0,0,0,0.40) 70%,
        rgba(0,0,0,0.25) 100%
      );"
      role="presentation"
    />

    <div
      class="relative z-10 flex min-h-screen -translate-y-6 flex-col items-center justify-center px-6 pb-16 pt-32 text-center sm:px-10 sm:pb-20 sm:pt-36"
    >
      <div class="mb-8 flex flex-col items-center gap-6 sm:mb-10">
        <img
          src="/images/brand/mkp-mark.png"
          width="88"
          height="88"
          class="h-10 w-auto object-contain opacity-95 sm:h-11 md:h-12"
          alt=""
          loading="eager"
          decoding="async"
        />
        <div class="flex flex-col items-center gap-2 sm:gap-3">
          <h1
            id="hero-heading"
            class="font-dm text-4xl uppercase tracking-[0.05em] sm:text-4xl md:text-5xl lg:text-6xl -mt-3"
            style="text-shadow: 0 2px 24px rgba(0,0,0,0.75), 0 1px 6px rgba(0,0,0,0.9);"
          >
            MKP Design
          </h1>
          <p
            class="font-dm tracking-[0.03em] text-white/95 sm:text-xl md:text-2xl"
            style="text-shadow: 0 1px 14px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.7);"
          >
            Creating Beautiful Spaces
          </p>
          <p
            class="font-abaya mt-6 uppercase tracking-[0.1em] text-white/90 sm:text-sm md:text-lg"
            style="text-shadow: 0 1px 10px rgba(0,0,0,0.75), 0 1px 3px rgba(0,0,0,0.6);"
          >
            We design new builds, extensions &amp; renovations
          </p>
        </div>
      </div>

      <CommonAppButton to="/contact" class="font-abaya">
        Get in touch
      </CommonAppButton>
    </div>
  </section>
</template>

<script setup>
const heroImage = '/images/home/hero-background.png'
const heroVideo = '/videos/home/hero.mp4'
</script>