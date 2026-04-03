import { groq } from "next-sanity"

// Get latest posts (for homepage)
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Get all posts with pagination
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current },
    "author": author->{ name, "slug": slug.current, image }
  }
`

// Get total posts count
export const postsCountQuery = groq`
  count(*[_type == "post"])
`

// Get single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    seoTitle,
    seoDescription,
    "categories": categories[]->{ title, "slug": slug.current },
    "author": author->{ name, "slug": slug.current, image, bio }
  }
`

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Get posts count by category
export const postsByCategoryCountQuery = groq`
  count(*[_type == "post" && $categorySlug in categories[]->slug.current])
`

// Get all categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`

// Get category by slug
export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`

// Search posts
export const searchPostsQuery = groq`
  *[_type == "post" && (title match $searchTerm || excerpt match $searchTerm || pt::text(body) match $searchTerm)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`

// Get related posts (same category, excluding current)
export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $currentSlug && count((categories[]->slug.current)[@ in $categorySlugss]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`
