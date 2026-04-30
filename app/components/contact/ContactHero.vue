<template>
  <section
    class="relative min-h-screen w-full overflow-hidden font-sans"
    aria-labelledby="goodfit-heading"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${heroUrl}')` }"
      role="presentation"
    />

    <LayoutAppNavbar />

    <!-- Content pinned to bottom -->
    <div class="relative z-10 flex min-h-screen flex-col justify-end pb-8 sm:pb-12 md:pb-16">
      <div class="mx-auto w-full px-5 sm:px-8 md:px-10 max-w-[min(100%,85vw,1400px)]">

        <!-- Heading -->
        <h1
          id="goodfit-heading"
          class="font-abaya uppercase"
          style="
            font-size: clamp(1.6rem, 3.8vw, 3.6rem);
            line-height: 1.1;
            letter-spacing: 0.01em;
          "
        >
          <span style="color: #ffffff;">WE ARE A </span><span style="color: #A99B83;">GOOD FIT IF</span>
        </h1>

        <!-- Separator -->
        <div
          class="w-full bg-white"
          style="height: 1px; margin-top: 16px; margin-bottom: 20px; opacity: 0.55;"
          aria-hidden="true"
        />

        <!-- Three columns -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">

          <!-- Col 1 -->
          <div class="sm:pr-6 md:pr-8 lg:pr-10">
            <h2
              class="font-abaya uppercase text-white text-[20px] mb-5"
              style="
                font-weight: 500;
                letter-spacing: 0.08em;
                line-height: 1.3;
              "
            >Value Intelligent Design</h2>
            <p
              class="font-poppins text-white text-[14px]"
              style="
                font-weight: 400;
                line-height: 1.72;
                margin-top: 12px;
              "
            >
              You believe every project deserves a tailored solution thoughtful, functional, and visually refined. You appreciate design that responds to context rather than follows convention.
            </p>
          </div>

          <!-- Col 2 -->
          <div class="border-t border-white pt-8 sm:border-l sm:border-t-0 sm:px-6 sm:pt-0 md:px-8 lg:px-10">
            <h2
              class="font-abaya uppercase text-white text-[20px] mb-5"
              style="
                font-weight: 500;
                letter-spacing: 0.08em;
                line-height: 1.3;
              "
            >You Expect Precision</h2>
            <p
              class="font-poppins text-white text-[14px]"
              style="
                font-weight: 400;
                line-height: 1.72;
                margin-top: 12px;
              "
            >
              You seek a team that delivers with efficiency, strategic clarity, and architectural rigor ensuring outcomes that are on brief, on time, and built to last.
            </p>
          </div>

          <!-- Col 3 -->
          <div class="border-t border-white pt-8 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 md:pl-8 lg:pl-10">
            <h2
              class="font-abaya uppercase text-white text-[20px] mb-5"
              style="
                font-weight: 500;
                letter-spacing: 0.08em;
                line-height: 1.3;
              "
            >True Design Partnership</h2>
            <p
              class="font-poppins text-white text-[14px]"
              style="
                font-weight: 400;
                line-height: 1.72;
                margin-top: 12px;
              "
            >
              You want to collaborate with a firm that shares your vision, challenges assumptions constructively, and stands with conviction behind every detail of your project.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroUrl = '/images/contact/contact-hero.png'
</script>