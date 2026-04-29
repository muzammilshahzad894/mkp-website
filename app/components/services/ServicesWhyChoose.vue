<template>
  <section
    class="bg-white text-neutral-900"
    aria-labelledby="why-choose-heading"
  >
    <div
      class="mx-auto w-full px-8 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      style="max-width: 1400px"
    >
      <div
        class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <!-- Left: heading + bullets -->
        <div>
          <h2
            id="why-choose-heading"
            class="font-serif font-bold uppercase leading-tight"
            style="
              font-size: clamp(1.5rem, 2.4vw, 2.1rem);
              letter-spacing: 0.03em;
              line-height: 1.2;
            "
          >
            <span class="text-neutral-900">Why Choose A<br /></span>
            <span style="color: #c9a96e">Home Extension?</span>
          </h2>

          <ul class="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            <li
              v-for="line in bullets"
              :key="line"
              class="flex items-center gap-3 font-sans text-neutral-700"
              style="font-size: 13.5px; line-height: 1.7; letter-spacing: 0.01em"
            >
              <!-- Circle check icon -->
              <span
                class="inline-flex shrink-0 items-center justify-center rounded-full"
                style="
                  width: 18px;
                  height: 18px;
                  border: 1.5px solid #c9a96e;
                  color: #c9a96e;
                "
                aria-hidden="true"
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M1.5 5l2.5 2.5 4.5-5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span>{{ line }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: large photo -->
        <div
          class="relative w-full overflow-hidden bg-neutral-200"
          style="aspect-ratio: 4/3; min-height: 280px"
        >
          <img
            :src="chooseUsImg"
            width="900"
            height="700"
            class="h-full w-full object-cover"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const chooseUsImg = '/images/services/choose-us.png';

const bullets = [
  'Adds More Living Space Without Moving.',
  "Increases Your Property's Value",
  'Brings In Natural Light And Improves Comfort',
  'Fully Compliant With Planning And Building Regulations'
]
</script>