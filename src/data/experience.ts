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
    role: "Desarrollador Backend",
    company: "Tecnoxico",
    startDate: "Enero 2024",
    endDate: "Agosto 2024",
    description: "Contribuí al desarrollo de la página web RV DENTAL para un consultorio médico. Trabajé en la conexión de base de datos, pruebas unitarias y documentación del código.",
    link: "#",
    linkLabel: "Saber más sobre Tecnoxico"
  },
  {
    role: "Desarrollo de App para Punto de Venta",
    company: "Borcelle",
    startDate: "Abril 2023",
    endDate: "Noviembre 2023",
    description: "Desarrollé una aplicación para el monitoreo de ventas para un negocio local de abarrotes, contribuyendo con la organización y control del proyecto.",
    link: "#",
    linkLabel: "Saber más sobre este proyecto"
  }
]
