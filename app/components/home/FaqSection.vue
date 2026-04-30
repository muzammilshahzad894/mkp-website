<template>
  <section
    class="bg-white text-neutral-800"
    aria-labelledby="faq-heading"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-16 xl:py-20"
    >
      <h2
        id="faq-heading"
        class="font-abaya text-3xl font-normal uppercase tracking-[0.04em] text-[#c4b59a] sm:text-4xl md:text-[2.35rem]"
      >
        FAQ'S
      </h2>
      <p
        class="mt-3 max-w-2xl font-dm text-[15px] font-normal leading-relaxed text-neutral-500 sm:text-base"
      >
        Have Questions or Need Support? Start Here.
      </p>
      <div
        class="mt-4 h-px w-full bg-neutral-200"
        aria-hidden="true"
      />

      <ul
        class="mt-8 space-y-0 sm:mt-10"
        role="list"
      >
        <li
          v-for="(item, index) in items"
          :key="item.id"
        >
          <div
            :class="
              openIndex === index
                ? 'bg-[#f2efe9] px-4 py-5 sm:px-6 sm:py-6'
                : 'bg-transparent px-4 py-5 sm:px-6 sm:py-5'
            "
          >
            <h3 class="m-0">
              <button
                type="button"
                class="flex w-full items-start justify-between gap-4 text-left"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-panel-${item.id}`"
                :id="`faq-trigger-${item.id}`"
                @click="toggle(index)"
              >
                <span
                  class="min-w-0 flex-1 font-poppins text-[18px]"
                  :class="openIndex === index ? 'font-semibold' : 'font-normal'"
                >
                  {{ item.question }}
                </span>
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center"
                  :class="
                    openIndex === index
                      ? 'border border-[#d4cdc4] bg-[#e5dfd6]'
                      : 'border border-neutral-300 bg-white'
                  "
                  aria-hidden="true"
                >
                  <ChevronDown
                    class="h-5 w-5 text-neutral-700 transition-transform duration-300 ease-in-out"
                    :class="openIndex === index ? 'rotate-180' : 'rotate-0'"
                  />
                </span>
              </button>
            </h3>
            <div
              v-show="openIndex === index"
              :id="`faq-panel-${item.id}`"
              role="region"
              :aria-labelledby="`faq-trigger-${item.id}`"
            >
              <p
                class="max-w-3xl font-poppins text-[16px] font-normal leading-[1.75] text-neutral-500"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
const items = [
  {
    id: 'timeline',
    question: 'How long does an architectural project typically take?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Venenatis congue augue placerat mauris cras ac tortor consectetur. A sit euismod proin id nibh. Convallis nibh risus phasellus et. Sem lectus amet posuere in in aliquet venenatis.'
  },
  {
    id: 'start',
    question: 'How can I get started with MKP Design?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Venenatis congue augue placerat mauris cras ac tortor consectetur. A sit euismod proin id nibh. Convallis nibh risus phasellus et. Sem lectus amet posuere in in aliquet venenatis.'
  },
  {
    id: 'cost',
    question: 'What is the cost of your services?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Venenatis congue augue placerat mauris cras ac tortor consectetur. A sit euismod proin id nibh. Convallis nibh risus phasellus et. Sem lectus amet posuere in in aliquet venenatis.'
  },
  {
    id: 'interior',
    question: 'Do you offer interior design services?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Venenatis congue augue placerat mauris cras ac tortor consectetur. A sit euismod proin id nibh. Convallis nibh risus phasellus et. Sem lectus amet posuere in in aliquet venenatis.'
  },
  {
    id: 'permits',
    question: 'Do you assist with permits and regulatory approvals?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Venenatis congue augue placerat mauris cras ac tortor consectetur. A sit euismod proin id nibh. Convallis nibh risus phasellus et. Sem lectus amet posuere in in aliquet venenatis.'
  }
]

const openIndex = ref(0)

function toggle (index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>
