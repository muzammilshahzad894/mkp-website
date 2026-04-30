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
      class="absolute inset-0 bg-gradient-to-b from-black/12 via-black/16 to-black/22"
      role="presentation"
    />

    <LayoutAppNavbar />

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
          >
            MKP Design
          </h1>
          <p
            class="font-dm tracking-[0.03em] text-white/95 sm:text-xl md:text-2xl"
          >
            Creating Beautiful Spaces
          </p>
          <p
            class="font-abaya  mt-6 uppercase tracking-[0.1em] text-white/95 sm:text-sm md:text-lg"
          >
            We design new builds, extensions &amp; renovations
          </p>
        </div>
      </div>

      <MkpOutlinePillButton to="/contact" class="font-abaya">
        Get in touch
      </MkpOutlinePillButton>
    </div>
  </section>
</template>

<script setup>
const heroImageUrl = '/images/hero-background.png'
</script>
