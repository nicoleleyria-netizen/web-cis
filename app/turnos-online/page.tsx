"use client"

import { useEffect } from "react"
import { showReservationArea } from "@/components/asystir-loader"

export default function TurnosOnlinePage() {
  useEffect(() => {
    let canceled = false

    const openTurnero = async () => {
      const opened = await showReservationArea()
      if (!opened && !canceled) {
        window.location.href = "https://misaludmedica.com/Home.html?institution=cis"
      }
    }

    void openTurnero()

    return () => {
      canceled = true
    }
  }, [])

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <p className="text-muted-foreground">Abriendo turnero...</p>
    </main>
  )
}
