/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
        <Code2 className="w-8 h-8 text-white/90" />
        Proyectos
      </h2>

      <div className="grid gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col md:flex-row gap-8 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
