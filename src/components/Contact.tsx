/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-3xl font-bold mb-4">¿Hablamos?</h2>
            <p className="text-white/60 leading-relaxed max-w-[400px]">
              Si tienes una propuesta interesante, alguna duda o simplemente quieres saludar, no dudes en escribirme.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:jmigueljimenez910@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium text-white/80 group-hover:text-white">jmigueljimenez910@gmail.com</span>
            </a>
            <a href="tel:2371034850" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium text-white/80 group-hover:text-white">237-1034850</span>
            </a>
          </div>

          <div className="flex gap-4">
             <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Nombre</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
              placeholder="Tu nombre..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all"
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Mensaje</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 focus:bg-white/[0.08] transition-all resize-none"
              placeholder="¿Cómo puedo ayudarte?"
            />
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-accent text-black font-bold py-4 rounded-xl hover:bg-accent-hover transition-all active:scale-[0.98]">
            <Send className="w-5 h-5" />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
