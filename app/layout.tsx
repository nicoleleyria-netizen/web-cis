import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Consultora CIS - Medicina Laboral y Consultoría en Salud | Córdoba",
    template: "%s | Consultora CIS",
  },
  description:
    "Consultora CIS: +18 años de experiencia en medicina laboral, exámenes preocupacionales, medicina del deporte e investigación clínica en Córdoba, Argentina. Soluciones integrales de salud para empresas.",
  keywords: [
    "medicina laboral Córdoba",
    "consultoría en salud",
    "exámenes preocupacionales",
    "medicina del deporte",
    "investigación clínica",
    "salud ocupacional",
    "exámenes periódicos",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Consultora CIS" }],
  metadataBase: new URL("https://consultoracis.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://consultoracis.com.ar",
    siteName: "Consultora CIS",
    title: "Consultora CIS - Medicina Laboral y Consultoría en Salud",
    description:
      "Más de 18 años brindando soluciones integrales de salud ocupacional para empresas y personas en Córdoba, Argentina.",
    images: [
      {
        url: "/professional-medical-team-modern-clinic-occupational-health.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo profesional de Consultora CIS - Medicina Laboral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultora CIS - Medicina Laboral y Consultoría en Salud",
    description:
      "Más de 18 años brindando soluciones integrales de salud ocupacional para empresas y personas.",
    images: ["/professional-medical-team-modern-clinic-occupational-health.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        <Script id="asystir-jquery" src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script id="asystir-config" src={`${basePath}/asystir_conf11aa.js`} strategy="afterInteractive" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />

        <Analytics />
      </body>
    </html>
  )
}
