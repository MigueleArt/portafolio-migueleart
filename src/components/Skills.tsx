/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutGrid } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="py-4">
      <h3 className="text-xs uppercase text-white/40 tracking-widest font-bold mb-6">Habilidades Clave</h3>
      
      <div className="flex flex-col gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase text-white/30 tracking-tighter">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/80 hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
