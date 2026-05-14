<template>
    <section
      id="our-projects"
      class="bg-white pb-20 pt-12 text-neutral-900 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16"
      aria-labelledby="our-projects-heading"
    >
      <div class="mx-auto w-full max-w-[min(100%,88vw,1320px)] px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
        >
          <div class="min-w-0 max-w-3xl">
            <h2
              id="our-projects-heading"
              class="font-abaya text-[clamp(1.85rem,3.6vw,2.65rem)] font-normal uppercase leading-[1.12] tracking-[0.03em]"
            >
              <span class="text-neutral-900">Residential </span>
              <span class="text-[#b8973f]">new builds</span>
            </h2>
            <p class="mt-3 max-w-2xl font-poppins text-[#535353]">
              A selection of our new build homes, designed from the ground up to
              reflect each client’s lifestyle, vision, and the way they want to live.
            </p>
          </div>
  
          <div class="shrink-0 sm:pt-1">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center rounded-full border border-neutral-900 bg-transparent px-7 py-2.5 font-dm text-[12px] font-semibold uppercase transition hover:bg-neutral-900 hover:text-white"
            >
              Start your project
              <ArrowRight class="w-6 h-4" />
            </NuxtLink>
          </div>
        </div>
  
        <!-- simplified filters -->
        <div
          class="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:mt-12 md:gap-x-6"
        >
          <button
            v-for="item in filterTabs"
            :key="item.id"
            type="button"
            class="font-poppins uppercase transition text-[14px]"
            :class="
              activeFilter === item.id
                ? 'font-bold text-neutral-800'
                : 'text-neutral-400 hover:text-neutral-600'
            "
            @click="activeFilter = item.id"
          >
            {{ item.label }}
          </button>
        </div>
  
        <!-- projects grid -->
        <div
          class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 md:gap-6"
        >
          <article
            v-for="project in visibleProjects"
            :key="project.id"
            class="group relative overflow-hidden bg-neutral-200"
          >
            <div class="relative aspect-[3/2] w-full overflow-hidden md:aspect-[5/3]">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                :style="{ backgroundImage: `url('${project.image}')` }"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent"
              />
  
              <div
                class="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-5 pb-5 pt-12 sm:px-6 sm:pb-6"
              >
                <div class="flex items-end justify-between gap-4">
                  
                  <div class="flex flex-col gap-1">
                    <span
                      class="font-poppins text-[11px] uppercase tracking-[0.22em] text-white"
                    >
                      New Build
                    </span>
  
                    <p
                      class="font-poppins text-[14px] uppercase leading-snug tracking-[0.12em] text-white"
                    >
                      {{ project.title }}
                    </p>
                  </div>
  
                  <NuxtLink
                    :to="project.to"
                    class="ml-auto inline-flex shrink-0 items-center rounded-full border border-white/85 bg-transparent px-4 py-2 font-dm text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    See details
                    <ArrowRight class="ml-2 h-4 w-5" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ArrowRight } from 'lucide-vue-next'
  
  const activeFilter = ref('all')
  
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'modern', label: 'Modern Homes' },
    { id: 'bespoke', label: 'Bespoke Designs' },
  ]
  
  const project1 = '/images/projects/project-1.png'
  const project2 = '/images/projects/project-2.png'
  const project3 = '/images/projects/project-3.png'
  const project4 = '/images/projects/project-4.png'
  const project5 = '/images/projects/project-5.png'
  const project6 = '/images/projects/project-6.png'
  
  const allProjects = [
    { id: '1', title: 'Oakwood Residence', filter: 'modern', image: project1, to: '#' },
    { id: '2', title: 'Hillside House', filter: 'modern', image: project2, to: '#' },
    { id: '3', title: 'Riverstone Villa', filter: 'bespoke', image: project3, to: '#' },
    { id: '4', title: 'Glassline Residence', filter: 'modern', image: project4, to: '#' },
    { id: '5', title: 'Cedar Court Home', filter: 'bespoke', image: project5, to: '#' },
    { id: '6', title: 'Lakeside Build', filter: 'bespoke', image: project6, to: '#' },
  ]
  
  const visibleProjects = computed(() => {
    if (activeFilter.value === 'all') return allProjects
    return allProjects.filter((p) => p.filter === activeFilter.value)
  })
  </script>