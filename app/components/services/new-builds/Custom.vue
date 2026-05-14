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
          <span class="text-white">CUSTOM HOME</span><span class="text-[#c9b8a0]"> DESIGN</span>
        </h2>
  
        <p
          class="mt-5 max-w-3xl text-[15px] font-poppins leading-relaxed text-neutral-400 sm:text-base"
        >
          Every custom home we design is shaped around the way you live. From the first idea to the final details, the process is focused on creating a home that feels personal, functional, and built with intention.
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
      title: 'Discover',
      body:
        "We begin by understanding your vision, lifestyle, and what home truly means to you. This goes beyond layouts and rooms — it’s about how you want to live day to day. Every detail we gather here shapes the direction of your home."
    },
    {
      title: 'Design',
      body:
        "This is where your home starts to take form. We develop layouts, refine spatial flow, and carefully consider light, proportions, and materials. Every space is designed with purpose, ensuring the home feels cohesive, functional, and uniquely yours."
    },
    {
      title: 'Realise',
      body:
        "Once the design is fully resolved, we move into technical development and planning. We prepare detailed drawings, guide you through approvals, and ensure everything is clearly defined so your home can be built exactly as intended."
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