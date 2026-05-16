/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-32 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-widest font-bold">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <span>© {currentYear} José Miguel Jiménez Enríquez</span>
        <span className="hidden md:inline text-white/10">|</span>
        <span>Hecho con React + Tailwind CSS</span>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2">
        <span className="text-accent/50 glow-text">www.migueleart.com (Próximamente)</span>
      </div>
    </footer>
  );
}
