<template>
  <section class="bg-white py-14 sm:py-16 md:py-20">
    <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">

      <!-- Block 1: Image left, text right -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center xl:gap-20">
        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg
            :src="whyChooseImg1"
            alt="Modern architecture interior"
            class="h-[320px] w-full object-cover sm:h-[380px] md:h-[500px]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Text -->
        <div class="flex flex-col justify-center">
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-neutral-900 mb-1">
            Modern Architecture:
          </h2>
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-[#a99b83] mb-6">
            Trust &amp; Excellence.
          </h2>
          <div class="font-poppins leading-[1.75] text-neutral-500">
            <p>At MKPDesign, we are your trusted architectural partner, creating exceptional residential spaces in London and Surrey. Since 2019, we’ve built a reputation for reliability and a client-first approach.</p>
            <p>With 80% of our work from referrals, our clients trust us and recommend us to others. Trust is the foundation of our success.</p>
            <p>We specialize in modern home extensions, loft conversions, and bespoke designs, merging functionality with contemporary aesthetics. Great architecture inspires connections and transforms lives.</p>
            <p>Let MKPDesign turn your vision into reality. Whether it’s a new build, single-storey extension, double-storey addition, or loft conversion, we’re here to guide you. Contact us today for your Free Consultation and see how we can enhance your home with confidence and creativity.</p>
          </div>
        </div>
      </div>

      <!-- Block 2: Text left, image right -->
      <div class="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center xl:gap-20 my-15">
        <!-- Text -->
        <div class="flex flex-col justify-center">
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-neutral-900 mb-1">
            Why Homeowners
          </h2>
          <h2 class="font-abaya text-[clamp(1.9rem,3.5vw,2.7rem)] uppercase leading-[1.1] tracking-[0.03em] text-[#a99b83] mb-6">
            Choose MKPDesign
          </h2>
          <div class="font-poppins leading-[1.75] text-neutral-500">
            <p>At MKPDesign, we know that starting a home renovation or construction project can be daunting, especially for first-timers. Our mission is to simplify the process, ease your stress, and deliver reliable results.</p>
            <p>Proven Success: With a 99.5% planning approval rate and 100% 5-star reviews, our results speak volumes.</p>
            <p>Transparent Process: From the initial consultation to final approval, we ensure clear communication and upfront advice.</p>
            <p>Tailored Designs: We approach each project with fresh eyes, making sure your space reflects your personality and lifestyle.</p>
            <p>Collaborative Approach: We don’t just design; we build relationships. Your vision fuels our creativity.</p>
          </div>
        </div>

        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg
            :src="whyChooseImg2"
            alt="Modern kitchen interior"
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
const whyChooseImg1 = '/images/about/why-choose-1.png'
const whyChooseImg2 = '/images/about/why-choose-2.png'
</script>