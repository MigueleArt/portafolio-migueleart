/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  name: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: "RV Dental — Sitio Web Consultorio",
    description: "Página web para un consultorio médico dental. Incluye conexión a base de datos, pruebas unitarias y documentación técnica completa.",
    tech: ["Backend", "Base de Datos", "SQL"],
    github: "#",
    demo: "#"
  },
  {
    name: "App Punto de Venta — Abarrotes",
    description: "Aplicación de escritorio para el monitoreo y control de ventas de un negocio local. Gestión de inventario y reportes.",
    tech: ["Java", "SQL", "Desktop"],
    github: "#",
    demo: undefined
  }
]
