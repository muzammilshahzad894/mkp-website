<template>
  <NuxtLink v-if="to" :to="to" :class="btnClass">
    <span><slot /></span>
    <ArrowRight v-if="withArrow" class="w-6 h-4" />
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="btnClass">
    <span><slot /></span>
    <ArrowRight v-if="withArrow" class="w-6 h-4" />
  </a>
  <button v-else :type="nativeType" :class="btnClass">
    <span><slot /></span>
    <ArrowRight v-if="withArrow" class="w-6 h-4" />
  </button>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";
const props = defineProps({
  to: {
    type: [String, Object],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  nativeType: {
    type: String,
    default: "button",
  },
  /** `onDark` = white border/text for hero/header; `onLight` = dark border/text on white sections */
  variant: {
    type: String,
    default: "onDark",
    validator: (v) => ["onDark", "onLight", "darkSolid"].includes(v),
  },
  withArrow: {
    type: Boolean,
    default: true,
  },
});

const btnClass = computed(() => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-2 py-2 sm:px-5 sm:py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-xs";
  if (props.variant === "onLight") {
    return `${base} border border-neutral-800/90 text-neutral-800 hover:bg-neutral-900/[0.04] focus-visible:outline-neutral-800/60`;
  }
  if (props.variant === "darkSolid") {
    return `${base} bg-neutral-900 text-white hover:bg-neutral-600 focus-visible:outline-neutral-900`;
  }
  return `${base} border border-white/90 text-white hover:bg-white/10 focus-visible:outline-white/80`;
});
</script>
