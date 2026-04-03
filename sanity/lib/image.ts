import createImageUrlBuilder from "@sanity/image-url"
import { client } from "./client"

const imageBuilder = client ? createImageUrlBuilder(client) : null

export function urlForImage(source: any | null | undefined) {
  if (!source || !imageBuilder) {
    return null
  }
  return imageBuilder.image(source)
}
