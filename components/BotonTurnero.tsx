"use client"

export default function BotonTurnero() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const fn = (window as any).ShowReservationArea
    if (typeof fn === "function") {
      fn()
      return
    }
    // fallback si aún no cargó el plugin
    setTimeout(() => {
      const retry = (window as any).ShowReservationArea
      if (typeof retry === "function") retry()
      else window.open("https://misaludmedica.com/Home.html?institution=cis", "_blank", "noopener,noreferrer")
    }, 700)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded w-full text-center transition-colors"
    >
      Sacar Turno Online
    </button>
  )
}
