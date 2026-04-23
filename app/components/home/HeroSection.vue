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
      class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center sm:px-10 sm:pb-20 sm:pt-36"
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
        <div class="space-y-4 sm:space-y-5">
          <h1
            id="hero-heading"
            class="font-display text-4xl font-semibold uppercase tracking-[0.12em] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            MKP Design
          </h1>
          <p
            class="text-lg font-normal tracking-[0.03em] text-white/95 sm:text-xl md:text-2xl md:font-light"
          >
            Creating Beautiful Spaces
          </p>
          <p
            class="mx-auto max-w-2xl font-serif text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/95 sm:text-xs md:text-sm"
          >
            We design new builds, extensions &amp; renovations
          </p>
        </div>
      </div>

      <MkpOutlinePillButton to="/contact">
        Get in touch
      </MkpOutlinePillButton>
    </div>
  </section>
</template>

<script setup>
const heroImageUrl = '/images/hero-background.png'
</script>
