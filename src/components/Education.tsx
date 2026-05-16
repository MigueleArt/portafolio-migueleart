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

      <div className="grid grid-cols-1 gap-6">
        {education.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-2xl transition-all hover:bg-white/[0.08]">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
              {item.institution}
            </p>
            
            <div className="space-y-4">
              {item.degrees.map((degree, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <div className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full mt-1.5 transition-colors ${idx === 0 ? 'bg-accent shadow-[0_0_8px_rgba(0,242,255,0.6)]' : 'bg-white/20'}`} />
                    {idx < item.degrees.length - 1 && (
                      <div className="w-[1px] flex-1 bg-white/10 my-1" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <p className={`text-sm font-bold transition-colors ${idx === 0 ? 'text-white' : 'text-white/60'}`}>
                        {degree.name}
                      </p>
                      <span className="text-[10px] text-white/40 font-mono flex-shrink-0 pt-0.5">
                        {degree.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
