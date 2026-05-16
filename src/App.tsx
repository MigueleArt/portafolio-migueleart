/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-accent selection:text-black">
      <Header />
      
      <main className="max-w-[1024px] mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Hero & Skills */}
          <div className="col-span-12 lg:col-span-5 space-y-16">
            <Hero />
            <div className="pt-8 border-t border-white/10">
              <Skills />
            </div>
          </div>
          
          {/* Right Column: Key Technical Content */}
          <div className="col-span-12 lg:col-span-7 space-y-20">
            <Experience />
            <div className="pt-8 border-t border-white/10">
              <Education />
            </div>
          </div>
        </div>

        {/* Full-width sections below the main grid */}
        <div className="mt-32 space-y-32">

          <Projects />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <About />
            <Certifications />
          </div>
          <Contact />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

