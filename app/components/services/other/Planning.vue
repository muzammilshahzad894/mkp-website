<template>
    <section class="bg-white py-14 sm:py-16 md:py-20">
      <div class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10">
        <div class="flex flex-col divide-y-2 divide-neutral-200">
          <article
            v-for="(post, index) in posts"
            :key="post.id"
            class="py-20 first:pt-0 last:pb-0"
          >
            <div
              class="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center"
              :class="index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'"
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
                  <p class="mb-4 font-poppins text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
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
      date: 'Planning Guide',
      category: 'Planning Permission',
      title: 'How to Secure Planning Permission in the UK',
      excerpt:
        'Understanding the planning process is the first step in any successful project. We guide clients through requirements, drawings, and approvals to ensure a smooth submission with minimal delays.',
        image: '/images/blogs/blog-4.png',

      href: '#',
    },
    {
      id: 2,
      date: 'Compliance',
      category: 'Building Regulations',
      title: 'Building Regulations Explained Simply',
      excerpt:
        'Building regulations ensure your project is safe, efficient, and structurally sound. We handle technical compliance so your design meets all legal requirements without compromising vision.',
        image: '/images/blogs/blog-3.png',

      href: '#',
    },
    {
      id: 3,
      date: 'Strategy',
      category: 'Approval Process',
      title: 'Avoiding Common Planning Application Mistakes',
      excerpt:
        'Many projects get delayed due to avoidable errors in documentation or design assumptions. We ensure every detail is prepared correctly before submission to reduce rejection risk.',
        image: '/images/blogs/blog-2.png',

      href: '#',
    },
  ]
  </script>