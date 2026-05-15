<template>
  <div class="mt-12 overflow-hidden sm:mt-14 lg:mt-16">
    <p class="sr-only">Local authorities and boroughs we work with</p>

    <div class="partner-slider">
      <ul class="partner-track">
        <li
          v-for="(p, index) in [...partners, ...partners]"
          :key="index"
          class="flex shrink-0 items-center justify-center px-8"
        >
          <NuxtImg
            :src="p.src"
            :alt="p.alt"
            class="h-12 w-auto max-w-[220px] object-contain sm:h-12 lg:h-14"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const partners = [
  {
    src: "/images/home/about/barn.jpg",
    alt: "Barn Council",
  },
  {
    src: "/images/home/about/bexley-council-logo.jpg",
    alt: "Bexley Council",
  },
  {
    src: "/images/home/about/brent.jpg",
    alt: "Brent Council",
  },
  {
    src: "/images/home/about/bright.jpg",
    alt: "Brighton Council",
  },
  {
    src: "/images/home/about/brom.jpg",
    alt: "Bromley Council",
  },
  {
    src: "/images/home/about/cam.jpg",
    alt: "Cam Council",
  },
  {
    src: "/images/home/about/croydon-logo.jpg",
    alt: "Croydon Council",
  },
  {
    src: "/images/home/about/dag.jpg",
    alt: "Dag Council",
  },
  {
    src: "/images/home/about/ealing.jpg",
    alt: "Ealing Council",
  },
  {
    src: "/images/home/about/enfield.jpg",
    alt: "Enfield Council",
  },
  {
    src: "/images/home/about/green.jpg",
    alt: "Green Council",
  },
  {
    src: "/images/home/about/hack.jpg",
    alt: "Hack Council",
  },
  {
    src: "/images/home/about/hammer.jpg",
    alt: "Hammer and Fulham Council",
  },
  {
    src: "/images/home/about/haring.jpg",
    alt: "Haring Council",
  },
  {
    src: "/images/home/about/harrow.jpg",
    alt: "Harrow Council",
  },
  {
    src: "/images/home/about/havering.jpg",
    alt: "Havering Council",
  },
  {
    src: "/images/home/about/hillingdon.jpg",
    alt: "Hillingdon Council",
  },
  {
    src: "/images/home/about/houns.jpg",
    alt: "Houns Council",
  },
  {
    src: "/images/home/about/ken.jpg",
    alt: "Ken Council",
  },
  {
    src: "/images/home/about/king.jpg",
    alt: "King Council",
  },
  {
    src: "/images/home/about/lamb_1.jpg",
    alt: "Lamb Council",
  },
  {
    src: "/images/home/about/lew_1.jpg",
    alt: "Lew Council",
  },
  {
    src: "/images/home/about/merton.jpg",
    alt: "Merton Council",
  },
  {
    src: "/images/home/about/new.jpg",
    alt: "New Council",
  },
  {
    src: "/images/home/about/red.jpg",
    alt: "Red Council",
  },
  {
    src: "/images/home/about/rich.jpg",
    alt: "Rich Council",
  },
  {
    src: "/images/home/about/serve.jpg",
    alt: "Serve Council",
  },
  {
    src: "/images/home/about/south_2.jpg",
    alt: "South Council",
  },
  {
    src: "/images/home/about/sutt.jpg",
    alt: "Sutt Council",
  },
  {
    src: "/images/home/about/tower.jpg",
    alt: "Tower Council",
  },
  {
    src: "/images/home/about/tree.jpg",
    alt: "Tree Council",
  },
  {
    src: "/images/home/about/west.jpg",
    alt: "West Council",
  },
];
</script>

<style scoped>
.partner-slider {
  overflow: hidden;
  width: 100%;
}

.partner-track {
  display: flex;
  width: max-content;
  animation: scrollPartners 80s linear infinite;
}

@keyframes scrollPartners {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
