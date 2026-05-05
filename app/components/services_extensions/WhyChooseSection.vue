<template>
  <section
    class="bg-white text-neutral-900"
    aria-labelledby="why-choose-heading"
  >
    <div
      class="mx-auto w-full px-8 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      style="max-width: 1400px"
    >
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

        <!-- Left: heading + bullets -->
        <div>
          <h2
            id="why-choose-heading"
            class="font-abaya uppercase leading-tight"
            style="font-size: clamp(1.8rem, 3vw, 2.6rem); letter-spacing: 0.03em; line-height: 1.2;"
          >
            <span class="text-neutral-900">Why Choose A<br /></span>
            <span style="color: #c9a96e">Home Extension?</span>
          </h2>

          <ul class="mt-8 space-y-6 sm:mt-10 sm:space-y-7">
            <li
              v-for="bullet in bullets"
              :key="bullet.title"
              class="flex items-start gap-3.5"
            >
              <!-- Circle check icon — aligned to first line -->
              <span
                class="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full"
                style="width: 20px; height: 20px; border: 1.5px solid #c9a96e; color: #c9a96e;"
                aria-hidden="true"
              >
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M1.5 5l2.5 2.5 4.5-5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>

              <!-- Title + subtitle stacked -->
              <div class="flex flex-col gap-0.5">
                <span class="font-poppins text-[18px] font-medium leading-snug text-neutral-900">
                  {{ bullet.title }}
                </span>
                <span class="font-poppins text-[12px] font-normal leading-relaxed text-neutral-500">
                  {{ bullet.subtitle }}
                </span>
              </div>
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
const chooseUsImg = '/images/services/choose-us.jpeg'

const bullets = [
  {
    title: 'More Space Where You Actually Need It',
    subtitle: 'Not just extra room, but space that works for how you live.'
  },
  {
    title: 'A Home That Feels Better To Live In',
    subtitle: 'Improved layout, better flow, and more natural light.'
  },
  {
    title: 'Increase The Value Of Your Property',
    subtitle: 'Well designed extensions add value you can see and feel.'
  },
  {
    title: 'Stay Where You Are, Improve What You Have',
    subtitle: 'Often a better option than moving, when done properly.'
  }
]
</script>