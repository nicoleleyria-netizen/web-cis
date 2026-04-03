"use client"

let loadPromise: Promise<void> | null = null

function waitFor(predicate: () => boolean, timeout = 20000, ms = 120): Promise<void> {
  return new Promise((resolve, reject) => {
    if (predicate()) return resolve()
    const start = Date.now()
    const timer = setInterval(() => {
      if (predicate()) {
        clearInterval(timer)
        resolve()
        return
      }
      if (Date.now() - start > timeout) {
        clearInterval(timer)
        reject(new Error("waitFor timed out"))
      }
    }, ms)
  })
}

function ensureScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existingById = document.getElementById(id) as HTMLScriptElement | null
    const existingBySrc = Array.from(document.getElementsByTagName("script")).find((x) =>
      (x as HTMLScriptElement).src?.includes(src),
    ) as HTMLScriptElement | undefined

    if (existingById || existingBySrc) {
      resolve()
      return
    }

    const s = document.createElement("script")
    s.id = id
    s.src = src
    s.type = "text/javascript"
    s.async = false
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(s)
  })
}

export function loadAsystirOnDemand(): Promise<void> {
  if (loadPromise) return loadPromise

  if (typeof (window as any).ShowReservationArea === "function") {
    return Promise.resolve()
  }

  loadPromise = (async () => {
    // 1) jQuery (Asystir suele depender de $ global)
    if (typeof (window as any).jQuery !== "function") {
      await ensureScript("https://code.jquery.com/jquery-3.7.1.min.js", "asystir-jquery")
      await waitFor(() => typeof (window as any).jQuery === "function", 8000)
    }

    // 2) Config local (public)
    await ensureScript("/asystir_conf11aa.js", "asystir-config-public")

    // 3) Esperar API global; si no aparece, cargar Process3 explícitamente
    try {
      await waitFor(() => typeof (window as any).ShowReservationArea === "function", 8000)
    } catch {
      await ensureScript("https://asystir.com/Process3.js", "asystir-process3-fallback")
      await waitFor(() => typeof (window as any).ShowReservationArea === "function", 12000)
    }
  })()

  loadPromise.catch(() => {
    loadPromise = null
  })

  return loadPromise
}

export async function showReservationArea(): Promise<boolean> {
  try {
    await loadAsystirOnDemand()

    const fn = (window as any).ShowReservationArea
    if (typeof fn !== "function") return false

    // Limpieza de estado previo
    const root = document.querySelector(".AsystirCenterAligner") as HTMLElement | null
    if (root && !root.children.length) {
      root.classList.remove("ShowReservationArea")
      root.style.display = ""
      root.style.pointerEvents = ""
    }

    fn()

    // Validar que realmente aparezca contenido
    await new Promise((r) => setTimeout(r, 800))
    const hasContent = !!(root && root.querySelector(".ReservationPanel, .ssscontent, .AsystirContainer, .ControlPanel"))

    if (!hasContent) {
      // reintento único
      fn()
      await new Promise((r) => setTimeout(r, 800))
      const hasContent2 = !!(root && root.querySelector(".ReservationPanel, .ssscontent, .AsystirContainer, .ControlPanel"))
      if (!hasContent2) return false
    }

    return true
  } catch (err) {
    console.error("[sis] Error cargando Asystir", err)
    return false
  }
}

export function AsystirLoader() {
  return null
}
