import { getBlogBySlug, unwrapBlogRecord } from '~/services/blogService'
import { mapBlogToDetail } from '~/mappers/blogMapper'

export function useBlog() {
  const route = useRoute()

  const slugRef = computed(() => {
    const raw = route.params.slug
    const value = Array.isArray(raw) ? raw[0] : raw
    return String(value ?? '').trim()
  })

  const { data, pending, error, refresh } = useAsyncData(
    () => `blog-detail-${slugRef.value}`,
    () => {
      if (!slugRef.value) return null
      return getBlogBySlug(slugRef.value)
    }
  )

  const blog = computed(() =>
    mapBlogToDetail(unwrapBlogRecord(data.value))
  )

  return {
    blog,
    pending,
    error,
    refresh,
  }
}