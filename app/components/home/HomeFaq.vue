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
        COMMON QUESTIONS
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
    id: '1',
    question: 'How do I know if my project is worth doing?',
    answer:
      "If done properly, most projects add more than just space, they add real value to how you live and to the property itself. We assess your home early on and guide you honestly on what’s worth doing and what isn’t."
  },
  {
    id: '2',
    question: 'How long does the process take?',
    answer: "Every project is different, but typically design and planning can take a few months depending on complexity and council timelines. We’ll give you a clear idea from the start so you know what to expect."
  },
  {
    id: '3',
    question: 'How long does planning permission take?',
    answer: "Most planning applications are decided within 8 weeks from the date they are validated by the council. We manage the submission process carefully to avoid delays and give your application the best chance of a smooth approval."
  },
  {
    id: '4',
    question: 'Can you help maximise the value of my property?',
    answer: "Yes. This is something we consider from day one. It’s not just about adding space, it’s about creating something that feels well designed, which is what buyers actually respond to."
  },
  {
    id: '5',
    question: 'What if I’m not sure what I want yet?',
    answer: "That’s completely normal. Most clients don’t come with a fixed idea. We guide you through options, challenge what doesn’t work, and help shape a direction that makes sense for your home."
  },
  {
    id: '6',
    question: 'Do you deal with planning permission and approvals?',
    answer: "Yes. We handle all drawings and submissions, and guide you through the process to give your project the best chance of approval."
  },
  {
    id: '7',
    question: 'Will you tell me if something isn’t a good idea?',
    answer: "Absolutely. We don’t just agree with everything. If something won’t work or could be done better, we’ll explain why and suggest a better approach."
  },
  {
    id: '8',
    question: 'How much do your services cost?',
    answer: "Fees vary depending on the size and complexity of the project. We provide clear, upfront pricing so you know exactly what’s involved before anything starts."
  },
  {
    id: '9',
    question: 'Do you work with builders?',
    answer: "Yes. We can recommend trusted builders we’ve worked with before and ensure the design is carried through properly during construction."
  },
  {
    id: '10',
    question: 'How do I get started?',
    answer: "We offer a free online consultation to get things moving. Simply send us your address and a brief outline of what you’re looking to do. We’ll review your property and let you know what’s possible before you commit to anything. If you’d like to move forward, we’ll then provide a clear quote based on your project."
  },
  {
    id: '11',
    question: 'Do you offer site visits?',
    answer: "Yes, we also offer on-site consultations where we can walk through your home and explore ideas in more detail. <br /> This is charged at £50 per hour, plus £20 for travel."
  }
]

const openIndex = ref(0)

function toggle (index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>
