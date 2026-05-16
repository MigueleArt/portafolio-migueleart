/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
        <GraduationCap className="w-8 h-8 text-white/90" />
        Educación
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {education.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-2xl transition-all hover:bg-white/[0.08]">
            <div className="flex justify-between items-start gap-4 mb-2">
              <p className="text-accent text-sm font-bold uppercase tracking-wide leading-tight">
                {item.institution}
              </p>
              <span className="text-[10px] text-white/40 font-mono flex-shrink-0">
                {item.startYear} — {item.endYear}
              </span>
            </div>
            <p className="text-sm text-white/80 font-medium">
              {item.degree}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
