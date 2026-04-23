<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center gap-2 rounded-full border border-white/90 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:px-6 sm:text-xs"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="inline-flex items-center gap-2 rounded-full border border-white/90 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:px-6 sm:text-xs"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </a>
  <button
    v-else
    :type="nativeType"
    class="inline-flex items-center gap-2 rounded-full border border-white/90 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:px-6 sm:text-xs"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </button>
</template>

<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  nativeType: {
    type: String,
    default: 'button'
  }
})
</script>
