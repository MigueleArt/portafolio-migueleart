/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Certification {
  issuer: string
  name: string
}

export const certifications: Certification[] = [
  {
    issuer: "Udemy",
    name: "Desarrollo Back-End y Front-End"
  },
  {
    issuer: "Fundación Carlos Slim",
    name: "Capacítate para el Empleo — Desarrollo Back-End y Front-End"
  },
  {
    issuer: "Fundación Carlos Slim",
    name: "Base de Datos"
  }
]
