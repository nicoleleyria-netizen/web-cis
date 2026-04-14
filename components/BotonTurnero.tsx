"use client"

import { showReservationArea } from "@/components/asystir-loader"

export default function BotonTurnero() {
  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const opened = await showReservationArea()
    if (opened) {
      return
    }
    window.open("https://misaludmedica.com/Home.html?institution=cis", "_blank", "noopener,noreferrer")
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded w-full text-center transition-colors"
    >
      Solicitar Turno
    </button>
  )
}
