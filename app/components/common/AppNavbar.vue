<template>
  <header
    class="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-white/5 backdrop-blur-md"
  >
    <div
      class="mx-auto max-w-[min(100%,85vw,1400px)] py-3.5 sm:px-8 lg:px-10 grid grid-cols-3 items-center md:hidden"
    >
      <!-- Hamburger button -->
      <div class="flex items-center justify-start">
        <button
          class="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none"
          aria-label="Toggle menu"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <span
            class="block h-[1.5px] w-6 bg-white transition-all duration-300 origin-center"
            :class="mobileOpen ? 'translate-y-[6.5px] rotate-45' : ''"
          />

          <span
            class="block h-[1.5px] w-6 bg-white transition-all duration-300"
            :class="mobileOpen ? 'opacity-0' : ''"
          />

          <span
            class="block h-[1.5px] w-6 bg-white transition-all duration-300 origin-center"
            :class="mobileOpen ? '-translate-y-[6.5px] -rotate-45' : ''"
          />
        </button>
      </div>

      <div class="flex items-center justify-center">
        <NuxtLink
          to="/"
          class="flex items-center text-white transition hover:opacity-90"
        >
          <img
            src="/images/brand/mkp-wordmark.png"
            width="220"
            height="44"
            class="h-8 w-auto max-w-[120px] object-contain"
            alt="MKPDesign"
            loading="eager"
            decoding="async"
          />
        </NuxtLink>
      </div>

      <div class="flex items-center justify-end">
        <CommonAppButton to="/contact">
          <span class="font-abaya">Book</span>
        </CommonAppButton>
      </div>
    </div>

    <!-- Desktop bar -->
    <div
      class="mx-auto hidden max-w-[min(100%,85vw,1400px)] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10 md:flex"
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center text-white transition hover:opacity-90"
      >
        <img
          src="/images/brand/mkp-wordmark.png"
          width="220"
          height="44"
          class="h-9 w-auto max-w-[min(260px,55vw)] object-contain object-left sm:h-10 md:h-11"
          alt="MKPDesign"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <nav
        class="font-abaya flex items-center gap-8 uppercase tracking-[0.16em] text-white/95 lg:gap-10 lg:text-xs"
        aria-label="Primary"
      >
        <!-- Home link -->
        <NuxtLink
          to="/"
          class="nav-item relative px-1.5 py-0.5 transition hover:text-white text-[14px]"
          :class="isHome ? 'text-white active-brackets' : 'text-white/75'"
        >
          Home
        </NuxtLink>

        <!-- Services — hover-triggered flyout dropdown -->
        <div class="group relative" @mouseenter="activeService = 'extensions'">
          <button
            class="nav-item relative inline-flex items-center gap-1 px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
            :class="
              isServicesNav ? 'text-white active-brackets' : 'text-white/75'
            "
          >
            SERVICES

            <svg
              class="h-3 w-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              aria-hidden="true"
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div
            class="pointer-events-none invisible absolute top-full z-30 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 -left-[120px] pt-[15px] w-[750px]"
            role="region"
            aria-label="Services menu"
          >
            <div
              class="absolute top-[7px] left-[160px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#f0ebe0]"
              aria-hidden="true"
            />

            <div class="bg-[#f0ebe0] shadow-[0_6px_32px_rgba(0,0,0,0.16)]">
              <div class="flex items-stretch">
                <div class="flex flex-col py-5 min-w-[260px]">
                  <NuxtLink
                    v-for="ser in services"
                    :key="ser.key"
                    :to="ser.to"
                    class="flex w-full items-center justify-between px-6 py-[9px] text-left"
                    @mouseenter="activeService = ser.key"
                  >
                    <span
                      class="font-abaya uppercase tracking-[0.13em] transition-colors text-[14px]"
                      :class="
                        activeService === ser.key
                          ? 'text-[11px] font-bold text-[#8E8169]'
                          : 'text-[11px] font-normal text-[#BBB09D]'
                      "
                    >
                      {{ ser.label }}
                    </span>

                    <span
                      class="ml-4 text-[20px] leading-none transition-colors"
                      :class="
                        activeService === ser.key
                          ? 'text-[#8E8169]'
                          : 'text-[#BBB09D]'
                      "
                      aria-hidden="true"
                      >{{ activeService === ser.key ? "↗" : "→" }}</span
                    >
                  </NuxtLink>
                </div>

                <div class="my-5 w-px self-stretch bg-black/[0.08]" />

                <div
                  class="grid flex-1 self-end grid-cols-2 gap-x-8 gap-y-3 px-7 py-5"
                >
                  <NuxtLink
                    v-for="link in activeLinks"
                    :key="link.label"
                    :to="link.to"
                    class="flex min-w-[220px] items-start gap-3 font-sans text-[10.5px] font-medium uppercase tracking-[0.13em] text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <span
                      class="mt-[1px] text-[13px] leading-none text-neutral-400"
                      aria-hidden="true"
                      >•</span
                    >
                    {{ link.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/projects"
          class="nav-item relative px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
          :class="isProjects ? 'text-white active-brackets' : 'text-white/75'"
        >
          Projects
        </NuxtLink>

        <NuxtLink
          to="/blogs"
          class="font-medium text-white/75 transition hover:text-white"
        >
          Blog
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="font-medium text-white/75 transition hover:text-white"
        >
          About
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="nav-item relative px-1.5 py-0.5 font-medium transition hover:text-white text-[14px]"
          :class="isContact ? 'text-white active-brackets' : 'text-white/75'"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Desktop Nav Links -->
      <div class="shrink-0">
        <CommonAppButton to="/contact">
          <span class="font-abaya hidden sm:inline">Book an appointment</span>
          <span class="font-abaya sm:hidden">Book</span>
        </CommonAppButton>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-md"
        role="navigation"
        aria-label="Mobile menu"
      >
        <div
          class="mx-auto max-w-[min(100%,85vw,1400px)] px-5 py-4 sm:px-8 flex flex-col gap-1"
        >
          <!-- Home -->
          <NuxtLink
            to="/"
            class="font-abaya uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 transition"
            :class="isHome ? 'text-white' : 'text-white/75'"
            @click="mobileOpen = false"
          >
            Home
          </NuxtLink>

          <div>
            <button
              class="font-abaya w-full flex items-center justify-between uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 transition"
              :class="isServicesNav ? 'text-white' : 'text-white/75'"
              @click="mobileServicesOpen = !mobileServicesOpen"
            >
              <span>Services</span>

              <svg
                class="h-3 w-3 transition-transform duration-200"
                :class="mobileServicesOpen ? 'rotate-180' : ''"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5 6 7.5 9 4.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="mobileServicesOpen"
                class="pl-4 pb-1 flex flex-col gap-0.5"
              >
                <NuxtLink
                  v-for="ser in services"
                  :key="ser.key"
                  :to="ser.to"
                  class="font-abaya uppercase tracking-[0.13em] text-[11px] text-white/60 px-1.5 py-2 transition hover:text-white/90"
                  @click="mobileOpen = false"
                >
                  {{ ser.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <!-- Projects -->
          <NuxtLink
            to="/projects"
            class="font-abaya uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 transition"
            :class="isProjects ? 'text-white' : 'text-white/75'"
            @click="mobileOpen = false"
          >
            Projects
          </NuxtLink>

          <!-- Blog -->
          <NuxtLink
            to="/blogs"
            class="font-abaya uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 text-white/75 transition hover:text-white"
            @click="mobileOpen = false"
          >
            Blog
          </NuxtLink>

          <!-- About -->
          <NuxtLink
            to="/about"
            class="font-abaya uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 text-white/75 transition hover:text-white"
            @click="mobileOpen = false"
          >
            About
          </NuxtLink>

          <!-- Contact -->
          <NuxtLink
            to="/contact"
            class="font-abaya uppercase tracking-[0.16em] text-[13px] px-1.5 py-2.5 transition"
            :class="isContact ? 'text-white' : 'text-white/75'"
            @click="mobileOpen = false"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { services, servicesData } from "@/constants/navigation";

const route = useRoute();

const isRoute = (path) => route.path === path;

const isRouteGroup = (path) => route.path.startsWith(path);

const isHome = computed(() => isRoute("/"));
const isProjects = computed(() => isRouteGroup("/projects"));
const isContact = computed(() => isRoute("/contact"));
const isServicesNav = computed(() => isRouteGroup("/services"));

const activeService = ref("extensions");

const activeLinks = computed(() => servicesData[activeService.value] ?? []);

const mobileOpen = ref(false);
const mobileServicesOpen = ref(false);

watch(
  () => route.path,
  () => {
    mobileOpen.value = false;
    mobileServicesOpen.value = false;
  }
);
</script>

<style scoped>
.active-brackets::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -8px;
  width: 17px;
  height: 6px;
  border-top: 1.5px solid rgba(255, 255, 255, 0.6);
}
.active-brackets::after {
  content: "";
  position: absolute;
  bottom: -4px;
  right: -8px;
  width: 17px;
  height: 6px;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.6);
}
</style>
