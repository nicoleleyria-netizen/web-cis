import { createClient, type SanityClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
      useCdn: process.env.NODE_ENV === "production",
    })
  : null

export function isSanityConfigured(): boolean {
  return client !== null
}
