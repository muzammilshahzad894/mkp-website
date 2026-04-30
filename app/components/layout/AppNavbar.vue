<template>
  <header
    class="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-white/5 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-[min(100%,85vw,1400px)] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10"
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center text-white transition hover:opacity-90"
      >
        <img
          src="/images/brand/mkp-wordmark.png"
          width="220"
          height="44"
          class="h-9 w-auto max-w-[min(260px,55vw)] object-contain object-left sm:h-10 md:h-11"
          alt="MKPDesign"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <nav
        class="font-abaya hidden items-center gap-8 uppercase tracking-[0.16em] text-white/95 md:flex lg:gap-10 lg:text-xs"
        aria-label="Primary"
      >
        <!-- HOME -->
        <NuxtLink
          to="/"
          class="nav-item relative px-1.5 py-0.5 transition hover:text-white text-[14px]"
          :class="isHome ? 'text-white active-brackets' : 'text-white/75'"
        >
          Home
        </NuxtLink>

        <!-- Services dropdown -->
        <div class="group relative" @mouseenter="activeCategory = 'extensions'">
          <button
            class="nav-item relative inline-flex items-center gap-1 px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
            :class="isServicesNav ? 'text-white active-brackets' : 'text-white/75'"
          >
            SERVICES
            <svg
              class="h-3 w-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              aria-hidden="true"
            >
              <path d="M3 4.5 6 7.5 9 4.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <!-- Dropdown panel: shifted left so cone aligns over "Services" -->
          <div
            class="pointer-events-none invisible absolute top-full z-30 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
            style="left: -120px; padding-top: 15px; width: 750px;"
            role="region"
            aria-label="Services menu"
          >
            <!-- Cone: offset right to sit above "Services" trigger center -->
            <div
              style="
                position: absolute;
                top: 7px;
                left: 160px;
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 8px solid #f0ebe0;
              "
              aria-hidden="true"
            />

            <!-- Box: no corner brackets -->
            <div
              class="bg-[#f0ebe0]"
              style="box-shadow: 0 6px 32px rgba(0,0,0,0.16);"
            >
              <div class="flex items-stretch">
                <!-- Left col -->
                <div class="flex flex-col py-5" style="min-width: 260px;">
                  <NuxtLink
                    v-for="cat in categories"
                    :key="cat.key"
                    :to="cat.to"
                    class="flex w-full items-center justify-between px-6 py-[9px] text-left"
                    @mouseenter="activeCategory = cat.key"
                  >
                    <span
                      class="font-abaya uppercase tracking-[0.13em] transition-colors text-[14px]"
                      :class="activeCategory === cat.key
                        ? 'text-[11px] font-bold text-[#8E8169]'
                        : 'text-[11px] font-normal text-[#BBB09D]'"
                    >
                      {{ cat.label }}
                    </span>
                    <span
                      class="ml-4 text-[20px] leading-none transition-colors"
                      :class="activeCategory === cat.key ? 'text-[#8E8169]' : 'text-[#BBB09D]'"
                      aria-hidden="true"
                    >{{ activeCategory === cat.key ? '↗' : '→' }}</span>
                  </NuxtLink>
                </div>

                <!-- Divider: only spans content, not full box height -->
                <div class="my-5 w-px self-stretch bg-black/[0.08]" />

                <!-- Right col: stacked vertically -->
                <div class="grid flex-1 self-end grid-cols-2 gap-x-8 gap-y-3 px-7 py-5">
                  <NuxtLink
                    v-for="link in activeLinks"
                    :key="link.label"
                    :to="link.to"
                    class="flex min-w-[220px] items-start gap-3 font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <span class="mt-[1px] text-[13px] leading-none text-neutral-400" aria-hidden="true">•</span>
                    {{ link.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/projects"
          class="nav-item relative px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
          :class="isProjects ? 'text-white active-brackets' : 'text-white/75'"
        >
          Projects
        </NuxtLink>
        <NuxtLink to="/blog" class="font-medium text-white/75 transition hover:text-white">
          Blog
        </NuxtLink>
        <NuxtLink to="/about" class="font-medium text-white/75 transition hover:text-white">
          About
        </NuxtLink>

        <!-- CONTACT -->
        <NuxtLink
          to="/contact"
          class="nav-item relative px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
          :class="isContact ? 'text-white active-brackets' : 'text-white/75'"
        >
          Contact
        </NuxtLink>
      </nav>

      <div class="shrink-0">
        <MkpOutlinePillButton to="/contact">
          <span class="font-abaya hidden sm:inline">Book an appointment</span>
          <span class="font-abaya sm:hidden">Book</span>
        </MkpOutlinePillButton>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()

const isHome        = computed(() => route.path === '/')
const isProjects    = computed(() => route.path === '/projects' || route.path.startsWith('/projects/'))
const isContact     = computed(() => route.path === '/contact')
const isServicesNav = computed(
  () => route.path === '/services_extensions' || route.path.startsWith('/services_extensions/')
)

const activeCategory = ref('extensions')

const categories = [
  { key: 'extensions',  label: 'Extensions',  to: '/services_extensions' },
  { key: 'conversions', label: 'Conversions', to: '#' },
  { key: 'new-builds',  label: 'New Builds',  to: '#' },
  { key: 'other',       label: 'Other',       to: '#' },
]

const subLinks = {
  extensions: [
    { label: 'Rear & Side Extensions',   to: '/services_extensions' },
    { label: 'Single-Storey Extensions', to: '/services_extensions' },
    { label: 'Double-Storey Extensions', to: '/services_extensions' },
  ],
  conversions: [
    { label: 'Loft Conversions',         to: '#' },
    { label: 'Garage Conversions',       to: '#' },
    { label: 'Basement Conversions',     to: '#' },
  ],
  'new-builds': [
    { label: 'Residential New Builds',   to: '#' },
    { label: 'Custom Home Design',       to: '#' },
  ],
  other: [
    { label: 'Planning & Compliance',    to: '#' },
    { label: 'Interior Design',          to: '#' },
  ],
}

const activeLinks = computed(() => subLinks[activeCategory.value] ?? [])
</script>

<style scoped>
.active-brackets::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -8px;
  width: 17px;
  height: 6px;
  border-top: 1.5px solid rgba(255, 255, 255, 0.6);
}
.active-brackets::after {
  content: '';
  position: absolute;
  bottom: -4px;
  right: -8px;
  width: 17px;
  height: 6px;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.6);
}
</style>