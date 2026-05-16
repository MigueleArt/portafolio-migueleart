/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  role: string
  company: string
  startDate: string
  endDate: string
  description: string
  link?: string
  linkLabel?: string
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Droply",
    startDate: "Abril 2025",
    endDate: "Actualidad",
    description: "Lidero el desarrollo de 'Carreto Plus' y la plataforma 'Droply Logistics'. Implemento arquitecturas Mobile-First con React 19 y Capacitor, integrando IA (Gemini) para optimización de procesos y Firebase para escalabilidad en tiempo real.",
    link: "https://droplymalta.vercel.app/",
    linkLabel: "Ver Plataforma Droply"
  },
  {
    role: "Desarrollador de Aplicaciones",
    company: "Pets Pharma / Kiron",
    startDate: "Agosto 2025 ",
    endDate: "Octubre 2025",
    description: "Desarrollo del Cotizador Integral para la industria veterinaria. Gestión de catálogos masivos en la nube, generación automatizada de reportes financieros y dashboards de analítica avanzada para laboratorios líderes.",
    link: "#",
    linkLabel: "Proyectos Veterinarios"
  },
  {
    role: "Desarrollador Backend",
    company: "Tecnoxico",
    startDate: "Enero 2024",
    endDate: "Agosto 2024",
    description: "Contribuí al desarrollo de soluciones web para el sector salud, especializándome en integración de bases de datos SQL y optimización de rendimiento.",
    link: "#",
    linkLabel: "Saber más"
  }
]
