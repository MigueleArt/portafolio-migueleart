/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
        <Award className="w-8 h-8 text-white/90" />
        Certificaciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider font-black text-accent mb-2 block">
              {cert.issuer}
            </span>
            <h3 className="font-bold text-white/90 leading-tight">
              {cert.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
