<template>
  <div>
    <BlogDetailSkeleton v-if="pending" />

    <template v-else-if="error || !blog">
      <section
        class="relative min-h-[min(100dvh,640px)] w-full bg-neutral-900 font-sans text-white"
        role="alert"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"
          role="presentation"
        />
        <div
          class="relative z-10 mx-auto flex min-h-[min(100dvh,640px)] w-full max-w-[min(100%,88vw,1320px)] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
        >
          <p class="font-poppins text-lg text-white/90">
            This article could not be found or is no longer available.
          </p>
          <div class="mt-8 flex flex-col items-center gap-4">
            <button
              v-if="error"
              type="button"
              class="font-poppins text-sm font-medium uppercase tracking-[0.12em] text-white underline underline-offset-4 transition hover:text-white/80"
              @click="refresh()"
            >
              Retry
            </button>
            <CommonAppButton
              to="/blogs"
              variant="onDark"
              :withArrow="false"
            >
              Back to blog
            </CommonAppButton>
          </div>
        </div>
      </section>
    </template>

    <template v-else>
      <!-- Hero with featured image -->
      <section
        class="relative min-h-[min(100dvh,880px)] w-full bg-neutral-900 font-sans text-white"
        aria-labelledby="blog-detail-heading"
      >
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: heroBackground }"
          role="presentation"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/65"
          role="presentation"
        />

        <div
          class="relative z-10 mx-auto flex min-h-[min(100dvh,880px)] w-full max-w-[min(100%,88vw,1320px)] flex-col justify-end px-4 pb-6 pt-32 sm:px-6 sm:pb-8 md:pb-10 lg:px-8"
        >
          <NuxtLink
            to="/blogs"
            class="mb-8 inline-flex items-center font-poppins text-[11px] font-medium uppercase tracking-[0.14em] text-white/75 transition hover:text-white"
          >
            ← Back to blog
          </NuxtLink>

          <p class="mb-4 font-poppins text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
            {{ blog.date }}&nbsp;–&nbsp;{{ blog.category }}
          </p>

          <h1
            id="blog-detail-heading"
            class="font-abaya max-w-4xl text-[clamp(1.5rem,4vw,2.75rem)] uppercase leading-tight tracking-[0.04em]"
          >
            {{ blog.title }}
          </h1>

          <div
            class="mt-4 h-px w-full max-w-[min(100%,88vw,1150px)] bg-white/55"
            aria-hidden="true"
          />

          <p
            v-if="blog.excerpt"
            class="mt-5 max-w-3xl font-poppins text-[15px] leading-[1.75] text-white/85 sm:text-base"
          >
            {{ blog.excerpt }}
          </p>
        </div>
      </section>

      <!-- Article body -->
      <section class="bg-white py-14 sm:py-16 md:py-20">
        <div class="mx-auto w-full max-w-[min(100%,85vw,800px)] px-5 sm:px-8 md:px-10">
          <div
            v-if="blog.body"
            class="blog-content font-poppins text-[15px] leading-[1.85] text-neutral-600"
            v-html="blog.body"
          />
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
const { blog, pending, error, refresh } = useBlog()

const heroBackground = computed(() => {
  const image = blog.value?.image
  if (!image) {
    return 'linear-gradient(135deg, #262626 0%, #171717 100%)'
  }

  return `url('${image}')`
})

watch(
  blog,
  (value) => {
    if (!value) {
      return
    }

    useHead({
      title: value.metaTitle || `${value.title} — MKP Design`,
      meta: [
        {
          name: 'description',
          content: value.metaDescription || value.excerpt || '',
        },
        ...(value.metaKeywords
          ? [{ name: 'keywords', content: value.metaKeywords }]
          : []),
      ],
    })
  },
  { immediate: true },
)
</script>

<style scoped>
.blog-content :deep(p) {
  margin-bottom: 1.25rem;
}

.blog-content :deep(h2),
.blog-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Abhaya Libre', serif;
  font-size: 1.35rem;
  line-height: 1.3;
  color: #171717;
  text-transform: uppercase;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
}

.blog-content :deep(a) {
  color: #171717;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.blog-content :deep(img) {
  margin: 1.5rem 0;
  width: 100%;
  height: auto;
}
</style>
