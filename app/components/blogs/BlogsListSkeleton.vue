<template>
  <div
    class="flex flex-col divide-y-2 divide-neutral-200"
    role="status"
    aria-live="polite"
    aria-label="Loading blog posts"
  >
    <article
      v-for="index in count"
      :key="index"
      class="py-20 first:pt-0 last:pb-0"
    >
      <div
        class="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center"
        :class="index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'"
      >
        <div
          class="w-full md:w-[80%]"
          :class="index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'"
        >
          <div
            class="h-[240px] w-full animate-pulse bg-neutral-200 sm:h-[280px] md:h-[300px]"
          />
        </div>

        <div
          class="flex flex-col gap-6 md:h-[300px] md:justify-between"
          :class="index % 2 === 0 ? '' : 'md:pr-4'"
        >
          <div class="space-y-4">
            <div class="h-3 w-40 animate-pulse rounded bg-neutral-200" />
            <div class="h-7 max-w-md w-4/5 animate-pulse rounded bg-neutral-200" />
            <div class="space-y-2">
              <div class="h-4 w-full animate-pulse rounded bg-neutral-200" />
              <div class="h-4 w-11/12 animate-pulse rounded bg-neutral-200" />
              <div class="h-4 w-9/12 animate-pulse rounded bg-neutral-200" />
            </div>
          </div>
          <div class="h-10 w-32 animate-pulse rounded-full bg-neutral-200" />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 4,
  },
})
</script>
