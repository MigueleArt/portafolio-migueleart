/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center text-2xl font-bold bg-surface glow-border">
              JM
            </div>
          </div>
          <div className="bg-accent/10 border border-accent/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,242,255,0.8)]"></span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-tighter">Disponible para trabajar</span>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black leading-tight glow-text"
        >
          Hola, soy <span className="text-accent">José Miguel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg leading-relaxed max-w-md"
        >
          Desarrollador de Software <span className="text-white">Full Stack & Mobile-First</span>. Especializado en crear soluciones empresariales escalables con React 19, Firebase e Inteligencia Artificial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full"
        >
          <a
            href="mailto:jmigueljimenez910@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-accent transition-colors"
            id="hero-contact"
          >
            <Mail className="w-4 h-4" />
            Contáctame
          </a>
          <a
            href="https://www.linkedin.com/in/josé-miguel-jimenez-enriquez-4b092b331"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-white/20 font-bold text-sm hover:border-accent transition-colors"
            id="hero-linkedin"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/MigueleArt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-white/20 font-bold text-sm hover:border-accent transition-colors"
            id="hero-github"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
