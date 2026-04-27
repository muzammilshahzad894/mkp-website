<template>
  <header
    class="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-white/5 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10"
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
        class="hidden items-center gap-8 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white/95 md:flex lg:gap-10 lg:text-xs"
        aria-label="Primary"
      >
        <NuxtLink
          to="/"
          class="relative pb-1 font-medium transition hover:text-white"
          :class="isHome ? 'text-white' : 'text-white/75'"
        >
          Home
          <span
            v-if="isHome"
            class="absolute bottom-0 left-0 right-0 mx-auto h-px w-8 bg-white"
          />
        </NuxtLink>

        <button
          type="button"
          class="inline-flex items-center gap-1 font-medium text-white/75 transition hover:text-white"
        >
          Services
          <svg
            class="h-3 w-3 text-white/75"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            aria-hidden="true"
          >
            <path d="M3 4.5 6 7.5 9 4.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <NuxtLink
          to="/projects"
          class="font-medium text-white/75 transition hover:text-white"
          >Projects</NuxtLink
        >
        <NuxtLink to="/blog" class="font-medium text-white/75 transition hover:text-white"
          >Blog</NuxtLink
        >
        <NuxtLink to="/about" class="font-medium text-white/75 transition hover:text-white"
          >About</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="relative pb-1 font-medium transition hover:text-white"
          :class="isContact ? 'text-white' : 'text-white/75'"
        >
          Contact
          <span
            v-if="isContact"
            class="absolute bottom-0 left-0 right-0 mx-auto h-px w-8 bg-white"
          />
        </NuxtLink>
      </nav>

      <div class="shrink-0">
        <MkpOutlinePillButton to="/contact">
          <span class="hidden sm:inline">Book an appointment</span>
          <span class="sm:hidden">Book</span>
        </MkpOutlinePillButton>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isContact = computed(() => route.path === '/contact')
</script>
