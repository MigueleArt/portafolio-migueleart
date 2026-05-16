/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Education {
  institution: string
  degree: string
  startYear: string
  endYear: string
}

export const education: Education[] = [
  {
    institution: "Universidad Tecnológica de Tehuacán",
    degree: "TSU en Tecnologías de la Información — Desarrollo de Software Multiplataforma",
    startYear: "2023",
    endYear: "Actual"
  },
  {
    institution: "CONALEP Tehuacán",
    degree: "Técnico en Soporte y Mantenimiento de Equipo de Cómputo",
    startYear: "2019",
    endYear: "2022"
  }
]
