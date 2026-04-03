import { client, isSanityConfigured } from "./client"
import {
  latestPostsQuery,
  allPostsQuery,
  postsCountQuery,
  postBySlugQuery,
  postsByCategoryQuery,
  postsByCategoryCountQuery,
  allCategoriesQuery,
  categoryBySlugQuery,
  searchPostsQuery,
  relatedPostsQuery,
} from "./queries"
import type { Post, Category } from "@/types/sanity"

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  if (!isSanityConfigured() || !client) return []
  try {
    const posts = await client.fetch(latestPostsQuery, { limit })
    return Array.isArray(posts) ? posts : []
  } catch {
    return []
  }
}

export async function getAllPosts(page = 1, pageSize = 9): Promise<{ posts: Post[]; total: number }> {
  if (!isSanityConfigured() || !client) return { posts: [], total: 0 }
  try {
    const start = (page - 1) * pageSize
    const end = start + pageSize

    const [posts, total] = await Promise.all([
      client.fetch(allPostsQuery, { start, end }),
      client.fetch(postsCountQuery),
    ])

    return {
      posts: Array.isArray(posts) ? posts : [],
      total: typeof total === "number" ? total : 0,
    }
  } catch {
    return { posts: [], total: 0 }
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured() || !client) return null
  try {
    const post = await client.fetch(postBySlugQuery, { slug })
    return post ?? null
  } catch {
    return null
  }
}

export async function getPostsByCategory(
  categorySlug: string,
  page = 1,
  pageSize = 9,
): Promise<{ posts: Post[]; total: number }> {
  if (!isSanityConfigured() || !client) return { posts: [], total: 0 }
  try {
    const start = (page - 1) * pageSize
    const end = start + pageSize

    const [posts, total] = await Promise.all([
      client.fetch(postsByCategoryQuery, { categorySlug, start, end }),
      client.fetch(postsByCategoryCountQuery, { categorySlug }),
    ])

    return {
      posts: Array.isArray(posts) ? posts : [],
      total: typeof total === "number" ? total : 0,
    }
  } catch {
    return { posts: [], total: 0 }
  }
}

export async function getAllCategories(): Promise<Category[]> {
  if (!isSanityConfigured() || !client) return []
  try {
    const categories = await client.fetch(allCategoriesQuery)
    return Array.isArray(categories) ? categories : []
  } catch {
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!isSanityConfigured() || !client) return null
  try {
    const category = await client.fetch(categoryBySlugQuery, { slug })
    return category ?? null
  } catch {
    return null
  }
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
  if (!isSanityConfigured() || !client) return []
  try {
    const posts = await client.fetch(searchPostsQuery, { searchTerm: `*${searchTerm}*` })
    return Array.isArray(posts) ? posts : []
  } catch {
    return []
  }
}

export async function getRelatedPosts(currentSlug: string, categorySlugs: string[]): Promise<Post[]> {
  if (!isSanityConfigured() || !client) return []
  try {
    const posts = await client.fetch(relatedPostsQuery, { currentSlug, categorySlugs })
    return Array.isArray(posts) ? posts : []
  } catch {
    return []
  }
}
