/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experiencia" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
        <Briefcase className="w-8 h-8 text-white/90" />
        Experiencia laboral
      </h2>

      <div className="space-y-12 ml-3 pl-8 border-l border-white/10">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-navy-dark ${index === 0 ? 'bg-accent shadow-[0_0_10px_rgba(0,242,255,0.5)]' : 'bg-accent/20'}`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-1">
              <h3 className="text-xl font-bold text-accent glow-text">{item.role}</h3>
              <span className="text-xs font-mono text-white/40 uppercase tracking-tight">
                {item.startDate} — {item.endDate}
              </span>
            </div>
            
            <h4 className="text-sm font-semibold text-white/60 mb-2">{item.company}</h4>
            
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              {item.description}
            </p>
            
            {item.link && (
              <a 
                href={item.link}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent hover:underline decoration-accent/30 underline-offset-4"
              >
                {item.linkLabel || 'Saber más'}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
