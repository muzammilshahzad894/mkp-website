<template>
  <section
    class="bg-[#E5E3DB] py-14 text-neutral-900 sm:py-16 md:py-20"
    aria-labelledby="get-in-touch-heading"
  >
    <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">
      <div
        class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.70fr)_minmax(0,1.60fr)] lg:items-start"
      >
        <!-- Left: contact info -->
        <div class="flex flex-col gap-11 lg:gap-12 lg:pt-1">
          <div v-for="item in contactInfo" :key="item.label">
            <p class="font-abaya text-[13px] font-semibold uppercase text-[#6b6b6b] leading-tight m-0">
              {{ item.label }}
            </p>
            <p class="mt-2 font-poppins font-semibold tracking-[0.02em] leading-[1.45] text-[#090907] mb-0">
              <a
                v-if="item.href"
                :href="item.href"
              >{{ item.value }}</a>
              <template v-else>{{ item.value }}</template>
            </p>
          </div>
        </div>

        <!-- Right: form card -->
        <div class="border border-white bg-white px-6 py-9 shadow-sm sm:px-9 sm:py-11 md:px-10 md:py-12">
          <h2
            id="get-in-touch-heading"
            class="font-abaya text-[clamp(2rem,3.8vw,2.65rem)] uppercase tracking-[0.04em] text-[#a99b83] m-0 leading-[1.1]"
          >
            Get in touch
          </h2>

          <form class="mt-9 space-y-7 md:mt-10 md:space-y-8" @submit.prevent="onSubmit">

            <!-- Floating text inputs -->
            <div v-for="field in textFields" :key="field.id" class="float-field">
              <input
                :id="field.id"
                v-model="form[field.key]"
                :type="field.type"
                :name="field.key"
                :autocomplete="field.autocomplete"
                class="float-input"
                @focus="setFocus(field.key, true)"
                @blur="setFocus(field.key, false)"
              >
              <label
                :for="field.id"
                class="float-label"
                :class="{ 'float-label--up': isUp(field.key) }"
              >{{ field.label }}</label>
            </div>

            <!-- Select -->
            <div class="relative pt-[10px]">
              <select
                id="contact-interest"
                v-model="form.interest"
                name="interest"
                class="block w-full pb-[10px] pt-[22px] pr-7 border-0 border-b border-[#d4d4d4] rounded-none bg-transparent font-poppins text-sm text-neutral-900 outline-none appearance-none cursor-pointer transition-colors duration-[180ms] focus:border-b-neutral-900"
                @focus="setFocus('interest', true)"
                @blur="setFocus('interest', false)"
              >
                <option value="" disabled></option>
                <option value="extensions">Extensions</option>
                <option value="conversions">Conversions</option>
                <option value="new-build">New build</option>
                <option value="planning">Planning &amp; compliance</option>
                <option value="other">Other</option>
              </select>
              <label
                for="contact-interest"
                class="float-label"
                :class="{ 'float-label--up': isUp('interest') }"
              >Interested in</label>
              <span class="absolute right-0.5 bottom-[14px] text-xs text-neutral-500 pointer-events-none" aria-hidden="true">▾</span>
            </div>

            <!-- Message textarea -->
            <div class="relative pt-[10px]">
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="3"
                class="block w-full min-h-[100px] pb-[10px] pt-[22px] border-0 border-b border-[#d4d4d4] rounded-none bg-transparent font-poppins text-sm text-neutral-900 outline-none appearance-none resize-y leading-[1.55] transition-colors duration-[180ms] focus:border-b-neutral-900"
                @focus="setFocus('message', true)"
                @blur="setFocus('message', false)"
              />
              <label
                for="contact-message"
                class="float-label max-w-[95%] tracking-[0.1em]"
                :class="{ 'float-label--up': isUp('message') }"
              >What would you like us to accomplish for you?</label>
            </div>

            <!-- Budget -->
            <div>
              <p class="form-question">Have you considered how much the construction will cost?</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <button
                  v-for="opt in budgetOptions"
                  :key="opt"
                  type="button"
                  class="px-[14px] py-2 border rounded-none bg-[#efede8] font-poppins text-[11px] font-normal text-neutral-600 cursor-pointer transition-colors duration-150 hover:border-[#9ca3af]"
                  :class="form.budget === opt
                    ? 'border-[#a99b83] shadow-[0_0_0_1px_rgba(169,155,131,0.35)]'
                    : 'border-[#d1d5db]'"
                  @click="form.budget = opt"
                >
                  {{ opt }}
                </button>
              </div>
            </div>

            <!-- Engagement radio -->
            <fieldset class="m-0 p-0 border-0 min-w-0">
              <legend class="form-question">
                Our minimum level of engagement is $3000 and can go up from there depending on the scope of your project. Is this realistic for you?
              </legend>
              <div class="mt-4 flex gap-10">
                <label v-for="opt in yesNoOptions" :key="String(opt.value)" class="inline-flex items-center gap-2 font-poppins text-[13px] text-neutral-800 cursor-pointer select-none">
                  <input v-model="form.engagementOk" type="radio" name="engagement" :value="opt.value" class="w-[15px] h-[15px] accent-[#a99b83] cursor-pointer shrink-0 m-0">
                  {{ opt.label }}
                </label>
              </div>
            </fieldset>

            <!-- File upload -->
            <div>
              <p class="form-question">Optionally, you can upload up to three documents you think will help us understand your project</p>
              <div class="mt-4">
                <label class="inline-block px-5 py-[9px] border border-[#d1d5db] rounded-none bg-[#efede8] font-poppins text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-600 cursor-pointer transition-colors duration-150 hover:border-[#9ca3af]">
                  <span>Choose files</span>
                  <input
                    type="file"
                    class="sr-only"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    @change="onFiles"
                  >
                </label>
                <p v-if="fileNames.length" class="mt-2 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-xs text-neutral-500">
                  {{ fileNames.join(', ') }}
                </p>
              </div>
            </div>

            <!-- Newsletter radio -->
            <fieldset class="m-0 p-0 border-0 min-w-0">
              <legend class="form-question">Sign me up for the Urbanist Architecture monthly newsletter</legend>
              <div class="mt-4 flex gap-10">
                <label v-for="opt in yesNoOptions" :key="String(opt.value)" class="inline-flex items-center gap-2 font-poppins text-[13px] text-neutral-800 cursor-pointer select-none">
                  <input v-model="form.newsletter" type="radio" name="newsletter" :value="opt.value" class="w-[15px] h-[15px] accent-[#a99b83] cursor-pointer shrink-0 m-0">
                  {{ opt.label }}
                </label>
              </div>
            </fieldset>

            <!-- Submit -->
            <div class="flex justify-end pt-1">
              <AppButton type="submit" variant="darkSolid">
                Send message
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '../common/AppButton.vue'

const budgetOptions = ['< 250K', '250K-500K', '500K-1M', '1M-5M', '> 5M']

const yesNoOptions = [
  { label: 'Yes', value: true },
  { label: 'No', value: false },
]

const contactInfo = [
  { label: 'Call us', value: '9632587415' },
  { label: 'Mail us', value: 'mkpdesign@gmail.com', href: 'mailto:mkpdesign@gmail.com' },
  { label: 'Visit us', value: '121, King Street Melbourne, 3000, Australia' },
]

const textFields = [
  { id: 'contact-name',    key: 'name',    type: 'text',  label: 'Name',           autocomplete: 'name' },
  { id: 'contact-email',   key: 'email',   type: 'email', label: 'Email address',  autocomplete: 'email' },
  { id: 'contact-phone',   key: 'phone',   type: 'tel',   label: 'Phone number',   autocomplete: 'tel' },
  { id: 'contact-address', key: 'address', type: 'text',  label: 'Project address', autocomplete: 'street-address' },
]

const form = reactive({
  name: '',
  email: '',
  interest: '',
  phone: '',
  address: '',
  message: '',
  budget: '',
  engagementOk: true,
  newsletter: true,
})

const focus = reactive({
  name: false,
  email: false,
  interest: false,
  phone: false,
  address: false,
  message: false,
})

const fileNames = ref([])

function setFocus(key, value) {
  focus[key] = value
}

function isUp(key) {
  if (focus[key]) return true
  const v = form[key]
  return typeof v === 'string' ? v.trim().length > 0 : false
}

function onFiles(e) {
  fileNames.value = Array.from(e.target.files ?? []).slice(0, 3).map(f => f.name)
}

function onSubmit() {
  // Wire to API or form service when ready
}
</script>

<style scoped>
/* ─── Floating label shared styles ───
   Kept as minimal scoped CSS since Tailwind can't handle
   sibling-state transitions or dynamic top/font-size tweens cleanly. */
.float-input {
  display: block;
  width: 100%;
  padding: 22px 0 10px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 0;
  background: transparent;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  color: #171717;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  transition: border-color 0.18s ease;
}
.float-input:focus {
  border-bottom-color: #171717;
}

.float-label {
  position: absolute;
  left: 0;
  top: 28px;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #938F8899;
  pointer-events: none;
  line-height: 1.2;
  transform-origin: left top;
  transition: top 0.2s ease, font-size 0.2s ease, letter-spacing 0.2s ease, color 0.2s ease;
}
.float-label--up {
  top: 2px;
  font-size: 12px;
  font-weight: 600;
  color: #746c5e99;
}

/* Wrapper for text inputs */
.float-field {
  position: relative;
  padding-top: 10px;
}

.form-question {
  margin: 0;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.65;
  color: #938F8899;
}
</style>