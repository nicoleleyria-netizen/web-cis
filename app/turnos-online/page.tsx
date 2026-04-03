"use client"

import { useEffect } from "react"

export default function TurnosOnlinePage() {
  useEffect(() => {
    const fn = (window as any).ShowReservationArea
    if (typeof fn === "function") {
      fn()
      return
    }
    const t = setTimeout(() => {
      const retry = (window as any).ShowReservationArea
      if (typeof retry === "function") retry()
      else window.location.href = "https://misaludmedica.com/Home.html?institution=cis"
    }, 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <p className="text-muted-foreground">Abriendo turnero...</p>
    </main>
  )
}
