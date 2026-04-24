<template>
  <section
    class="bg-white text-neutral-700"
    aria-labelledby="about-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,75vw,1280px)] px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20"
    >
      <h2
        id="about-heading"
        class="font-serif text-3xl font-normal tracking-[0.02em] text-[#c4b59a] sm:text-4xl md:text-[2.35rem]"
      >
        MKP Design
      </h2>
      <div
        class="mt-3 h-px w-full bg-neutral-200"
        aria-hidden="true"
      />

      <div
        class="mt-8 grid gap-9 sm:mt-9 sm:gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-stretch lg:gap-x-8 lg:gap-y-0 xl:gap-x-10"
      >
        <div
          class="space-y-5 text-[15px] font-medium leading-[1.75] text-neutral-600 sm:text-base"
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
            <MkpOutlinePillButton to="/contact" variant="onLight">
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

      <div class="mt-12 sm:mt-14 lg:mt-16">
        <p class="sr-only">
          Local authorities and boroughs we work with
        </p>
        <ul
          class="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 sm:gap-x-7 lg:justify-between lg:gap-x-3"
        >
          <li
            v-for="p in partners"
            :key="p.src"
            class="flex shrink-0 items-center justify-center"
          >
            <img
              :src="p.src"
              :alt="p.alt"
              class="h-9 w-auto max-w-[min(160px,34vw)] object-contain opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10 sm:max-w-[min(184px,24vw)] lg:h-11"
              loading="lazy"
              decoding="async"
            />
          </li>
        </ul>
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
