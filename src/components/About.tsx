/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { User2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
        <User2 className="w-8 h-8 text-white/90" />
        Sobre mí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 leading-relaxed">
        <div className="space-y-4">
          <p className="text-white/80">
            Soy estudiante de <span className="text-accent font-medium">Técnico Superior Universitario en Tecnologías de la Información</span>, área de Desarrollo de Software Multiplataforma en la Universidad Tecnológica de Tehuacán. 
          </p>
          <p className="text-white/80">
            Me considero una persona altamente motivada y apasionada por el desarrollo de software. He tenido la oportunidad de trabajar en proyectos reales que me han permitido aplicar mis conocimientos y seguir creciendo profesionalmente.
          </p>
          
          <div className="pt-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Idiomas</h4>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-bold">Español</span>
                <span className="text-xs text-white/50">Nativo</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Inglés</span>
                <span className="text-xs text-white/50">Nivel Medio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Intereses personales</h4>
          <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Fútbol
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Música
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Mecanografía
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Videojuegos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Estrategia
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Voluntariado
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
