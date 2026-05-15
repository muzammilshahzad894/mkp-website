import { formatDate } from '~/utils/date'

export function mapBlogToListItem(blog) {
  return {
    id: blog.id,
    title: blog.title,
    category: blog.category,
    slug: blog.slug,
    excerpt: blog.excerpt,
    image: blog.featured_image_url,
    date: formatDate(blog.published_date),
    href: `/blogs/${blog.slug}`,
  }
}

export function mapBlogToDetail(blog) {
  if (!blog) {
    return null
  }

  return {
    id: blog.id,
    title: blog.title,
    category: blog.category,
    slug: blog.slug,
    excerpt: blog.excerpt,
    body: blog.body,
    image: blog.featured_image_url,
    date: formatDate(blog.published_date),
    metaTitle: blog.meta_title,
    metaDescription: blog.meta_description,
    metaKeywords: blog.meta_keywords,
  }
}
