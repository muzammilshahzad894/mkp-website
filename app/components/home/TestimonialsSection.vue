<template>
  <section
    class="bg-[#e5e3d8] text-neutral-800"
    aria-labelledby="testimonials-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 md:px-8 md:pb-24 md:pt-20 lg:pt-20 xl:pb-28 xl:pt-24"
    >
      <div
        class="flex items-start justify-between gap-3 sm:items-end"
      >
        <h2
          id="testimonials-heading"
          class="min-w-0 max-w-[calc(100%-5.5rem)] flex-1 text-balance font-serif text-[clamp(0.8125rem,3.6vw,2.05rem)] font-normal uppercase leading-[1.2] tracking-[0.05em] text-neutral-900 sm:max-w-none sm:leading-none sm:tracking-[0.085em] md:tracking-[0.1em] lg:tracking-[0.11em] sm:whitespace-nowrap"
        >
          What our client saying
        </h2>
        <div
          class="flex shrink-0 gap-2 sm:gap-2.5"
          role="group"
          aria-label="Testimonial slides"
        >
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-transparent text-[15px] font-normal leading-none text-neutral-900 transition hover:bg-neutral-900/5 sm:h-11 sm:w-11 sm:text-base"
            aria-label="Previous testimonials"
            :disabled="!canPrev"
            :class="
              !canPrev
                ? 'cursor-not-allowed border-neutral-400 text-neutral-400 hover:bg-transparent'
                : ''
            "
            @click="onPrevClick"
          >
            <span class="sr-only">Previous</span>
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-[15px] font-normal leading-none text-white transition hover:bg-neutral-800 sm:h-11 sm:w-11 sm:text-base"
            aria-label="Next testimonials"
            @click="onNextClick"
          >
            <span class="sr-only">Next</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        class="mt-9 sm:mt-10"
        role="region"
        aria-label="Client testimonials"
        aria-live="polite"
      >
        <!-- Mobile: one testimonial at a time -->
        <div class="lg:hidden">
          <article
            v-if="mobileSlideIndex === 0"
            class="flex min-h-[280px] flex-col border border-neutral-300/50 bg-[#efede5] p-6"
          >
            <div
              class="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-300/40"
            >
              <img
                src="/images/home/testimonials/facade.png"
                alt="Brick facade and window detail from a residential project"
                class="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul
              class="mt-5 flex list-none gap-1 p-0"
              aria-hidden="true"
            >
              <li
                v-for="n in 5"
                :key="n"
              >
                <svg
                  class="h-3.5 w-3.5 text-amber-500 sm:h-4 sm:w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </li>
            </ul>
            <p
              class="mt-4 flex-1 font-sans text-[15px] font-semibold leading-[1.75] text-neutral-800"
            >
              {{ featured.quote }}
            </p>
            <div class="mt-6 flex items-end justify-between gap-4">
              <div class="min-w-0">
                <p
                  class="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
                >
                  {{ featured.name }}
                </p>
                <p
                  class="mt-1 font-sans text-[13px] font-normal leading-snug text-neutral-500"
                >
                  {{ featured.role }}
                </p>
              </div>
              <img
                :src="featured.avatarSrc"
                alt=""
                class="h-14 w-14 shrink-0 object-cover"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
          <article
            v-else
            :key="'m-' + mobileSlideIndex + '-' + mobileSmallCard.id"
            class="flex min-h-[260px] flex-col border border-neutral-300/50 bg-[#efede5] p-6"
          >
            <ul
              class="flex list-none gap-1 p-0"
              aria-hidden="true"
            >
              <li
                v-for="n in 5"
                :key="n"
              >
                <svg
                  class="h-3.5 w-3.5 text-amber-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </li>
            </ul>
            <p
              class="mt-4 flex-1 font-sans text-[15px] font-medium leading-[1.75] text-neutral-600"
            >
              {{ mobileSmallCard.quote }}
            </p>
            <div class="mt-6 flex items-end justify-between gap-4">
              <div class="min-w-0">
                <p
                  class="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
                >
                  {{ mobileSmallCard.name }}
                </p>
                <p
                  class="mt-1 font-sans text-[13px] font-normal leading-snug text-neutral-500"
                >
                  {{ mobileSmallCard.role }}
                </p>
              </div>
              <img
                :src="mobileSmallCard.avatarSrc"
                alt=""
                class="h-14 w-14 shrink-0 object-cover"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
          <p
            class="mt-3 text-center font-sans text-xs text-neutral-500"
            aria-live="polite"
          >
            {{ mobileSlideIndex + 1 }} / 5
          </p>
        </div>

        <!-- Desktop: full grid -->
        <div
          class="hidden lg:grid lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-2 lg:items-stretch lg:gap-5"
        >
          <article
            class="flex h-full flex-col border border-neutral-300/50 bg-[#efede5] p-6 sm:col-span-2 sm:p-8 lg:col-span-1 lg:row-span-2 lg:min-h-0 lg:p-8"
          >
            <div
              class="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-neutral-300/40"
            >
              <img
                src="/images/home/testimonials/facade.png"
                alt="Brick facade and window detail from a residential project"
                class="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul
              class="mt-5 flex list-none gap-1 p-0"
              aria-hidden="true"
            >
              <li
                v-for="n in 5"
                :key="n"
              >
                <svg
                  class="h-3.5 w-3.5 text-amber-500 sm:h-4 sm:w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </li>
            </ul>
            <p
              class="mt-4 flex-1 font-sans text-[15px] font-semibold leading-[1.75] text-neutral-800 sm:text-base"
            >
              {{ featured.quote }}
            </p>
            <div
              class="mt-6 flex items-end justify-between gap-4"
            >
              <div class="min-w-0">
                <p
                  class="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 sm:text-xs"
                >
                  {{ featured.name }}
                </p>
                <p
                  class="mt-1 font-sans text-[13px] font-normal leading-snug text-neutral-500 sm:text-sm"
                >
                  {{ featured.role }}
                </p>
              </div>
              <img
                :src="featured.avatarSrc"
                alt=""
                class="h-14 w-14 shrink-0 object-cover sm:h-16 sm:w-16"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article
            v-for="(card, i) in small"
            :key="'slot-' + i"
            class="flex h-full min-h-[200px] flex-col border border-neutral-300/50 bg-[#efede5] p-6 sm:min-h-[220px] sm:p-7 lg:min-h-0"
            :class="smallCellClass(i)"
          >
            <ul
              class="flex list-none gap-1 p-0"
              aria-hidden="true"
            >
              <li
                v-for="n in 5"
                :key="n"
              >
                <svg
                  class="h-3.5 w-3.5 text-amber-500 sm:h-4 sm:w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </li>
            </ul>
            <p
              class="mt-4 flex-1 font-sans text-[15px] font-medium leading-[1.75] text-neutral-600 sm:text-base"
            >
              {{ card.quote }}
            </p>
            <div
              class="mt-6 flex items-end justify-between gap-4"
            >
              <div class="min-w-0">
                <p
                  class="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 sm:text-xs"
                >
                  {{ card.name }}
                </p>
                <p
                  class="mt-1 font-sans text-[13px] font-normal leading-snug text-neutral-500 sm:text-sm"
                >
                  {{ card.role }}
                </p>
              </div>
              <img
                :src="card.avatarSrc"
                alt=""
                class="h-14 w-14 shrink-0 object-cover sm:h-16 sm:w-16"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const AVATAR_COLOR = '/images/home/testimonials/client-avatar.png'
const AVATAR_DARK = '/images/home/testimonials/client-avatar-1.png'

const liamQuote =
  'They delivered a space that feels both luxurious and practical.'

const michaelLong =
  'Impressive work ethic and design sense. They delivered a space that feels both luxurious and practical.'

const pool = [
  {
    id: '1',
    quote: liamQuote,
    name: 'Liam Johnson',
    role: 'Engineer',
    avatarSrc: AVATAR_DARK
  },
  {
    id: '2',
    quote: michaelLong,
    name: 'Michael Carter',
    role: 'Apartment owner',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '3',
    quote: liamQuote,
    name: 'Michael Carter',
    role: 'Apartment owner',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '4',
    quote:
      'From first meeting to handover, MKP kept everything clear and moving forward without drama.',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '5',
    quote:
      'We appreciated the honest timelines and the care taken over finishes and light in every room.',
    name: 'James Okonkwo',
    role: 'Developer',
    avatarSrc: AVATAR_DARK
  },
  {
    id: '6',
    quote:
      'Our extension finally matches how we use the house day to day — open, calm, and full of daylight.',
    name: 'Emma Richardson',
    role: 'Family client',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '7',
    quote:
      'Planning and neighbour concerns were handled thoughtfully; we felt supported at every stage.',
    name: 'Daniel Hughes',
    role: 'Terraced house owner',
    avatarSrc: AVATAR_DARK
  },
  {
    id: '8',
    quote:
      'The team listened properly and translated a vague brief into something we are proud to live in.',
    name: 'Priya Nair',
    role: 'First-time renovator',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '9',
    quote:
      'MKP translated a tricky brief into a calm, light-filled plan we still love living with every day.',
    name: 'Oliver Grant',
    role: 'Garden studio client',
    avatarSrc: AVATAR_COLOR
  },
  {
    id: '10',
    quote:
      'Clear fees, clear milestones, and a team that genuinely cared about the outcome on site.',
    name: 'Hannah Wells',
    role: 'Interior enthusiast',
    avatarSrc: AVATAR_DARK
  }
]

function copyCard (t) {
  return {
    id: t.id,
    quote: t.quote,
    name: t.name,
    role: t.role,
    avatarSrc: t.avatarSrc
  }
}

const featured = ref(copyCard(pool[0]))
const small = ref([
  copyCard(pool[1]),
  copyCard(pool[2]),
  copyCard(pool[3]),
  copyCard(pool[4])
])

const queue = ref(pool.slice(5).map((t) => copyCard(t)))
const discardStack = ref([])

const isLg = ref(false)
let mediaQueryList

const mobileSlideIndex = ref(0)

const mobileSmallCard = computed(() => {
  const i = mobileSlideIndex.value - 1
  return small.value[i] ?? small.value[0]
})

const canPrev = computed(() => {
  if (isLg.value) {
    return discardStack.value.length > 0
  }
  if (mobileSlideIndex.value > 0) {
    return true
  }
  return discardStack.value.length > 0
})

onMounted(() => {
  mediaQueryList = window.matchMedia('(min-width: 1024px)')
  isLg.value = mediaQueryList.matches
  mediaQueryList.addEventListener('change', syncLg)
})

onUnmounted(() => {
  mediaQueryList?.removeEventListener('change', syncLg)
})

function syncLg (e) {
  isLg.value = e.matches
  mobileSlideIndex.value = 0
}

function onNextClick () {
  if (isLg.value) {
    nextPage()
    mobileSlideIndex.value = 0
    return
  }
  if (mobileSlideIndex.value < 4) {
    mobileSlideIndex.value++
  } else {
    nextPage()
    mobileSlideIndex.value = 0
  }
}

function onPrevClick () {
  if (isLg.value) {
    prevPage()
    mobileSlideIndex.value = 0
    return
  }
  if (mobileSlideIndex.value > 0) {
    mobileSlideIndex.value--
    return
  }
  if (discardStack.value.length) {
    prevPage()
    mobileSlideIndex.value = 4
  }
}

function takeFromQueue () {
  if (!queue.value.length) {
    queue.value = pool.map((t) => copyCard(t))
  }
  return queue.value.shift()
}

function nextPage () {
  const f = { ...featured.value }
  const s = small.value.map((x) => ({ ...x }))
  discardStack.value.push({ ...s[3] })
  const incoming = takeFromQueue()
  featured.value = { ...s[2] }
  small.value = [{ ...f }, { ...s[0] }, { ...s[1] }, { ...incoming }]
  mobileSlideIndex.value = 0
}

function prevPage () {
  if (!discardStack.value.length) {
    return
  }
  const f = { ...featured.value }
  const s = small.value.map((x) => ({ ...x }))
  const tail = discardStack.value.pop()
  queue.value.unshift({ ...s[3] })
  featured.value = { ...s[0] }
  small.value = [{ ...s[1] }, { ...s[2] }, { ...f }, { ...tail }]
  mobileSlideIndex.value = 0
}

function smallCellClass (i) {
  const map = [
    'lg:col-start-2 lg:row-start-1',
    'lg:col-start-2 lg:row-start-2',
    'lg:col-start-3 lg:row-start-1',
    'lg:col-start-3 lg:row-start-2'
  ]
  return map[i] || ''
}
</script>
