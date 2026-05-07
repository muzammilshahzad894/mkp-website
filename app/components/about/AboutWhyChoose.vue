<template>
  <section
    class="bg-[#121212] text-neutral-300"
    aria-labelledby="process-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-16 xl:py-20"
    >
      <h2
        id="process-heading"
        class="font-abaya text-3xl font-normal leading-tight tracking-[0.14em] sm:text-4xl md:text-5xl"
      >
        <span class="text-[#c9b8a0]">WHY</span><span class="text-white"> MKPDesign</span>
      </h2>
      <p
        class="mt-5 w-full text-[15px] font-poppins leading-relaxed text-neutral-400 sm:text-base"
      >
        At MKPDesign, we understand that embarking on a home renovation or construction project can feel overwhelming. We believe every space deserves a spark of originality. Bold ideas to unique designs, we do everything can rely on.
      </p>

      <div
        class="mt-5 h-px w-full bg-neutral-800"
        aria-hidden="true"
      />

      <div
        class="mt-10 grid grid-cols-1 sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:gap-y-16"
      >
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="border-b border-neutral-800 px-0 py-10 lg:border-b-0 lg:py-0"
          :class="articleCellClass(index)"
        >
          <h3
            class="font-abaya text-lg font-normal uppercase tracking-[0.2em] text-[#c9b8a0]"
          >
            {{ step.title }}
          </h3>
          <p
            class="mt-4 text-[14px] font-poppins leading-[1.75] text-neutral-400 sm:text-[15px]"
          >
            {{ step.body }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Precision in Design',
    body: "Our team's expertise ensures professionalism and reliability, making your real estate journey seamless."
  },
  {
    title: 'Structural Excellence',
    body: "Our designs beauty with stability, ensuring durability and safety without compromising aesthetics."
  },
  {
    title: 'Sustainable Innovation',
    body: "We integrate eco-friendly materials and energy-efficient solutions to build a greener, more sustainable future."
  },
  {
    title: 'Creative Vision',
    body: "From modern minimalism to intricate classical forms, we bring unique artistic expression to every project."
  },
  {
    title: 'Client-Centric Approach',
    body: "Your vision is at the heart of our designs. We collaborate closely to bring your dream space to life."
  },
  {
    title: 'Excellence',
    body: "Our team's expertise ensures professionalism and reliability, making your real estate journey seamless."
  }
]

function articleCellClass(index) {
  const col = index % 3

  const paddingClass =
    col === 0 ? 'lg:pl-0 lg:pr-8 xl:pr-10' :
    col === 2 ? 'lg:pl-8 lg:pr-0 xl:pl-10 xl:pr-0' :
                'lg:px-8 xl:px-10'

  // Right border only on col 0 and col 1, never col 2
  const borderClass = col < 2 ? 'lg:border-r lg:border-neutral-800' : ''

  return `${paddingClass} ${borderClass}`
}
</script>