<template>
  <section class="bg-white py-14 sm:py-16 md:py-20">
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10"
    >
      <div class="flex flex-col divide-y-2 divide-neutral-200">
        <article
          v-for="(post, index) in posts"
          :key="post.id"
          class="py-20 first:pt-0 last:pb-0"
        >
          <div
            class="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center"
            :class="
              index % 2 === 0
                ? ''
                : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
            "
          >
            <!-- Image -->
            <div
              class="overflow-hidden w-full md:w-[80%]"
              :class="index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'"
            >
              <NuxtImg
                :src="post.image"
                :alt="post.title"
                class="h-[240px] w-full object-cover sm:h-[280px] md:h-[300px]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Content -->
            <div
              class="flex flex-col md:h-[300px] md:justify-between"
              :class="index % 2 === 0 ? '' : 'md:pr-4'"
            >
              <!-- Meta -->
              <div>
                <p
                  class="mb-4 font-poppins-blog text-[11px] tracking-[0.18em] text-neutral-500"
                >
                  {{ post.date }}&nbsp;–&nbsp;{{ post.category }}
                </p>
                <h2
                  class="font-abaya text-[clamp(1.3rem,2.2vw,1.65rem)] uppercase leading-[1.3] text-neutral-900 mb-4"
                >
                  {{ post.title }}
                </h2>
                <p class="font-poppins leading-[1.7] text-neutral-500">
                  {{ post.excerpt }}
                </p>
              </div>

              <!-- CTA -->
              <div class="mt-6">
                <CommonAppButton
                  :href="post.href"
                  variant="onLight"
                  :withArrow="false"
                  to="/blogdetailedpage"
                >
                  Read more
                </CommonAppButton>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    date: "May 13, 2025",
    category: "Architectural Trends",
    title: "How to Get Planning Permission in Croydon",
    excerpt:
      "Speculating on the future of arches in architecture, this article examines emerging trends, materials, and innovations that could redefine how arches are used in the coming years.",
    image: "/images/blogs/blog-1.png",
    href: "#",
  },
  {
    id: 2,
    date: "May 14, 2025",
    category: "Cultural & Symbolic Architecture",
    title: "Croydon Conservation Areas Explained",
    excerpt:
      "A cultural exploration of arches, detailing their symbolic meanings and importance in various societies throughout history, from religious symbols to representations of power and unity.",
    image: "/images/blogs/blog-2.png",
    href: "#",
  },
  {
    id: 3,
    date: "May 15, 2025",
    category: "Architectural Trends",
    title: "Planning Application Costs in South London",
    excerpt:
      "An in-depth look at the engineering principles behind arches, highlighting their strength, stability, and why they continue to be a favored element in construction.",
    image: "/images/blogs/blog-3.png",
    href: "#",
  },
  {
    id: 4,
    date: "May 18, 2025",
    category: "Cultural & Symbolic Architecture",
    title: "Common Extension Mistakes to Avoid",
    excerpt:
      "A showcase of some of the world’s most famous buildings that prominently feature arches, from ancient landmarks like the Colosseum to modern architectural marvels.",
    image: "/images/blogs/blog-4.png",
    href: "#",
  },
];
</script>
