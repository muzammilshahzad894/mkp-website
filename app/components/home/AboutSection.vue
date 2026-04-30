<template>
  <section
    class="bg-white text-neutral-700"
    aria-labelledby="about-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20"
    >
      <h2
        id="about-heading"
        class="font-abaya text-3xl font-normal tracking-[0.02em] text-[#c4b59a] sm:text-4xl md:text-[2.35rem]"
      >
        MKP Design
      </h2>
      <div
        class="mt-3 h-px w-full bg-neutral-200"
        aria-hidden="true"
      />

      <div
        class="mt-8 grid gap-9 sm:mt-9 sm:gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:items-stretch lg:gap-x-48 xl:gap-x-48"
      >
        <div
          class="space-y-5 text-[15px] font-medium leading-[1.75] text-neutral-600 sm:text-base font-poppins"
        >
          <p>
            At MKPDesign, We Transform Homes With Thoughtful Design And Expert
            Planning. Based In South London And Surrey, We Specialize In Modern
            Extensions, Loft Conversions, And Bespoke Architecture Tailored To
            Your Lifestyle.
          </p>
          <p>
            Founded In 2019, We've Built A Reputation For Transparency,
            Reliability, And A Personal Approach That Prioritizes Your Needs.
            Over 80% Of Our Projects Come From Referrals, Reflecting The Trust
            We Cultivate With Each Client.
          </p>
          <p>
            From Your Initial Idea To The Final Sign-Off, We Guide You Every
            Step Of The Way, Ensuring A Smooth Experience From Concept To
            Completion. Whether You're Planning A Single Or Two-Storey
            Extension, Loft Conversion, Or A Complete Redesign, MKPDesign Is
            Here To Help You Create Something Special.
          </p>
          <div class="pt-1">
            <MkpOutlinePillButton to="/contact" variant="onLight" class="font-abaya">
              Book an appointment
            </MkpOutlinePillButton>
          </div>
        </div>

        <div
          class="relative min-h-[260px] w-full overflow-hidden sm:min-h-[300px] lg:min-h-full"
        >
          <img
            src="/images/home/about/about-house.png"
            width="900"
            height="700"
            class="block h-full w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
            alt="Contemporary white home with dark window frames and brick driveway"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div class="mt-12 overflow-hidden sm:mt-14 lg:mt-16">
        <p class="sr-only">
          Local authorities and boroughs we work with
        </p>

        <div class="partner-slider">
          <ul class="partner-track">
            <li
              v-for="(p, index) in [...partners, ...partners]"
              :key="index"
              class="flex shrink-0 items-center justify-center px-8"
            >
              <img
                :src="p.src"
                :alt="p.alt"
                class="h-12 w-auto max-w-[220px] object-contain sm:h-12 lg:h-14"
                loading="lazy"
                decoding="async"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    src: '/images/home/about/partner-harrow.png',
    alt: 'London Borough of Harrow'
  },
  {
    src: '/images/home/about/partner-hounslow.png',
    alt: 'London Borough of Hounslow'
  },
  {
    src: '/images/home/about/partner-havering.png',
    alt: 'London Borough of Havering'
  },
  {
    src: '/images/home/about/partner-camden.png',
    alt: 'London Borough of Camden'
  },
  {
    src: '/images/home/about/partner-islington.png',
    alt: 'London Borough of Islington'
  },
  {
    src: '/images/home/about/partner-hillingdon.png',
    alt: 'London Borough of Hillingdon'
  }
]
</script>

<style scoped>
.partner-slider {
  overflow: hidden;
  width: 100%;
}

.partner-track {
  display: flex;
  width: max-content;
  animation: scrollPartners 28s linear infinite;
}

@keyframes scrollPartners {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>