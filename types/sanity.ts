import type { PortableTextBlock } from "@portabletext/types"

export interface Post {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  mainImage?: SanityImage
  body?: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
  categories?: Category[]
  author?: Author
}

export interface Author {
  name: string
  slug: string
  image?: SanityImage
  bio?: string
}

export interface Category {
  _id?: string
  title: string
  slug: string
  description?: string
  postCount?: number
}

export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}
