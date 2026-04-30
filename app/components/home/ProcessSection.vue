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
        Architectural firm based in south London, Proudly serving clients
        throughout London and Surrey.
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
    title: 'Discuss',
    body:
      'We begin by understanding your home goals. Through a thorough consultation and site assessment, we identify your priorities, highlight potential challenges, and clearly guide you in the initial design direction.'
  },
  {
    title: 'Design',
    body:
      'We turn your ideas into reality with concepts that enhance your space and potential. We evaluate constraints, seek creative opportunities, and refine every detail, all while keeping your vision at the forefront.'
  },
  {
    title: 'Deliver',
    body:
      'We handle all drawings and planning documents, ensuring open communication. From initial designs to project completion, we stay engaged to support you, coordinate with contractors, and ensure smooth operations.'
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
