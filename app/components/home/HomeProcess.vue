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
        class="font-abaya text-3xl font-normal uppercase leading-tight tracking-[0.14em] sm:text-4xl md:text-5xl"
      >
        <span class="text-white">OUR</span><span class="text-[#c9b8a0]"> PROCESS</span>
      </h2>
      <p
        class="mt-5 max-w-3xl text-[15px] font-poppins leading-relaxed text-neutral-400 sm:text-base"
      >
        Architectural firm based in south london, proudly serving clients throughout london, surrey and beyond.
      </p>

      <div
        class="mt-8 h-px w-full bg-neutral-800 sm:mt-9"
        aria-hidden="true"
      />

      <div
        class="mt-10 grid grid-cols-1 gap-0 sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:divide-x lg:divide-neutral-800"
      >
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="border-b border-neutral-800 px-0 py-10 last:border-b-0 lg:border-b-0 lg:py-2"
          :class="articleCellClass(index)"
        >
          <h3
            class="font-abaya text-lg font-normal uppercase tracking-[0.2em] text-[#c9b8a0] sm:text-xl"
          >
            {{ step.title }}
          </h3>
          <p
            class="mt-4 text-[14px] font-poppins leading-[1.75] text-neutral-400 sm:text-[15px] text-justify"
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
    title: 'Discuss',
    body:
      "Every project starts with understanding how you actually live. We look at your home, how it works today, what’s not working, and where the real opportunity is. Not just what you ask for, but what you actually need. This stage sets the direction properly."
  },
  {
    title: 'Design',
    body:
      "This is where things start to take shape. We explore layouts, refine proportions, and resolve how the space will truly function. Storage, flow, light, and connection are all considered early, not added later. Every decision has a purpose."
  },
  {
    title: 'Deliver',
    body:
      "Once the design is right, we take it through planning and technical stages with clarity. We handle the drawings, guide you through approvals, and ensure everything is properly thought through so the build runs as it should. No guesswork. No unnecessary back and forth."
  }
]

function articleCellClass (index) {
  const last = index === steps.length - 1
  if (index === 0) {
    return 'lg:pl-0 lg:pr-8 xl:pr-10'
  }
  if (last) {
    return 'lg:pl-8 lg:pr-0 xl:pl-10 xl:pr-0'
  }
  return 'lg:px-8 xl:px-10'
}
</script>
