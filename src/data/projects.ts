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
  features?: string[]
}

export const projects: Project[] = [
  {
    name: "Carreto Plus — Sistema POS & Gestión Logística",
    description: "Plataforma empresarial de alto rendimiento diseñada para la optimización de ventas y logística en campo de la empresa Carreto. Implementa un sistema de Punto de Venta (POS) intuitivo con registro de transacciones en tiempo real, gestión avanzada de clientes y un motor de generación de reportes y tickets en PDF optimizados para dispositivos móviles y plataformas web. El sistema integra escaneo de códigos QR para el rastreo preciso de servicios, garantizando una operación fluida mediante una arquitectura 'Mobile-First' y despliegue híbrido.",
    tech: [
      "React 19",
      "TypeScript",
      "Firebase (Firestore & Auth)",
      "Capacitor (Native Android)",
      "Tailwind CSS 4",
      "jsPDF"
    ],
    features: [
      "Módulo POS con vinculación dinámica de clientes y productos.",
      "Sincronización en tiempo real de inventarios y ventas mediante Firebase Cloud Firestore.",
      "Generación automatizada de tickets de venta y reportes administrativos en PDF con compresión de imágenes.",
      "Sistema de escaneo de códigos QR integrado para validación de servicios y logística.",
      "Arquitectura multiplataforma (Web y Android Nativo) utilizando Capacitor 6.",
      "Panel de administración robusto con control de acceso basado en roles (RBAC) y métricas de rendimiento."
    ],
    github: "#",
    demo: "#"
  },
  {
    name: "Pets Pharma - Cotizador Integral",
    description: "Plataforma administrativa y de ventas especializada en la industria farmacéutica veterinaria. Diseñada para agilizar la generación de cotizaciones y el control operativo, integrando la gestión de catálogos de productos de laboratorios líderes (Pets Pharma, Kiron, Vets Pharma) con herramientas de análisis de datos en tiempo real.",
    tech: [
      "React",
      "Firebase (Firestore/Auth/Functions)",
      "Tailwind CSS",
      "Capacitor (Cross-platform)",
      "Recharts (Analytics)",
      "React PDF / jsPDF",
      "Cloud Integration"
    ],
    features: [
      "Sistema de cotización dinámico con cálculos automáticos de precios y descuentos, optimizado para la fuerza de ventas en campo.",
      "Generación instantánea de documentos profesionales en formato PDF para el envío inmediato de propuestas comerciales a clientes.",
      "Gestión integral de catálogos mediante Firebase Cloud Firestore para productos, clientes, representantes y distribuidores.",
      "Módulo de analítica avanzada con dashboards interactivos para el monitoreo de ventas y tendencias mediante Recharts.",
      "Control de acceso basado en roles (RBAC) seguro, implementado con Firebase Cloud Functions para la gestión de usuarios administrativos.",
      "Arquitectura multiplataforma preparada para despliegue web y móvil mediante la integración de Capacitor."
    ],
    github: "#", // Reemplaza con tu enlace si es público
    demo: "#" // Basado en tu configuración de Firebase
  },
  {
    name: "Abarrotes Pro",
    description: "Plataforma integral de gestión comercial diseñada para optimizar la operación de negocios minoristas. El sistema centraliza el control de inventarios, las ventas mediante un punto de venta (POS) fluido y el seguimiento detallado de créditos a clientes ('Fiados'). Su arquitectura basada en la nube garantiza que los datos financieros y operativos estén siempre seguros, sincronizados y accesibles en tiempo real desde cualquier dispositivo.",
    tech: [
      "React 19",
      "Firebase (Firestore / Auth)",
      "Tailwind CSS",
      "TypeScript",
      "Recharts (Data Visualization)",
      "Lucide React",
      "Vite"
    ],
    features: [
      "Punto de Venta (POS) Inteligente: Interfaz ágil para la gestión de carritos de compra, cobros multimetodo y generación de tickets digitales.",
      "Control de Inventario Dinámico: Seguimiento de existencias en tiempo real, alertas de bajo stock y gestión automatizada de precios y categorías.",
      "Gestión de 'Fiados' y Créditos: Módulo especializado para el registro de deudas de clientes, control de abonos y liquidaciones con historial histórico.",
      "Dashboard de Analíticas Avanzadas: Visualización interactiva de métricas de rendimiento, ingresos diarios y tendencias de productos más vendidos.",
      "Administración de Usuarios y Roles (RBAC): Control de acceso granular para empleados y administradores, asegurando la integridad de la información financiera.",
      "Arquitectura Cloud & Real-time: Sincronización instantánea de datos mediante Firestore, permitiendo una operatividad continua y sin pérdida de información."
    ],
    github: "#",
    demo: "#"
  },
  {
    name: "Droply — Plataforma de Gestión Logística y Tracking",
    description: "Plataforma integral SaaS diseñada para la administración de servicios y logística en tiempo real. El sistema permite la gestión centralizada de usuarios mediante roles (RBAC), un panel avanzado para operadores ('Keepers') y un monitor de rastreo público de pedidos. Destaca por su arquitectura basada en eventos para actualizaciones instantáneas, una interfaz moderna enfocada en la eficiencia operativa y una integración robusta con servicios de nube para garantizar la persistencia y seguridad de los datos.",
    tech: [
      "React",
      "Firebase / Firestore",
      "Real-time Tracking",
      "Authentication (RBAC)",
      "Cloud Integration",
      "Tailwind CSS",
      "State Management"
    ],
    features: [
      "Sistema de control de acceso basado en roles (RBAC) para la gestión segura de Administradores, Keepers y Clientes.",
      "Rastreo logístico en tiempo real con actualizaciones automáticas de estado mediante integración con Firebase Cloud Firestore.",
      "Dashboard operativo dedicado para 'Keepers', optimizado para la gestión de tareas asignadas y reporte de progresos en campo.",
      "Módulo de seguimiento público accesible mediante enlaces únicos, permitiendo a clientes finales monitorear sus pedidos sin necesidad de registro.",
      "Panel de administración centralizado para el control total de usuarios, edición de perfiles y monitoreo global de la actividad del sistema.",
      "Interfaz de usuario dinámica y responsiva con arquitectura 'Event-Driven' para una experiencia fluida y sin recargas de página."
    ],
    github: "#",
    demo: "https://droplymalta.vercel.app/"
  }

]
