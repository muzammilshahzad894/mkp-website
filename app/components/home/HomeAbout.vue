<template>
  <section class="bg-white text-neutral-700" aria-labelledby="about-heading">
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20"
    >
      <h2
        id="about-heading"
        class="font-abaya text-3xl font-normal tracking-[0.02em] text-[#c4b59a] sm:text-4xl md:text-[2.35rem]"
      >
        MKP Design
      </h2>
      <div class="mt-3 h-px w-full bg-neutral-200" aria-hidden="true" />

      <div
        class="mt-8 grid gap-9 sm:mt-9 sm:gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch"
      >
        <div
          class="space-y-5 text-[15px] font-medium leading-[1.75] text-neutral-600 sm:text-base font-poppins"
        >
          <p class="text-justify">
            Most people think they need more space. What they actually need is a
            space that’s been designed properly
          </p>
          <p class="text-justify">
            At MKPDesign, we don’t just add square metres. We rethink how the
            home works around you. How you move through it. How light enters.
            How each space connects and actually gets used day to day. The
            result isn’t just more room. It’s a better way of living
          </p>
          <p class="text-justify">
            Too many homes in the UK have been extended without real thought.
            Basic layouts, awkward rooms, and details that feel like an
            afterthought. Extensions that look like add-ons rather than part of
            the home. We approach it differently.
          </p>
          <p class="text-justify">
            Every decision is considered. From the overall layout down to the
            details most people overlook. Storage designed in seamlessly. Spaces
            that bring people together. Clean, minimal forms that feel
            intentional, not forced
          </p>
          <p>
            We don’t say yes to everything either. If something doesn’t work,
            we’ll tell you and explain why. Because getting it right matters
            more than just getting it done. This is why our projects feel
            different. You can feel it the moment you walk in. Not because it’s
            overdesigned, but because everything makes sense.
          </p>
          <p>
            We take on a limited number of projects to ensure each one receives
            the attention it deserves.
          </p>
          <div class="pt-1">
            <CommonAppButton to="/contact" variant="onLight" class="font-abaya">
              Discuss Your Project
            </CommonAppButton>
          </div>
        </div>

        <div
          class="relative min-h-[260px] w-full overflow-hidden sm:min-h-[300px] lg:min-h-full"
        >
          <img
            :src="aboutImage"
            width="900"
            height="700"
            class="block h-full w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
            alt="Contemporary white home with dark window frames and brick driveway"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <CommonPartnerSlide />
    </div>
  </section>
</template>

<script setup>
const aboutImage = "/images/home/about/about-house.jpg";
</script>
