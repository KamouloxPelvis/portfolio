'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Contact from './components/Contact';
import Profil from './components/panels/Profile';
import Projects from './components/panels/Projects';
import Monitoring from './components/panels/Monitoring';
import Expertise from './components/panels/Expertise';

const panels = [
  {
    id: 'intro',
    title: 'PROFIL',
    color: 'bg-[#11091d]',
  },
  {
    id: 'projects',
    title: 'PROJETS',
    color: 'bg-[#160d25]',
  },
  {
    id: 'monitoring',
    title: 'MONITORING',
    color: 'bg-[#11091d]',
  },
  {
    id: 'expertise',
    title: 'FORMATION & EXPERTISE',
    color: 'bg-[#1b112e]',
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string>('intro');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-brand-bg px-4 md:px-10 pt-4 pb-0 flex flex-col items-center justify-start font-sans">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffb800;
          border-radius: 10px;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ffb800 rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/*
        Important SEO note:

        All four panels are rendered permanently in the DOM.
        The expanded state controls their visual presentation and
        interactivity, but does not conditionally mount/unmount
        their content.

        This allows search engines to discover the content of:
        - Profil
        - Projets
        - Monitoring
        - Formation & Expertise
      */}
      <div
        className="flex flex-col md:flex-row h-[calc(100vh-55px)] md:h-[calc(100vh-50px)] min-h-125 w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl relative"
        aria-label="Portfolio professionnel de Kamal Guidadou"
      >
        {panels.map((panel) => {
          const isExpanded = expanded === panel.id;

          return (
            <motion.section
              key={panel.id}
              layout
              onClick={() => setExpanded(panel.id)}
              animate={{
                flex: isExpanded ? 12 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 25,
                mass: 1.2,
              }}
              className={`relative cursor-pointer overflow-hidden border-white/5
                ${
                  isExpanded
                    ? 'bg-opacity-100'
                    : 'md:border-r border-b md:border-b-0 hover:bg-white/5'
                }
                ${panel.color} transition-colors duration-500`}
              aria-label={`Section ${panel.title}`}
            >
              {/* Background vertical title for navigation */}
              <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                <motion.h2
                  layout="position"
                  className={`font-mono tracking-widest uppercase transition-opacity duration-700
                    ${
                      isExpanded
                        ? 'opacity-5 scale-125 md:scale-150 blur-xs'
                        : 'opacity-30 text-[10px] md:text-xs'
                    }
                    md:[writing-mode:vertical-lr] md:rotate-180`}
                >
                  {panel.title}
                </motion.h2>
              </div>

              {/*
                The content is ALWAYS mounted.

                We only change:
                - opacity
                - transform
                - pointer-events
                - visibility

                This preserves the current interface while ensuring
                the actual textual content remains available in the DOM.
              */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 10,
                }}
                transition={{
                  duration: 0.35,
                  ease: 'easeOut',
                }}
                className={`relative z-10 h-full w-full p-6 md:p-16 flex flex-col justify-start overflow-y-auto custom-scrollbar ${
                  isExpanded
                    ? 'pointer-events-auto visible'
                    : 'pointer-events-none invisible'
                }`}
              >
                {panel.id === 'intro' && (
                  <Profil
                    onContactClick={() => setIsContactOpen(true)}
                  />
                )}

                {panel.id === 'projects' && <Projects />}

                {panel.id === 'monitoring' && <Monitoring />}

                {panel.id === 'expertise' && <Expertise />}
              </motion.div>
            </motion.section>
          );
        })}

        <motion.div
          initial={false}
          animate={{
            opacity: isContactOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={
            isContactOpen
              ? 'pointer-events-auto'
              : 'pointer-events-none'
          }
        >
          {isContactOpen && (
            <Contact
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}