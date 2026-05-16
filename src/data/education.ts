/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Degree {
  name: string
  period: string
}

export interface Education {
  institution: string
  degrees: Degree[]
}

export const education: Education[] = [
  {
    institution: "Universidad Tecnológica de Tehuacán",
    degrees: [
      { name: "Ingeniería en Desarrollo y Gestión de Software", period: "2025 — Actual" },
      { name: "TSU en Tecnologías de la Información — Desarrollo de Software Multiplataforma", period: "2023 — 2025" }
    ]
  },
  {
    institution: "CONALEP Tehuacán",
    degrees: [
      { name: "Técnico en Soporte y Mantenimiento de Equipo de Cómputo", period: "2019 — 2022" }
    ]
  }
]
