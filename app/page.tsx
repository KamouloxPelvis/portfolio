'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './components/Contact';
import Profil from './components/panels/Profile';
import Projects from './components/panels/Projects';
import Monitoring from './components/panels/Monitoring';
import Expertise from './components/panels/Expertise';

const panels = [
  { id: 'intro', title: 'PROFIL', color: 'bg-[#11091d]' },
  { id: 'projects', title: 'PROJETS', color: 'bg-[#160d25]' },
  { id: 'monitoring', title: 'MONITORING', color: 'bg-[#11091d]' },
  { id: 'expertise', title: 'FORMATION & EXPERTISE', color: 'bg-[#1b112e]' },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>('intro');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-brand-bg px-4 md:px-10 pt-4 pb-0 flex flex-col items-center justify-start font-sans">      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ffb800; border-radius: 10px; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #ffb800 rgba(255, 255, 255, 0.05); }
      `}</style>

      {/* Main container: Fixed height based on viewport to maintain a desktop-app feel */}
      <main className="flex flex-col md:flex-row h-[calc(100vh-55px)] md:h-[calc(100vh-50px)] min-h-125 w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl relative">
        
        {panels.map((panel) => (
          <motion.section
            key={panel.id}
            layout
            onClick={() => setExpanded(panel.id)}
            animate={{ flex: expanded === panel.id ? 12 : 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 1.2 }}
            className={`relative cursor-pointer overflow-hidden border-white/5 
              ${expanded === panel.id ? 'bg-opacity-100' : 'md:border-r border-b md:border-b-0 hover:bg-white/5'} 
              ${panel.color} transition-colors duration-500`}
          >
            {/* Background vertical title for navigation */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <motion.h2 
                layout="position"
                className={`font-mono tracking-widest uppercase transition-opacity duration-700
                  ${expanded === panel.id ? 'opacity-5 scale-125 md:scale-150 blur-xs' : 'opacity-30 text-[10px] md:text-xs'}
                  md:[writing-mode:vertical-lr] md:rotate-180`}
              >
                {panel.title}
              </motion.h2>
            </div>

            <AnimatePresence mode="wait">
              {expanded === panel.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  /* Container reset: Aligning to start to let components manage internal spacing */
                  className="relative z-10 h-full w-full p-6 md:p-16 flex flex-col justify-start overflow-y-auto custom-scrollbar"
                >
                  {panel.id === 'intro' && <Profil onContactClick={() => setIsContactOpen(true)} />}
                  {panel.id === 'projects' && <Projects />}
                  {panel.id === 'monitoring' && <Monitoring />}
                  {panel.id === 'expertise' && <Expertise />}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))}

        <AnimatePresence>
          {isContactOpen && <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />}
        </AnimatePresence>
      </main>
    </div>
  ); 
}