<template>
  <section
    class="bg-[#E5E3DB] py-14 text-neutral-900 sm:py-16 md:py-20"
    aria-labelledby="get-in-touch-heading"
  >
    <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">
      <div
        class="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:items-start lg:gap-14 xl:gap-20"
      >
        <!-- Left: contact info -->
        <div class="flex flex-col gap-11 lg:gap-12 lg:pt-1">
          <div>
            <p class="info-label">Call us</p>
            <p class="info-value">9632587415</p>
          </div>
          <div>
            <p class="info-label">Mail us</p>
            <p class="info-value">
              <a
                href="mailto:mkpdesign@gmail.com"
                class="underline decoration-neutral-500/45 underline-offset-[0.2em] transition hover:decoration-neutral-900"
              >mkpdesign@gmail.com</a>
            </p>
          </div>
          <div>
            <p class="info-label">Visit us</p>
            <p class="info-value">
              121, King Street Melbourne, 3000, Australia
            </p>
          </div>
        </div>

        <!-- Right: form -->
        <div
          class="border border-solid border-white bg-white px-6 py-9 shadow-sm sm:px-9 sm:py-11 md:px-10 md:py-12"
        >
          <h2
            id="get-in-touch-heading"
            class="heading-get-in-touch"
          >
            Get in touch
          </h2>

          <form class="mt-9 space-y-7 md:mt-10 md:space-y-8" @submit.prevent="onSubmit">
            <!-- Full-width stack; floating labels -->
            <div class="float-field">
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                class="float-input"
                @focus="setFocus('name', true)"
                @blur="setFocus('name', false)"
              >
              <label
                for="contact-name"
                class="float-label"
                :class="{ 'float-label--up': isUp('name') }"
              >Name</label>
            </div>

            <div class="float-field">
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                class="float-input"
                @focus="setFocus('email', true)"
                @blur="setFocus('email', false)"
              >
              <label
                for="contact-email"
                class="float-label"
                :class="{ 'float-label--up': isUp('email') }"
              >Email address</label>
            </div>

            <div class="float-field float-field--select">
              <select
                id="contact-interest"
                v-model="form.interest"
                name="interest"
                class="float-input float-input--select"
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
              <span class="float-chevron" aria-hidden="true">▾</span>
            </div>

            <div class="float-field">
              <input
                id="contact-phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                autocomplete="tel"
                class="float-input"
                @focus="setFocus('phone', true)"
                @blur="setFocus('phone', false)"
              >
              <label
                for="contact-phone"
                class="float-label"
                :class="{ 'float-label--up': isUp('phone') }"
              >Phone number</label>
            </div>

            <div class="float-field">
              <input
                id="contact-address"
                v-model="form.address"
                type="text"
                name="address"
                autocomplete="street-address"
                class="float-input"
                @focus="setFocus('address', true)"
                @blur="setFocus('address', false)"
              >
              <label
                for="contact-address"
                class="float-label"
                :class="{ 'float-label--up': isUp('address') }"
              >Project address</label>
            </div>

            <div class="float-field float-field--textarea">
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="3"
                class="float-input float-input--textarea"
                @focus="setFocus('message', true)"
                @blur="setFocus('message', false)"
              />
              <label
                for="contact-message"
                class="float-label float-label--multiline"
                :class="{ 'float-label--up': isUp('message') }"
              >What would you like us to accomplish for you?</label>
            </div>

            <div>
              <p class="form-question">
                Have you considered how much the construction will cost?
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <button
                  v-for="opt in budgetOptions"
                  :key="opt"
                  type="button"
                  class="budget-pill"
                  :class="{ 'budget-pill--active': form.budget === opt }"
                  @click="form.budget = opt"
                >
                  {{ opt }}
                </button>
              </div>
            </div>

            <fieldset class="fieldset-reset">
              <legend class="form-question">
                Our minimum level of engagement is $3000 and can go up from there depending on the scope of your project. Is this realistic for you?
              </legend>
              <div class="mt-4 flex gap-10">
                <label class="radio-label">
                  <input v-model="form.engagementOk" type="radio" name="engagement" :value="true" class="radio-dot">
                  Yes
                </label>
                <label class="radio-label">
                  <input v-model="form.engagementOk" type="radio" name="engagement" :value="false" class="radio-dot">
                  No
                </label>
              </div>
            </fieldset>

            <div>
              <p class="form-question">
                Optionally, you can upload up to three documents you think will help us understand your project
              </p>
              <div class="mt-4">
                <label class="upload-btn">
                  <span>Choose files</span>
                  <input
                    type="file"
                    class="sr-only"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    @change="onFiles"
                  >
                </label>
                <p v-if="fileNames.length" class="mt-2 font-poppins text-xs text-neutral-500">
                  {{ fileNames.join(', ') }}
                </p>
              </div>
            </div>

            <fieldset class="fieldset-reset">
              <legend class="form-question">
                Sign me up for the Urbanist Architecture monthly newsletter
              </legend>
              <div class="mt-4 flex gap-10">
                <label class="radio-label">
                  <input v-model="form.newsletter" type="radio" name="newsletter" :value="true" class="radio-dot">
                  Yes
                </label>
                <label class="radio-label">
                  <input v-model="form.newsletter" type="radio" name="newsletter" :value="false" class="radio-dot">
                  No
                </label>
              </div>
            </fieldset>

            <div class="flex justify-end pt-1">
              <button type="submit" class="submit-btn">
                <span>Send message</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const budgetOptions = ['< 250K', '250K-500K', '500K-1M', '1M-5M', '> 5M']

const form = reactive({
  name: '',
  email: '',
  interest: '',
  phone: '',
  address: '',
  message: '',
  budget: '',
  engagementOk: true,
  newsletter: true
})

const focus = reactive({
  name: false,
  email: false,
  interest: false,
  phone: false,
  address: false,
  message: false
})

const fileNames = ref([])

function setFocus (key, value) {
  focus[key] = value
}

function isUp (key) {
  if (focus[key]) {
    return true
  }
  const v = form[key]
  if (typeof v === 'string') {
    return v.trim().length > 0
  }
  return false
}

function onFiles (e) {
  const files = Array.from(e.target.files || []).slice(0, 3)
  fileNames.value = files.map((f) => f.name)
}

function onSubmit () {
  // Wire to API or form service when ready
}
</script>

<style scoped>
/* ─── Left column ─── */
.info-label {
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #6b6b6b;
  margin: 0;
  line-height: 1.2;
}

.info-value {
  margin-top: 8px;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.45;
  color: #171717;
  margin-bottom: 0;
}

/* ─── Card title ─── */
.heading-get-in-touch {
  font-family: 'Abhaya Libre', 'Palatino Linotype', Georgia, serif;
  font-size: clamp(2rem, 3.8vw, 2.65rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #a99b83;
  margin: 0;
  line-height: 1.1;
}

/* ─── Floating fields ─── */
.float-field {
  position: relative;
  padding-top: 10px;
}

.float-field--select {
  padding-top: 10px;
}

.float-input {
  display: block;
  width: 100%;
  padding: 22px 0 10px;
  margin: 0;
  border: none !important;
  border-bottom: 1px solid #d4d4d4 !important;
  border-radius: 0;
  background: transparent;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #171717;
  outline: none !important;
  box-shadow: none !important;
  -webkit-appearance: none;
  appearance: none;
  transition: border-color 0.18s ease;
}

.float-input:focus {
  border-bottom-color: #171717 !important;
}

.float-input--select {
  padding-right: 28px;
  cursor: pointer;
}

.float-input--textarea {
  min-height: 100px;
  resize: vertical;
  line-height: 1.55;
}

.float-label {
  position: absolute;
  left: 0;
  top: 28px;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #737373;
  pointer-events: none;
  line-height: 1.2;
  transform-origin: left top;
  transition:
    top 0.2s ease,
    font-size 0.2s ease,
    letter-spacing 0.2s ease,
    color 0.2s ease;
}

.float-label--multiline {
  top: 26px;
  max-width: 95%;
  letter-spacing: 0.1em;
}

.float-label--up {
  top: 2px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #6b6b6b;
}

.float-label--up.float-label--multiline {
  top: 0;
}

.float-chevron {
  position: absolute;
  right: 2px;
  bottom: 14px;
  font-size: 12px;
  color: #737373;
  pointer-events: none;
}

/* ─── Static question blocks ─── */
.form-question {
  width: 100%;
  margin: 0;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  line-height: 1.65;
  color: #737373;
}

.fieldset-reset {
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
}

/* ─── Budget (rectangular, no pill radius) ─── */
.budget-pill {
  padding: 8px 14px;
  border: 1px solid #d1d5db;
  border-radius: 0;
  background: #efede8;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #404040;
  cursor: pointer;
  transition: border-color 0.15s ease;
  line-height: 1.2;
}

.budget-pill:hover {
  border-color: #9ca3af;
}

.budget-pill--active {
  border-color: #a99b83;
  box-shadow: 0 0 0 1px rgba(169, 155, 131, 0.35);
}

.radio-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 13px;
  color: #262626;
  cursor: pointer;
  user-select: none;
}

.radio-dot {
  width: 15px;
  height: 15px;
  accent-color: #a99b83;
  cursor: pointer;
  flex-shrink: 0;
  margin: 0;
}

.upload-btn {
  display: inline-block;
  padding: 9px 20px;
  border: 1px solid #d1d5db;
  border-radius: 0;
  background: #efede8;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #404040;
  cursor: pointer;
  transition: border-color 0.15s ease;
}

.upload-btn:hover {
  border-color: #9ca3af;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  border-radius: 9999px;
  background: #171717;
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: background 0.15s ease;
}

.submit-btn:hover {
  background: #404040;
}

.submit-btn:focus-visible {
  outline: 2px solid #171717;
  outline-offset: 2px;
}
</style>
