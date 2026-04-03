import { NextResponse } from "next/server"
import { getAllPosts, getAllCategories } from "@/sanity/lib/fetch"
import { urlForImage } from "@/sanity/lib/image"

export async function GET() {
  try {
    const [postsResult, categories] = await Promise.all([
      getAllPosts(1, 50).catch(() => ({ posts: [], total: 0 })),
      getAllCategories().catch(() => []),
    ])

    const posts = postsResult?.posts || []
    const safeCategories = categories || []

    // Transform posts to include image URLs
    const transformedPosts = Array.isArray(posts)
      ? posts.map((post) => ({
          _id: post._id,
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          publishedAt: post.publishedAt || "",
          mainImage: post.mainImage ? urlForImage(post.mainImage)?.width(400).height(225).url() : null,
          categories: post.categories || [],
        }))
      : []

    return NextResponse.json({
      posts: transformedPosts,
      categories: safeCategories,
      total: postsResult?.total || 0,
    })
  } catch {
    return NextResponse.json({ posts: [], categories: [], total: 0 })
  }
}
