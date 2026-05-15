import { getBlogs } from '~/services/blogService'
import { mapBlogToListItem } from '~/mappers/blogMapper'

export function useBlogs(page = 1) {
  const pageRef = computed(() => {
    const value = toValue(page)
    return Number.isFinite(value) && value >= 1 ? Math.floor(value) : 1
  })

  const { data, pending, error, refresh } = useAsyncData(
    () => `blogs-page-${pageRef.value}`,
    () => getBlogs(pageRef.value),
  )

  const posts = computed(() =>
    (data.value?.data ?? []).map(mapBlogToListItem)
  )

  const meta = computed(() => data.value?.meta ?? null)

  const lastPage = computed(() => meta.value?.last_page ?? 1)

  const currentPage = computed(() => meta.value?.current_page ?? pageRef.value)

  const total = computed(() => meta.value?.total ?? 0)

  return {
    posts,
    meta,
    lastPage,
    currentPage,
    total,
    pending,
    error,
    refresh,
  }
}