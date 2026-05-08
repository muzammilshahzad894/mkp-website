<template>
  <section class="bg-white py-14 sm:py-16 md:py-20">
    <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">

      <div class="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] md:items-start xl:gap-20">

        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg
            :src="founderImage"
            alt="Mustapha Kerkoud"
            class="h-[360px] w-full object-cover object-top sm:h-[400px] md:h-[440px]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Content -->
        <div class="flex flex-col h-full">
            <h2 class="font-abaya text-[clamp(1.8rem,3.2vw,2.5rem)] uppercase tracking-[0.06em] text-neutral-900 mb-6">
                Mustapha Kerkoud
            </h2>

            <p class="font-poppins leading-[1.85] text-neutral-500">
                I founded MKPDesign in 2019 with a clear vision: to create an architectural practice built on trust, transparency, and genuine connection. With both a Master's and undergraduate degree in Architecture from Kingston University and years of experience at renowned architectural practices, I saw an opportunity to approach architecture differently. I wanted to build a firm where clients feel supported, informed, and confident throughout every stage of their project. At MKPDesign, we focus on delivering thoughtful, client-centered architecture across South London and Surrey, transforming visions into spaces that truly enhance everyday living.
            </p>

            <div class="mt-auto pt-10">
                <p class="font-abaya text-[14px] font-semibold uppercase tracking-[0.22em] text-[#D0BC9A]">
                Founder &amp; Lead Designer
                </p>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const founderImage = '/images/about/founder.png'
</script>