<template>
  <footer class="font-sans text-white">
    <div class="bg-[#1B1B1B]">
      <!-- CTA: image + overlay + fade into footer -->
      <section
        class="relative flex min-h-[min(55vh,600px)] flex-col overflow-hidden sm:min-h-[min(52vh,560px)] md:min-h-[min(50vh,520px)]"
        aria-labelledby="footer-cta-heading"
      >
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url('${ctaImageUrl}')` }"
          role="presentation"
        />

        <!-- Uniform light overlay across full image -->
        <div
          class="absolute inset-0"
          style="background: rgba(0,0,0,0.32);"
          role="presentation"
        />
        <!-- Bottom fade into footer -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-0"
          style="height: min(52%,360px); background: linear-gradient(to bottom, transparent 0%, rgba(27,27,27,0.6) 60%, #1B1B1B 100%);"
          role="presentation"
        />

        <div
          class="relative z-[1] mx-auto flex w-full max-w-[min(100%,85vw,1400px)] flex-1 flex-col items-center px-5 pb-24 pt-28 text-center sm:px-8 sm:pb-28 sm:pt-32 md:px-10 md:pb-32 md:pt-36 lg:pb-36 lg:pt-40"
        >
          <div
            class="flex w-full flex-col items-center gap-9 md:gap-10 lg:gap-11"
          >
            <div
              class="flex w-full min-w-0 justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <!-- CHANGE 2: Heading size reduced — was 58px/64px, now 42px/46px -->
              <h2
                id="footer-cta-heading"
                class="font-abaya whitespace-nowrap text-center font-abhaya font-bold uppercase leading-[1.2] tracking-normal text-white"
                style="font-size: clamp(1.3rem, calc(0.6rem + 2.8vw), 2.4rem);"
              >
                Ready to transform your home?
              </h2>
            </div>
            <p
              class="mx-auto w-full max-w-[min(56vw,42rem)] text-center font-poppins text-[#FFFFFF] opacity-75"
            >
              Bring your vision to life with MKPDesign. From the first sketch to the final sign-off, we manage the details so you don't have to. Whether it's a loft conversion, modern extension or full renovation, let's start the conversation and create a space you'll love.
            </p>
            <div class="pt-1">
              <NuxtLink
                to="/contact"
                class="box-border inline-flex h-[44px] w-[177px] shrink-0 items-center justify-center gap-3 rounded-[46px] border border-white bg-transparent px-6 py-2 font-abaya text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
              >
                <span class="leading-none">Get in touch</span>

                <ArrowRight class="w-5 h-5 translate-y-[1px]" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Main footer: brand left + nav columns pushed to right -->
      <div
        class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 pb-16 pt-10 sm:px-8 sm:pb-16 sm:pt-12 md:px-10 md:pb-20 lg:pt-14"
      >
        <div
          class="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-0"
        >
          <!-- Brand column: fixed width, does NOT grow -->
          <div
            class="w-full shrink-0 text-left lg:w-[260px] lg:min-w-[260px]"
          >
            <NuxtLink
              to="/"
              class="inline-flex items-center gap-3 text-white transition hover:opacity-90"
            >
              <img
                src="/images/brand/mkp-wordmark.png"
                width="52"
                height="52"
                class="h-10 w-auto shrink-0 object-contain sm:h-11"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </NuxtLink>
            <p
              class="mt-5 max-w-[22rem] font-poppins text-[13px] leading-[1.55] text-[#b8b8b8] sm:mt-6 lg:max-w-[220px]"
            >
              MKPDesign – delivering innovative architecture and design solutions across London &amp; Surrey. Connect with us for expert guidance and project inspiration.
            </p>
          </div>

          <!-- CHANGE 3: Nav columns — margin-left:auto pushes them to the far right -->
          <div
            class="flex min-w-0 flex-col gap-10 font-poppins lg:ml-auto"
          >
            <div
              class="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:items-stretch sm:gap-0"
              style="column-gap: clamp(40px, 4vw, 72px);"
            >
              <nav
                v-for="block in linkBlocks"
                :key="block.aria"
                class="relative flex flex-col border-l border-[#3d3d3d] pl-6 sm:pl-7 md:pl-8 lg:pl-9 xl:pl-10"
                :aria-label="block.aria"
              >
                <p
                  class="font-poppins text-[13px] font-semibold uppercase leading-[1.5] tracking-[0.12em] text-[#938F88]"
                >
                  {{ block.title }}
                </p>
                <ul class="mt-6 flex flex-1 flex-col space-y-3 sm:mt-7">
                  <li v-for="item in block.items" :key="item.to + item.label">
                    <NuxtLink
                      :to="item.to"
                      class="font-poppins text-[14px] font-normal capitalize leading-[1.5] tracking-normal text-[#DADADA] transition hover:text-white"
                    >{{ item.label }}</NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-[#2a2a2a] bg-[#121212]">
        <div
          class="mx-auto flex max-w-[min(100%,85vw,1400px)] flex-col gap-3 px-5 py-4 font-poppins text-[14px] text-white sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {{ year }} MKPDesign All Rights Reserved</p>
          <NuxtLink
            to="/terms"
            class="text-white"
          >
            Terms &amp; Conditions
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
const ctaImageUrl = '/images/footer/cta-background.png'

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Our Process', to: '/#process-heading' },
  { label: 'Testimonials', to: '/#testimonials-heading' },
  { label: 'Locations', to: '/locations' }
]

const specializeLinks = [
  { label: 'Extensions', to: '/services/extensions' },
  { label: 'Conversions', to: '/services/conversions' },
  { label: 'New Builds', to: '/services/new-builds' },
  { label: 'Planning & Compliance', to: '/services/planning' }
]

const otherLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/#faq-heading' },
  { label: 'Guides & Tips', to: '/guides' },
  { label: 'Contact Us', to: '/contact' }
]

const linkBlocks = [
  { aria: 'Quick links', title: 'Quick links', items: quickLinks },
  { aria: 'Specializations', title: 'Specialize', items: specializeLinks },
  { aria: 'More', title: 'Others', items: otherLinks }
]
</script>