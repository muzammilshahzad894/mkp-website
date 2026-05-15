<template>
  <section class="bg-white py-14 sm:py-16 md:py-20">
    <div
      class="mx-auto w-full max-w-[min(100%,85vw,1400px)] px-5 sm:px-8 md:px-10"
    >
      <BlogsListSkeleton v-if="pending" />

      <div
        v-else-if="error"
        class="py-24 text-center"
        role="alert"
      >
        <p class="font-poppins text-neutral-600">
          We couldn’t load the blog posts. Please try again later.
        </p>
        <button
          type="button"
          class="mt-6 font-poppins text-sm font-medium uppercase tracking-[0.12em] text-neutral-800 underline underline-offset-4 transition hover:text-neutral-600"
          @click="refresh()"
        >
          Retry
        </button>
      </div>

      <div
        v-else-if="posts.length === 0"
        class="py-24 text-center"
      >
        <p class="font-poppins text-neutral-500">
          No blog posts published yet.
        </p>
      </div>

      <template v-else>
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

              <div
                class="flex flex-col md:h-[300px] md:justify-between"
                :class="index % 2 === 0 ? '' : 'md:pr-4'"
              >
                <div>
                  <p class="mb-4 font-poppins text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                    {{ post.date }}&nbsp;–&nbsp;{{ post.category }}
                  </p>
                  <h2 class="font-abaya mb-4 text-[clamp(1.3rem,2.2vw,1.65rem)] uppercase leading-[1.3] text-neutral-900">
                    {{ post.title }}
                  </h2>
                  <p class="font-poppins leading-[1.7] text-neutral-500">
                    {{ post.excerpt }}
                  </p>
                </div>

                <div class="mt-6">
                  <CommonAppButton
                    :to="post.href"
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

        <nav
          v-if="lastPage > 1"
          class="mt-16 flex flex-wrap items-center justify-center gap-2 border-t border-neutral-200 pt-12"
          aria-label="Blog pagination"
        >
          <button
            type="button"
            class="rounded-full border border-neutral-300 px-5 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 transition hover:border-neutral-800 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="currentPage <= 1"
            aria-label="Previous page"
            @click="goToPage(currentPage - 1)"
          >
            Previous
          </button>

          <button
            v-for="pageNum in visiblePages"
            :key="pageNum"
            type="button"
            class="min-w-[2.5rem] rounded-full px-3 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.14em] transition"
            :class="
              pageNum === currentPage
                ? 'bg-neutral-900 text-white'
                : 'border border-neutral-300 text-neutral-700 hover:border-neutral-800 hover:text-neutral-900'
            "
            :aria-label="`Page ${pageNum}`"
            :aria-current="pageNum === currentPage ? 'page' : undefined"
            @click="goToPage(pageNum)"
          >
            {{ pageNum }}
          </button>

          <button
            type="button"
            class="rounded-full border border-neutral-300 px-5 py-2.5 font-poppins text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700 transition hover:border-neutral-800 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="currentPage >= lastPage"
            aria-label="Next page"
            @click="goToPage(currentPage + 1)"
          >
            Next
          </button>
        </nav>
      </template>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const pageFromRoute = computed(() => {
  const raw = route.query.page
  const value = Array.isArray(raw) ? raw[0] : raw
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 1 ? Math.floor(parsed) : 1
})

const {
  posts,
  lastPage,
  currentPage,
  pending,
  error,
  refresh,
} = useBlogs(pageFromRoute)

const visiblePages = computed(() => {
  const total = lastPage.value
  const current = currentPage.value
  const windowSize = 5
  let start = Math.max(1, current - Math.floor(windowSize / 2))
  const end = Math.min(total, start + windowSize - 1)
  start = Math.max(1, end - windowSize + 1)

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

function goToPage(page) {
  if (page < 1 || page > lastPage.value || page === currentPage.value) {
    return
  }

  const query = { ...route.query }

  if (page <= 1) {
    delete query.page
  } else {
    query.page = String(page)
  }

  router.push({ path: route.path, query })

  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
