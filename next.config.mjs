/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              // Allow all origins by default (fallback for unlisted directives)
              "default-src 'self' https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com",
              // Scripts: jQuery CDN + Asystir domains + inline/eval needed by the plugin
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com https://code.jquery.com https://va.vercel-scripts.com",
              // Styles: Asystir injects inline styles and may load external stylesheets
              "style-src 'self' 'unsafe-inline' https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com https://fonts.googleapis.com",
              // Images: Asystir loads icons/images from its servers
              "img-src 'self' data: blob: https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com https://cdn.sanity.io",
              // Fonts: Google Fonts + Asystir may load custom fonts
              "font-src 'self' data: https://fonts.gstatic.com https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com",
              // XHR/Fetch/WebSocket: Asystir makes API calls to its servers
              "connect-src 'self' https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com https://cdn.sanity.io https://*.sanity.io https://va.vercel-scripts.com ws: wss:",
              // Iframes: Asystir and Google Maps
              "frame-src 'self' https://asystir.com https://*.asystir.com https://www.brservicecentrals.com https://www.storecentralapps.com https://www.google.com https://maps.google.com",
            ].join('; ')
          }
        ]
      }
    ]
  }
}

export default nextConfig
