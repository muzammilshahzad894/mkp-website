<template>
  <section class="bg-[#121212] py-14 sm:py-16 md:py-20 text-neutral-300">
    <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">

      <!-- Block 1: Image left, text right -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center xl:gap-20">
        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg
            :src="whyChooseImg1"
            alt="Elegant modern interior design space"
            class="h-[320px] w-full object-cover sm:h-[380px] md:h-[500px]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Text -->
        <div class="flex flex-col justify-center">
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-white mb-1">
            Interior Design:
          </h2>
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-[#c9b8a0] mb-6">
            Spaces That Feel Right.
          </h2>

          <div class="font-poppins leading-[1.75] text-neutral-400">
            <p>Our interior design approach focuses on creating spaces that feel calm, functional, and deeply connected to how you live every day.</p>
            <p>We don’t just style rooms — we shape atmosphere. Light, texture, proportion, and materiality are all carefully considered to create balance and flow throughout your home.</p>
            <p>Every interior is designed with intention. From bespoke joinery to spatial layout, we ensure each element works together to create a cohesive and refined environment.</p>
            <p>The result is not just a beautiful space, but a home that feels natural, comfortable, and thoughtfully designed from the inside out.</p>
          </div>
        </div>
      </div>

      <!-- Block 2: Text left, image right -->
      <div class="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center xl:gap-20 my-15">
        <!-- Text -->
        <div class="flex flex-col justify-center">
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-white mb-1">
            Design Philosophy
          </h2>
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-[#c9b8a0] mb-6">
            Detail, Balance & Flow
          </h2>

          <div class="font-poppins leading-[1.75] text-neutral-400">
            <p>We believe great interior design is quiet, intentional, and deeply personal. It should enhance how you live, not overwhelm the space.</p>
            <p>Material selection, lighting design, and spatial planning all play a critical role in shaping the atmosphere of your home.</p>
            <p>We tailor every detail to your lifestyle — whether that’s open-plan living, private retreats, or multifunctional spaces that adapt over time.</p>
            <p>Our goal is to create interiors that feel timeless, cohesive, and effortlessly connected to the architecture itself.</p>
          </div>
        </div>

        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg
            :src="whyChooseImg2"
            alt="Minimal luxury interior with natural light"
            class="h-[320px] w-full object-cover sm:h-[380px] md:h-[500px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const whyChooseImg1 = '/images/about/why-choose-2.png'
const whyChooseImg2 = '/images/about/why-choose-1.png'
</script>