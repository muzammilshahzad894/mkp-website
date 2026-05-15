<template>
  <div>
    <section
      class="relative min-h-[min(100dvh,880px)] w-full bg-neutral-800"
      role="status"
      aria-live="polite"
      aria-label="Loading article"
    >
      <div class="absolute inset-0 animate-pulse bg-neutral-700" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"
        role="presentation"
      />
      <div class="relative z-10 mx-auto flex min-h-[min(100dvh,880px)] w-full max-w-[min(100%,88vw,1320px)] flex-col justify-end px-4 pb-6 pt-32 sm:px-6 sm:pb-8 md:pb-10 lg:px-8">
        <div class="h-4 w-28 animate-pulse rounded bg-white/20" />
        <div class="mt-6 h-4 w-48 animate-pulse rounded bg-white/20" />
        <div class="mt-4 h-12 w-4/5 max-w-3xl animate-pulse rounded bg-white/25" />
        <div class="mt-5 h-4 w-full max-w-2xl animate-pulse rounded bg-white/15" />
      </div>
    </section>

    <section class="bg-white py-14 sm:py-16 md:py-20">
      <div class="mx-auto w-full max-w-[min(100%,85vw,800px)] space-y-4 px-5 sm:px-8 md:px-10">
        <div class="h-4 w-full animate-pulse rounded bg-neutral-200" />
        <div class="h-4 w-11/12 animate-pulse rounded bg-neutral-200" />
        <div class="h-4 w-10/12 animate-pulse rounded bg-neutral-200" />
        <div class="h-4 w-9/12 animate-pulse rounded bg-neutral-200" />
      </div>
    </section>
  </div>
</template>
