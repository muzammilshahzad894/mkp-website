<template>
    <section class="bg-white text-neutral-700" aria-labelledby="about-heading">
      <div
        class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20"
      >
        <h2
          id="about-heading"
          class="font-abaya text-3xl font-normal tracking-[0.02em] text-[#c4b59a] sm:text-4xl md:text-[2.35rem]"
        >
          Loft Conversions
        </h2>
        <div class="mt-3 h-px w-full bg-neutral-200" aria-hidden="true" />
  
        <div
          class="mt-8 grid gap-9 sm:mt-9 sm:gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch"
        >
          <div
            class="space-y-5 text-[15px] font-medium leading-[1.75] text-neutral-600 sm:text-base font-poppins"
          >
            <p class="text-justify">
              A loft conversion is one of the most effective ways to unlock space
              within your home without extending its footprint.
            </p>
            <p class="text-justify">
              At MKPDesign, we transform unused roof areas into carefully designed
              living spaces that feel fully integrated with the rest of your home.
              Whether it’s a bedroom, home office, or private retreat, every loft
              is designed with purpose.
            </p>
            <p class="text-justify">
              The key to a successful loft conversion isn’t just adding space, but
              making it functional, comfortable, and filled with natural light.
              Poorly designed lofts often feel cramped or disconnected. We ensure
              the opposite.
            </p>
            <p class="text-justify">
              From layout planning to storage solutions, every detail is
              considered. We maximise head height, introduce light in the right
              places, and create clean, minimal spaces that feel open and
              intentional.
            </p>
            <p class="text-justify">
              We also guide you on what works and what doesn’t. Not every idea is
              practical within a roof structure, and we make sure every decision
              leads to a better end result.
            </p>
            <p class="text-justify">
              The result is a loft space that doesn’t feel like an addition, but a
              natural extension of your home — designed to be lived in every day.
            </p>
            <div class="pt-1">
              <CommonAppButton to="/contact" variant="onLight" class="font-abaya">
                Discuss Your Loft Project
              </CommonAppButton>
            </div>
          </div>
  
          <div
            class="relative min-h-[260px] w-full overflow-hidden sm:min-h-[300px] lg:min-h-full"
          >
            <NuxtImg
              :src="aboutImage"
              width="900"
              height="800"
              class="block h-full w-full object-contain lg:absolute lg:inset-0 lg:min-h-0"
              alt="Modern loft conversion interior with skylights and minimal design"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
  

      </div>
    </section>
  </template>
  
  <script setup>
  const aboutImage =  '/images/services/newbuildhero.png';
  </script>