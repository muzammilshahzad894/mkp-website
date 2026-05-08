<template>
  <section
    class="bg-[#f7f6f3] py-12 sm:py-14 md:py-16"
    aria-label="Office location map"
  >
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10"
    >
      <div
        class="overflow-hidden border border-solid border-white bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
      >
        <div class="overflow-hidden border bg-white h-[450px]">
          <iframe
            class="w-full h-full border-0"
            loading="lazy"
            decoding="async"
            allowfullscreen
            src="https://www.google.com/maps?q=Croydon&output=embed"
            alt="Map showing our service area with a marker for Croydon"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
