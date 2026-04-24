<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="btnClass"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="btnClass"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </a>
  <button
    v-else
    :type="nativeType"
    :class="btnClass"
  >
    <span><slot /></span>
    <span class="text-base leading-none" aria-hidden="true">→</span>
  </button>
</template>

<script setup>
const props = defineProps({
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
  },
  /** `onDark` = white border/text for hero/header; `onLight` = dark border/text on white sections */
  variant: {
    type: String,
    default: 'onDark',
    validator: (v) => ['onDark', 'onLight'].includes(v)
  }
})

const btnClass = computed(() => {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-xs'
  if (props.variant === 'onLight') {
    return `${base} border border-neutral-800/90 text-neutral-800 hover:bg-neutral-900/[0.04] focus-visible:outline-neutral-800/60`
  }
  return `${base} border border-white/90 text-white hover:bg-white/10 focus-visible:outline-white/80`
})
</script>
