import type React from "react"
import { PortableText as BasePortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

interface PortableTextProps {
  value: PortableTextBlock[]
}

const components = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; caption?: string } }) => {
      const imageUrl = urlForImage(value)?.width(800).url()
      if (!imageUrl) return null

      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={imageUrl || "/placeholder.svg"} alt={value.alt || ""} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: { href: string; blank?: boolean } }) => {
      const rel = value.blank ? "noopener noreferrer" : undefined
      const target = value.blank ? "_blank" : undefined
      return (
        <Link href={value.href} rel={rel} target={target} className="text-accent underline hover:no-underline">
          {children}
        </Link>
      )
    },
  },
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold text-foreground">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold text-foreground">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-4 italic text-muted-foreground">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  },
}

export function PortableTextContent({ value }: PortableTextProps) {
  return <BasePortableText value={value} components={components as any} />
}
