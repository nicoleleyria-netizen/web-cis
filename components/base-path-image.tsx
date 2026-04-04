import NextImage, { type ImageProps } from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function withBasePath(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src !== "string") return src
  if (!basePath) return src
  if (!src.startsWith("/")) return src
  if (src.startsWith(`${basePath}/`)) return src
  return `${basePath}${src}`
}

export default function Image(props: ImageProps) {
  return <NextImage {...props} src={withBasePath(props.src)} />
}
