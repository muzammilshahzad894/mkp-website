import { apiGet } from '~/services/api'

export function getBlogs(page = 1) {
  return apiGet('api/blogs', { page })
}

export function getBlogBySlug(slug) {
  return apiGet(`api/blogs/${slug}`)
}

export function unwrapBlogRecord(response) {
  if (!response) {
    return null
  }

  if (response.data && !Array.isArray(response.data)) {
    return response.data
  }

  return response
}
