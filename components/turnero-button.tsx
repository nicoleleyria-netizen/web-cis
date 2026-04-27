"use client"

import { useState } from "react"
import { showReservationArea } from "@/components/asystir-loader"

type Props = {
  className?: string
  label?: string
}

export function TurneroButton({ className, label = "Solicitar Turno" }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const opened = await showReservationArea()
      if (!opened) {
        window.location.href = "/turnos-online"
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? "Cargando..." : label}
    </button>
  )
}
