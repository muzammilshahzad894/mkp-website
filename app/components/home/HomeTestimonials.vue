<template>
  <section
    class="bg-[#e8e4dc] text-neutral-900"
    aria-labelledby="testimonials-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:px-8"
    >
      <!-- Header -->
      <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <h2
          id="testimonials-heading"
          class="font-abaya text-[clamp(1.25rem,2.8vw,2.25rem)] uppercase leading-tight tracking-[0.04em] text-neutral-900"
        >
          WHY CLIENTS CHOOSE US
        </h2>
        <div class="flex shrink-0 gap-2.5" role="group" aria-label="Testimonial navigation">
          <!-- Prev: disabled at page 0 (desktop) or index 0 (mobile) -->
          <button
            type="button"
            :disabled="isPrevDisabled"
            class="flex h-10 w-10 items-center justify-center rounded-full border transition sm:h-11 sm:w-11"
            :class="isPrevDisabled
              ? 'cursor-not-allowed border-neutral-300 bg-[#f2f0ea] text-neutral-300'
              : 'border-neutral-900 bg-[#f2f0ea] text-neutral-900 hover:bg-white'"
            aria-label="Previous"
            @click="goPrev"
          >
            <ArrowLeft class="h-4 w-4" stroke-width="1.75" />
          </button>

          <!-- Next: disabled at last page (desktop) or last slide (mobile) -->
          <button
            type="button"
            :disabled="isNextDisabled"
            class="flex h-10 w-10 items-center justify-center rounded-full border transition sm:h-11 sm:w-11"
            :class="isNextDisabled
              ? 'cursor-not-allowed border-neutral-300 bg-neutral-300 text-white'
              : 'border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800'"
            aria-label="Next"
            @click="goNext"
          >
            <ArrowRight class="h-4 w-4" stroke-width="1.75" />
          </button>
        </div>
      </div>

      <!-- ─── DESKTOP ─── -->
      <div class="mt-10 hidden overflow-hidden lg:block sm:mt-12">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentPage * 100}%)` }"
        >
          <div
            v-for="(page, pageIdx) in desktopPages"
            :key="pageIdx"
            class="grid w-full shrink-0 grid-cols-3 gap-5"
          >
            <article
              v-for="cell in page"
              :key="cell.key"
              class="flex min-h-[340px] flex-col bg-[#f2f0ea] px-7 pb-8 pt-6 shadow-sm"
            >
              <!-- Label + rule -->
              <p class="font-abaya text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-900">
                {{ cell.kind === 'google' ? 'Google Reviews' : 'Client Testimonial' }}
              </p>
              <div class="mt-2 h-px w-full bg-neutral-900" aria-hidden="true" />

              <!-- Review card -->
              <template v-if="cell.kind === 'review'">
                <div class="mt-5 flex justify-center">
                  <NuxtImg
                    :src="cell.photo"
                    alt=""
                    class="h-20 w-20 rounded-full object-cover ring-1 ring-black/5"
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p class="mt-4 text-center font-script text-[clamp(1.4rem,2vw,1.9rem)] leading-none text-neutral-900">
                  {{ cell.name }}
                </p>
                <p class="mt-4 flex-1 text-center font-abaya text-[15px] italic leading-relaxed text-neutral-700">
                  "{{ cell.quote }}"
                </p>
                <div class="mt-6 flex justify-center gap-1" aria-label="5 out of 5 stars">
                  <Star v-for="n in 5" :key="n" class="h-5 w-5 fill-[#FFBA3B] text-[#FFBA3B]" aria-hidden="true" />
                </div>
              </template>

              <!-- Google reviews card -->
              <template v-else>
                <div class="flex flex-1 flex-col items-center justify-center gap-5 py-6 text-center">
                  <div class="flex gap-1.5">
                    <Star v-for="n in 5" :key="n" class="h-6 w-6 fill-[#FFBA3B] text-[#FFBA3B]" aria-hidden="true" />
                  </div>
                  <p class="font-abaya text-2xl font-semibold text-neutral-900">
                    Rated 5 stars on Google
                  </p>
                  <p class="max-w-[14rem] font-abaya text-[15px] text-neutral-600">
                    Read more from our clients…
                  </p>
                  
                  <a  href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-abaya font-bold text-neutral-900 underline underline-offset-4 transition hover:opacity-70"
                  >
                    View all reviews <span aria-hidden="true">→</span>
                  </a>
                </div>
              </template>
            </article>
          </div>
        </div>
      </div>

      <!-- ─── MOBILE ─── -->
      <div class="mt-8 lg:hidden">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${mobileIndex * 100}%)` }"
          >
            <!-- 5 review slides -->
            <article
              v-for="review in reviews"
              :key="review.key"
              class="flex min-h-[300px] w-full shrink-0 flex-col bg-[#f2f0ea] px-6 pb-7 pt-6 shadow-sm"
            >
              <p class="font-abaya text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-900">
                Client Testimonial
              </p>
              <div class="mt-2 h-px w-full bg-neutral-900" aria-hidden="true" />
              <div class="mt-5 flex justify-center">
                <NuxtImg
                  :src="review.photo"
                  alt=""
                  class="h-20 w-20 rounded-full object-cover ring-1 ring-black/5"
                  width="80"
                  height="80"
                  loading="lazy"
                />
              </div>
              <p class="mt-4 text-center font-script text-[clamp(1.4rem,5vw,1.8rem)] leading-none text-neutral-900">
                {{ review.name }}
              </p>
              <p class="mt-4 flex-1 text-center font-abaya text-[14px] italic leading-relaxed text-neutral-700">
                "{{ review.quote }}"
              </p>
              <div class="mt-6 flex justify-center gap-1" aria-label="5 out of 5 stars">
                <Star v-for="n in 5" :key="n" class="h-5 w-5 fill-[#FFBA3B] text-[#FFBA3B]" aria-hidden="true" />
              </div>
            </article>

            <!-- Google card (slide 6) -->
            <article class="flex min-h-[300px] w-full shrink-0 flex-col bg-[#f2f0ea] px-6 pb-7 pt-6 shadow-sm">
              <p class="font-abaya text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-900">
                Google Reviews
              </p>
              <div class="mt-2 h-px w-full bg-neutral-900" aria-hidden="true" />
              <div class="flex flex-1 flex-col items-center justify-center gap-5 py-6 text-center">
                <div class="flex gap-1">
                  <Star v-for="n in 5" :key="n" class="h-6 w-6 fill-[#FFBA3B] text-[#FFBA3B]" aria-hidden="true" />
                </div>
                <p class="font-abaya text-xl font-semibold text-neutral-900">
                  Rated 5 stars on Google
                </p>
                <p class="max-w-xs font-abaya text-[14px] text-neutral-600">
                  Read more from our clients…
                </p>
                
                <a  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-abaya font-bold text-neutral-900 underline underline-offset-4 transition hover:opacity-70"
                >
                  View all reviews <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowLeft, ArrowRight, Star } from 'lucide-vue-next'

// ─── Data ────────────────────────────────────────────────────────────────────

const reviews = [
  {
    key: 'r1',
    name: 'Herve Graciet',
    photo: '/images/home/testimonials/herve.jpg',
    quote: 'We cannot recommend MKPDesign enough; we had bought a very old 1930s house in Essex, MKPDesign helped us transform it into the most amazing property, contemporary enough with some retained features. Mustapha has amazing ideas, he always pushed the boundary with us, encouraging us to be ambitious with the designs and getting out of our comfort zone. We cannot thank you enough'
  },
  {
    key: 'r2',
    name: 'Emmanuel Afriyie',
    photo: '/images/home/testimonials/emmanuel.jpeg',
    quote: 'Working with MKPDesign was an exceptional experience. Their attention to detail, innovative design solutions, and commitment to understanding our vision truly set them apart. From concept to completion, Mustapha maintained excellent communication, site visits, ensuring every step of the process was smooth and collaborative. Highly recommend for anyone seeking a creative and reliable architect!'
  },
  {
    key: 'r3',
    name: 'Peter Labdy',
    photo: '/images/home/testimonials/peter.png',
    quote: "MKPDesign was very easy to work with, they're creative, helpful, kind and trustworthy. Their approach is 'customer first', they understand customers needs and preferences and return with great ideas, sometimes practical, sometimes out of the box. Mustapha is very good in his profession he is smart, and has a kind personality. Highly recommended"
  },
  {
    key: 'r4',
    name: 'Marissa Chazan',
    photo: '/images/home/testimonials/marissa.png',
    quote: 'MKPDesign helped me design and draw plans for a side return extension, and then they completed all the planning applications for me as well. Mustapha was incredibly friendly, polite and skilled - and always answered my many, many questions quickly and clearly. His ideas and knowledge were invaluable to the project and I would absolutely hire him again and recommend him highly.'
  },
  {
    key: 'r5',
    name: 'Sirushe Hewazy',
    photo: '/images/home/testimonials/sirushe_hewazy.png',
    quote: 'MKPDesign is a very professional company. They were always available when I had questions, prompt in their responses, and clear in their guidance. They added a lot of valuable input and experienced suggestions throughout the process, which made everything feel straightforward and well managed. I will definitely be using MKPDesign again in the future.'
  }
]

// ─── Desktop: 2 pages of 3 cards each ────────────────────────────────────────

const desktopPages = [
  [
    { kind: 'review', key: 'r1', ...reviews[0] },
    { kind: 'review', key: 'r2', ...reviews[1] },
    { kind: 'review', key: 'r3', ...reviews[2] }
  ],
  [
    { kind: 'review', key: 'r4', ...reviews[3] },
    { kind: 'review', key: 'r5', ...reviews[4] },
    { kind: 'google', key: 'google' }
  ]
]

const LAST_PAGE = desktopPages.length - 1  // 1
const currentPage = ref(0)

// ─── Mobile: 6 slides (5 reviews + 1 Google) ─────────────────────────────────

const MOBILE_TOTAL = reviews.length + 1   // 6
const mobileIndex = ref(0)

// ─── Breakpoint detection ─────────────────────────────────────────────────────

const isLg = ref(false)
let mq

onMounted(() => {
  mq = window.matchMedia('(min-width: 1024px)')
  isLg.value = mq.matches
  mq.addEventListener('change', e => { isLg.value = e.matches })
})

onUnmounted(() => mq?.removeEventListener('change', () => {}))

// ─── Button disabled states (correctly split by breakpoint) ───────────────────

const isPrevDisabled = computed(() =>
  isLg.value ? currentPage.value === 0 : mobileIndex.value === 0
)

const isNextDisabled = computed(() =>
  isLg.value ? currentPage.value === LAST_PAGE : mobileIndex.value === MOBILE_TOTAL - 1
)

// ─── Navigation ───────────────────────────────────────────────────────────────

function goNext () {
  if (isLg.value) {
    if (currentPage.value < LAST_PAGE) currentPage.value++
  } else {
    if (mobileIndex.value < MOBILE_TOTAL - 1) mobileIndex.value++
  }
}

function goPrev () {
  if (isLg.value) {
    if (currentPage.value > 0) currentPage.value--
  } else {
    if (mobileIndex.value > 0) mobileIndex.value--
  }
}
</script>