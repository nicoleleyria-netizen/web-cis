import type { Metadata } from "next"
import ServiciosMedicosClientPage from "./servicios-medicos-client-page"

export const metadata: Metadata = {
  title: "Servicios Médicos Generales - Atención Integral y Especialidades",
  description:
    "Atención médica integral con múltiples especialidades: interconsultas, rehabilitación, exámenes complementarios y más. Servicios para empresas y particulares en Córdoba.",
  openGraph: {
    title: "Servicios Médicos Generales - Consultora CIS",
    description:
      "Atención médica integral con profesionales en múltiples especialidades para empresas y particulares.",
    images: ["/images/sis-real/recepcion-paciente.jpg"],
  },
  alternates: {
    canonical: "/servicios-medicos-generales",
  },
}

export default function ServiciosMedicosGeneralesPage() {
  return <ServiciosMedicosClientPage />
}
